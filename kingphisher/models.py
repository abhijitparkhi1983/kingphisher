from kingphisher import db

class User(db.Model):

    keys = db.relationship('Key')
    key_id = db.Column(db.Integer,db.ForeignKey('keys.id'),nullable=True)

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), index=True, unique=False)
    password = db.Column(db.String(255), nullable=True)
    ip_address = db.Column(db.String(255), nullable=True)

    def __init__(self, email, password, key_id, ip_address):
        self.email = email
        self.password = password
        self.key_id = key_id
        self.ip_address = ip_address


class Key(db.Model):
    __tablename__ = 'keys'

    id = db.Column(db.Integer, primary_key=True)
    key_value = db.Column(db.String(255), nullable=False)
    count = db.Column(db.Integer, default=0)
    clicked = db.Column(db.Integer, default=0)
    visit = db.Column(db.Integer, default=0)
    opened = db.Column(db.Integer, default=0)
    clicked_ip_address = db.Column(db.String(255), nullable=True)
    opened_ip_address = db.Column(db.String(255), nullable=True)
    visit_ip_address = db.Column(db.String(255), nullable=True)

    def __init__(self, key_value, count):
        self.key_value = key_value
        self.count = count
