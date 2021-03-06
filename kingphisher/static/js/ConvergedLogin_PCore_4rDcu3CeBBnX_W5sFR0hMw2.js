/*!
 * ------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------
 *
 * This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
 *
 *   json2.js (2016-05-01)
 *   https://github.com/douglascrockford/JSON-js
 *   License: Public Domain
 *
 * Provided for Informational Purposes Only
 *
 * ----------------------------------------------- END OF THIRD PARTY NOTICE ------------------------------------------
 */ !(function (e) {
    function n(n) {
        for (var t, i, o = n[0], r = n[1], s = 0, c = []; s < o.length; s++) (i = o[s]), Object.prototype.hasOwnProperty.call(a, i) && a[i] && c.push(a[i][0]), (a[i] = 0);
        for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        for (l && l(n); c.length; ) c.shift()();
    }
    var t,
        i = {},
        a = { 22: 0 };
    function o(n) {
        if (i[n]) return i[n].exports;
        var t = (i[n] = { i: n, l: !1, exports: {} });
        return e[n].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    Function.prototype.bind ||
        ((t = Array.prototype.slice),
        (Function.prototype.bind = function (e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var n = t.call(arguments, 1),
                i = n.length,
                a = this,
                o = function () {},
                r = function () {
                    return (n.length = i), n.push.apply(n, arguments), a.apply(o.prototype.isPrototypeOf(this) ? this : e, n);
                };
            return this.prototype && (o.prototype = this.prototype), (r.prototype = new o()), r;
        })),
        (document.head = document.head || document.getElementsByTagName("head")[0]),
        (function () {
            if (!window.Promise) {
                (e.all = function (t) {
                    return t && t.length
                        ? new e(function (i, a) {
                              for (var o = [], r = 0, s = 0, c = t.length; s < c; ++s) {
                                  var l = t[s];
                                  l instanceof e
                                      ? (r++,
                                        l.then(
                                            n(o, s, function () {
                                                0 == --r && i(o);
                                            }),
                                            a
                                        ))
                                      : (o[s] = l);
                              }
                              0 === r &&
                                  setTimeout(function () {
                                      i(o);
                                  }, 0);
                          })
                        : e.resolve([]);
                }),
                    (e.race = function (n) {
                        return new e(function (i, a) {
                            if (n && n.length)
                                for (var o = 0, r = n.length; o < r; ++o) {
                                    var s = n[o];
                                    s instanceof e ? s.then(i, a) : setTimeout(t(i, s), 0);
                                }
                        });
                    }),
                    (e.reject = function (n) {
                        return new e(function (e, t) {
                            t(n);
                        });
                    }),
                    (e.resolve = function (n) {
                        return n instanceof e
                            ? n
                            : n && "function" == typeof n.then
                            ? new e(function (e, t) {
                                  n.then(e, t);
                              })
                            : new e(function (e) {
                                  e(n);
                              });
                    }),
                    (window.Promise = e);
            }
            function e(n) {
                var t = this,
                    i = 0,
                    a = null,
                    o = [];
                function r() {
                    if (o.length > 0) {
                        var e = o.slice();
                        (o = []),
                            setTimeout(function () {
                                for (var n = 0, t = e.length; n < t; ++n) e[n]();
                            }, 0);
                    }
                }
                function s(e) {
                    0 === i && ((a = e), (i = 1), r());
                }
                function c(e) {
                    0 === i && ((a = e), (i = 2), r());
                }
                (t.then = function (n, t) {
                    return new e(function (s, c) {
                        !(function (n, t, s, c) {
                            o.push(function () {
                                var o;
                                try {
                                    o = 1 === i ? ("function" == typeof n ? n(a) : a) : "function" == typeof t ? t(a) : a;
                                } catch (r) {
                                    return void c(r);
                                }
                                o instanceof e ? o.then(s, c) : 2 === i && "function" != typeof t ? c(o) : s(o);
                            }),
                                0 !== i && r();
                        })(n, t, s, c);
                    });
                }),
                    (t["catch"] = function (e) {
                        return t.then(null, e);
                    }),
                    (function () {
                        if ("function" != typeof n) throw new TypeError("Promise: argument is not a Function object");
                        try {
                            n(s, c);
                        } catch (e) {
                            c(e);
                        }
                    })();
            }
            function n(e, n, t) {
                return function (i) {
                    (e[n] = i), t();
                };
            }
            function t(e, n) {
                return function () {
                    e(n);
                };
            }
        })(),
        (o.e = function (e) {
            var n = [],
                t = a[e];
            if (0 !== t)
                if (t) n.push(t[2]);
                else {
                    var i = new Promise(function (n, i) {
                        t = a[e] = [n, i];
                    });
                    n.push((t[2] = i));
                    var r = window.ServerData,
                        s = (r && r.loader && r.loader.cdnRoots) || [],
                        c = r && r.slMaxRetry ? r.slMaxRetry : s.length - 1,
                        l = new Error();
                    var d = (function u(n, t) {
                        var i,
                            r = document.createElement("script");
                        (r.charset = "utf-8"),
                            (r.timeout = 120),
                            o.nc && r.setAttribute("nonce", o.nc),
                            (r.src = n),
                            (i = function (i) {
                                (r.onerror = r.onload = null), clearTimeout(d);
                                var o = a[e];
                                if (0 !== o)
                                    if (o)
                                        if (c <= 0 || t === c) {
                                            var p = i && ("load" === i.type ? "missing" : i.type),
                                                g = i && i.target && i.target.src;
                                            (l.message = "Loading chunk " + e + " failed after " + (c + 1) + " tries.\n(" + p + ": " + g + ")"), (l.name = "ChunkLoadError"), (l.type = p), (l.request = g), o[1](l), (a[e] = undefined);
                                        } else {
                                            var f = u(
                                                (function (e, n) {
                                                    if (!n) return e;
                                                    for (var t = 0; t < n.length; t++) if (0 == e.indexOf(n[t])) return n[(t + 1) % n.length] + e.substring(n[t].length);
                                                    return e;
                                                })(n, s),
                                                t + 1
                                            );
                                            document.head.appendChild(f);
                                        }
                                    else a[e] = undefined;
                            });
                        var d = setTimeout(function () {
                            i({ type: "timeout", target: r });
                        }, 12e4);
                        return (r.onerror = r.onload = i), r;
                    })(
                        (function (e) {
                            return (
                                o.p +
                                "content/js/asyncchunk/convergedlogin_p" +
                                ({
                                    0: "aadfedconflict",
                                    1: "alt",
                                    2: "clienttracing",
                                    3: "confirmrecoveryusername",
                                    4: "confirmsend",
                                    5: "confirmsignup",
                                    6: "credentialpicker",
                                    7: "customcssloader",
                                    8: "estslogin_accesspass",
                                    9: "estslogin_remoteloginpoll",
                                    10: "estslogin_searchorganization",
                                    11: "estslogin_signupusername",
                                    12: "estslogin_tenantdisambiguation",
                                    13: "fedconflict",
                                    14: "fedlink",
                                    15: "fetchsessionsprogress",
                                    16: "fido",
                                    17: "idpdisambiguation",
                                    18: "idpredirect",
                                    19: "idpredirectspeedbump",
                                    20: "learnmore",
                                    21: "learnmoreofflineaccount",
                                    23: "onetimecode",
                                    24: "password",
                                    25: "phonedisambiguation",
                                    26: "pop",
                                    27: "proofconfirmation",
                                    28: "prooffedconflict",
                                    29: "remoteconnectcanaryvalidation",
                                    30: "remoteconnectlocation",
                                    31: "remotengc",
                                    32: "resetpasswordsplitter",
                                    33: "tiles",
                                    34: "verticalsplittemplate",
                                    35: "viewagreement",
                                }[e] || e) +
                                "_" +
                                {
                                    0: "25f4e03c627aba230800",
                                    1: "87a69b4d2e35137087f6",
                                    2: "7b0f79a8151ed4a4538a",
                                    3: "7d60221e9b729e2be4eb",
                                    4: "681357c06cbf2136d4d5",
                                    5: "179f63f4ee27d9d38bf5",
                                    6: "8971fcb5b3b9de5b85c1",
                                    7: "80e23ecc89f82ce598ff",
                                    8: "4329f21b470e4cd05052",
                                    9: "0c247c5baeb1592e5a84",
                                    10: "1a6f6574efc31de3f697",
                                    11: "9bde3c82764a88dbb9c0",
                                    12: "887bf98323ad4f795633",
                                    13: "c414ff40fda252bdd7c4",
                                    14: "1f0c537be1d8046d8778",
                                    15: "058a1959de85a347b0f1",
                                    16: "fee876ed35cae5d6acf5",
                                    17: "cdbe96910b352ab96f22",
                                    18: "2e8d30a4ce944f88b9ee",
                                    19: "c795a78d3f884e387724",
                                    20: "4f5edb203f67dc49d7e1",
                                    21: "cec3425596439594a454",
                                    23: "4433911f2287e32a72e7",
                                    24: "badf853975be13d20e0d",
                                    25: "80fe26277c3a0eb9ae82",
                                    26: "68074db424a119736b4c",
                                    27: "81fef2fea89df9c82342",
                                    28: "5c38e47dcf695054bcc0",
                                    29: "4870ed42a13ffb4eaa1a",
                                    30: "006a5d3f7aec7325cf6a",
                                    31: "db2b879754cf2432a38d",
                                    32: "c0b225c911f9f0e15864",
                                    33: "399369e858a0ddc8d75e",
                                    34: "cc7e355fda334ef3c86a",
                                    35: "1134976668ad05a49376",
                                }[e] +
                                ".js"
                            );
                        })(e),
                        0
                    );
                    document.head.appendChild(d);
                }
            return Promise.all(n);
        }),
        (o.m = e),
        (o.c = i),
        (o.d = function (e, n, t) {
            o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
        }),
        (o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (e, n) {
            if ((1 & n && (e = o(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if ((o.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                for (var i in e)
                    o.d(
                        t,
                        i,
                        function (n) {
                            return e[n];
                        }.bind(null, i)
                    );
            return t;
        }),
        (o.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e["default"];
                      }
                    : function () {
                          return e;
                      };
            return o.d(n, "a", n), n;
        }),
        (o.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (o.p = ""),
        (o.oe = function (e) {
            throw (console.error(e), e);
        });
    var r = (window.webpackJsonp = window.webpackJsonp || []),
        s = r.push.bind(r);
    (r.push = n), (r = r.slice());
    for (var c = 0; c < r.length; c++) n(r[c]);
    var l = s;
    o((o.s = 57));
})([
    function (e, n) {
        (n.UsernameMaxLength = 113),
            (n.SATOTPV1Length = 6),
            (n.SATOTPLength = 8),
            (n.PhoneNumberConfirmationLength = 4),
            (n.OneTimeCodeDefaultLength = 16),
            (n.OneTimeCodeMaxLength = 7),
            (n.PCExperienceQS = "pcexp"),
            (n.PCExperienceDisabled = n.PCExperienceQS + "=false"),
            (n.NotPreferredCredentialQs = "npc"),
            (n.AnimationTimeout = 700),
            (n.Regex = { PhoneNumberValidation: /^[0-9 ()[\].\-#*/+]+$/ }),
            (n.ProofUpRedirectLandingView = { AccountCompromised: 1, RiskySession: 2 }),
            (n.LoginMode = {
                None: 0,
                Login: 1,
                ForceCredType: 3,
                LWAConsent: 4,
                GenericError: 5,
                ForceSignin: 6,
                OTS: 7,
                HIP_Login: 8,
                HIP_Lockout: 9,
                InviteBlocked: 10,
                SwitchUser: 11,
                LWADelegation: 12,
                ServiceBlocked: 13,
                IDPFailed: 14,
                StrongAuthOTC: 16,
                StrongAuthMobileOTC: 25,
                Finish: 27,
                LoginWizard_Login: 28,
                StrongAuthWABOTC: 30,
                LoginWizard_HIP_Login: 32,
                LoginWizard_Finish: 34,
                LoginMobile: 36,
                ForceSigninMobile: 37,
                GenericErrorMobile: 38,
                LoginHost: 39,
                ForceSigninHost: 40,
                GenericErrorHost: 42,
                StrongAuthHostOTC: 43,
                HIP_LoginHost: 45,
                HIP_LoginMobile: 46,
                HIP_LockoutHost: 47,
                HIP_LockoutMobile: 48,
                SwitchUserHost: 49,
                LoginXbox_Login: 50,
                HIP_LoginXbox: 51,
                FinishXbox: 52,
                IfExistsXbox: 53,
                StartIfExistsXbox: 54,
                StrongAuthXboxOTC: 55,
                LoginWPWiz_Login: 56,
                LoginWPWiz_HIP_Login: 57,
                LoginWPWiz_Finish: 58,
                StrongAuthWizOTC: 59,
                StrongAuthWPWizOTC: 60,
                FinishWPWiz: 61,
                SwitchUserMobile: 62,
                LoginWPWiz_PhoneSignIn: 63,
                LoginWPWiz_HIP_PhoneSignIn: 64,
                Login_PhoneSignIn: 65,
                Login_HIP_PhoneSignIn: 66,
                LoginHost_PhoneSignIn: 67,
                LoginHost_HIP_PhoneSignIn: 68,
                LoginMobile_PhoneSignIn: 69,
                LoginMobile_HIP_PhoneSignIn: 70,
                LoginWizard_PhoneSignIn: 71,
                LoginWizard_HIP_PhoneSignIn: 72,
                LoginXbox_PhoneSignIn: 73,
                LoginXbox_HIP_PhoneSignIn: 74,
                LoginWin10: 75,
                HIP_LoginWin10: 76,
                FinishWin10: 77,
                FinishBlockedWin10: 78,
                LoginWin10_PhoneSignIn: 79,
                HIP_LoginWin10_PhoneSignIn: 80,
                FinishWin10_TokenBroker: 81,
                SwitchUserWin10: 82,
                ForceSignInXbox: 88,
                LoginClientSDK_Login: 92,
                LoginClientSDK_HIP_Login: 93,
                LoginClientSDK_Finish: 94,
                StrongAuthClientSDKOTC: 95,
                FinishClientSDK: 96,
                LoginClientSDK_PhoneSignIn: 97,
                LoginClientSDK_HIP_PhoneSignIn: 98,
                Win10InclusiveOOBE_Finish: 99,
                Win10InclusiveOOBE_FinishBlocked: 100,
                Tiles: 102,
                RemoteConnect: 103,
                FedConflict: 105,
                Win10Host_Login: 106,
                Win10Host_Login_PhoneSignin: 107,
                Win10Host_Finish: 108,
                Win10Host_StrongAuth: 109,
                Win10Host_HIP_Login: 110,
                Fido: 111,
                Win10Host_HIP_Login_PhoneSignIn: 112,
                FedLink: 113,
                UserCredentialPolicyBlocked: 114,
                BindFailed: 115,
                Win10HostOOBE_HIP_Login: 116,
                Win10HostOOBE_HIP_Login_PhoneSignIn: 117,
                AadFedConflict: 118,
                ProofFedConflict: 119,
                FedBoundLink: 120,
                FetchSessionsProgress: 121,
                Win10Host_TransferLogin: 122,
                TransferLogin: 123,
                Signup: 124,
                RemoteConnectLocation: 125,
            }),
            (n.LoginBody = { Login_OTC: 5 }),
            (n.SessionPullFlags = { Msa: 1, Dsso: 2 }),
            (n.PaginatedState = {
                Previous: -1,
                Unknown: 0,
                Username: 1,
                Password: 2,
                OneTimeCode: 3,
                RemoteNGC: 4,
                PhoneDisambiguation: 5,
                LwaConsent: 6,
                IdpDisambiguation: 7,
                IdpRedirect: 8,
                ViewAgreement: 10,
                LearnMore: 11,
                Tiles: 12,
                ConfirmSend: 13,
                RemoteConnectCode: 14,
                RemoteLoginPolling: 15,
                BindRedirect: 16,
                TermsOfUse: 17,
                DesktopSsoProgress: 18,
                ResetPasswordSplitter: 19,
                Kmsi: 20,
                CheckPasswordType: 21,
                ChangePassword: 22,
                Fido: 23,
                CredentialPicker: 24,
                Consent: 25,
                Error: 26,
                ConfirmSignup: 27,
                ConfirmRecoverUsername: 28,
                ConfirmConsentSelection: 29,
                FedConflict: 30,
                ProofUpRedirect: 32,
                ProofUpRedirectLanding: 33,
                ConditionalAccessInstallBroker: 34,
                ConditionalAccessWorkplaceJoin: 35,
                ConditionalAccessError: 36,
                CreateFido: 37,
                FedLink: 38,
                FedLinkComplete: 40,
                IdpRedirectSpeedbump: 41,
                TransferLogin: 42,
                Cmsi: 43,
                ProofConfirmation: 44,
                MessagePrompt: 45,
                FinishError: 46,
                Hip: 48,
                LearnMoreOfflineAccount: 49,
                TenantDisambiguation: 50,
                AadFedConflict: 51,
                RemoteConnectCanaryValidation: 52,
                PartnerCanaryValidation: 53,
                ProofFedConflict: 54,
                FetchSessionsProgress: 55,
                AccessPass: 56,
                SignupUsername: 57,
                ReportSuspiciousApp: 58,
                MoreInfo: 59,
                AuthenticatorAddAccountView: 60,
                SignupCredentialPicker: 61,
                LoginError: 62,
                SearchOrganization: 63,
                Ptca: 64,
                GuestConsent: 65,
                RemoteConnectLocation: 66,
            }),
            (n.PostType = {
                Password: 11,
                Federation: 13,
                SHA1: 15,
                StrongAuth: 18,
                StrongAuthTOTP: 19,
                LWAConsent: 30,
                PasswordInline: 20,
                RemoteNGC: 21,
                SessionApproval: 22,
                NGC: 23,
                OtcNoPassword: 24,
                RemoteConnect_NativePlatform: 25,
                OTC: 27,
                Kmsi: 28,
            }),
            (n.UserProperty = {
                USERNAME: "login",
                ERROR_CODE: "HR",
                ERR_MSG: "ErrorMessage",
                EXT_ERROR: "ExtErr",
                ERR_URL: "ErrUrl",
                DATOKEN: "DAToken",
                DA_SESKEY: "DASessionKey",
                DA_START: "DAStartTime",
                DA_EXPIRE: "DAExpires",
                STS_ILFT: "STSInlineFlowToken",
                SIGNINNAME: "SigninName",
                FIRST_NAME: "LastName",
                LAST_NAME: "FirstName",
                TILE_URL: "TileUrl",
                CID: "CID",
                PUID: "PUID",
            }),
            (n.Error = {
                S_OK: "0",
                InvalidRealmDiscLogin: 10,
                UsernameInvalid: 1e3,
                PasswordEmpty: 1001,
                HIPEmpty: 1002,
                AltEmailInvalid: 1005,
                PhoneInvalid: 1006,
                SAContainsName: 1007,
                OTCEmpty: 1009,
                OTCInvalid: 1010,
                NotEnoughProofs: 1013,
                PhoneEmpty: 1015,
                FedUser: 1016,
                FedUserConflict: 1017,
                FedUserInviteBlocked: 1018,
                EmptyFields: 1020,
                PhoneHasSpecialChars: 1021,
                AutoVerifyNoCodeSent: 1022,
                ProofConfirmationEmpty: 1023,
                ProofConfirmationInvalid: 1024,
                TOTPInvalid: 1025,
                SessionNotApproved: 1026,
                PhoneNumberInvalid: 1027,
                PhoneFormattingInvalid: 1028,
                PollingTimedOut: 1029,
                SendNotificationFailed: 1030,
                Server_MessageOnly: 9999,
                PP_E_DB_MEMBERDOESNOTEXIST: "CFFFFC15",
                PP_E_EXCLUDED: "80041010",
                PP_E_MEMBER_LOCKED: "80041011",
                PP_E_BAD_PASSWORD: "80041012",
                PP_E_MISSING_MEMBERNAME: "80041031",
                PP_E_MISSING_PASSWORD: "80041032",
                PP_E_FEDERATION_INLINELOGIN_DISALLOWED: "800478AC",
                PP_E_PE_RULEFALSE: "8004490C",
                PP_E_MOBILECREDS_PHONENUMBER_BLANK: "80045801",
                PP_E_MOBILECREDS_PHONENUMBER_TOOSHORT: "80045806",
                PP_E_MOBILECREDS_PHONENUMBER_TOOLONG: "80045807",
                PP_E_MOBILECREDS_PHONENUMBER_INVALID: "80045800",
                PP_E_NAME_BLANK: "80041100",
                PP_E_EMAIL_INCOMPLETE: "8004110D",
                PP_E_EMAIL_INVALID: "8004110B",
                PP_E_NAME_TOO_SHORT: "80041101",
                PP_E_NAME_INVALID: "80041103",
                PP_E_INVALIDARG: "80048388",
                PP_E_SA_TOOSHORT: "80041120",
                PP_E_SA_TOOLONG: "80041121",
                PP_E_INVALID_PHONENUMBER: "8004113F",
                PP_E_SECRETQ_CONTAINS_SECRETA: "80041165",
                PP_E_SECRETA_CONTAINS_SECRETQ: "8004117D",
                PP_E_SA_CONTAINS_MEMBERNAME: "8004116A",
                PP_E_STRONGPROCESS_ALTEMAILSAMEASMAILBOX: "80049C2D",
                PP_E_EMAIL_RIGHT_TOO_LONG: "8004110C",
                PP_E_NAME_TOO_LONG: "80041102",
                PP_E_ALIAS_AUTH_NOTPERMITTED: "8004788B",
                PP_E_TOTP_INVALID: "80049C34",
                PP_E_OLD_SKYPE_PASSWORD: "80043557",
                PP_E_OTT_DATA_INVALID: "8004348F",
                PP_E_OTT_ALREADY_CONSUMED: "80043490",
                PP_E_OTT_INVALID_PURPOSE: "80043496",
                PP_E_PPSA_RPT_NOTOADDRESS: "80048120",
                PP_E_STRONGPROCESS_BADDEVICENAME: "80049C22",
                PP_E_INLINELOGIN_INVALID_SMS: "800434E1",
                PP_E_INLINELOGIN_INVALID_ALT: "800434E2",
                PP_E_PREVIOUS_PASSWORD: "80041013",
                PP_E_HIP_VALIDATION_WRONG: "80045505",
                PP_E_HIP_VALIDATION_ERROR_FATAL: "80045537",
                PP_E_HIP_VALIDATION_ERROR_UNAUTHENTICATED: "80045538",
                PP_E_HIP_VALIDATION_ERROR_OTHER: "80045539",
                PP_E_SQ_CONTAINS_PASSWORD: "8004341E",
                PP_E_SA_CONTAINS_PASSWORD: "8004341C",
                PP_E_SA_CONTAINED_IN_PASSWORD: "8004341D",
                PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION: "80043510",
                PP_E_STRONGPROCESS_EMAIL_HAS_MOBILE_DOMAIN: "80049C33",
                PP_E_STRONGPROCESS_MXALIAS_NOTALLOWED: "80049C23",
                PP_E_INVALID_MEMBERNAME: "80041034",
                PP_E_SA_TOO_MANY_CACHE_SESSIONS: "8004A00C",
                PP_E_INTERFACE_DISABLED: "80043448",
                PP_E_ASSOCIATE_DUPLICATE_ACCOUNT: "80043534",
                PP_E_OAUTH_REMOTE_CONNECT_USER_CODE_MISSING_OR_INVALID: "800478C7",
                PP_E_LOGIN_NOPA_USER_PASSWORD_REQUIRED: "800478CE",
                PP_E_IDP_LINKEDIN_BINDING_NOT_ALLOWED: "800478D5",
                PP_E_IDP_GOOGLE_BINDING_NOT_ALLOWED: "800478D6",
                PP_E_IDP_GITHUB_BINDING_NOT_ALLOWED: "800478D7",
                PP_E_IDP_BINDING_EXISTS_SAMSUNG: "8004453E",
            }),
            (n.EstsError = {
                UserAccountSelectionInvalid: "16001",
                UserUnauthorized: "50020",
                UserUnauthorizedApiVersionNotSupported: "500201",
                UserUnauthorizedMsaGuestUsersNotSupported: "500202",
                UserAccountNotFound: "50034",
                UserAccountDeleted: "500341",
                UserAccountNotFoundNotConfiguredForRemoteNgc: "500342",
                UserAccountNotFoundFailedToCreateRemoteSignIn: "500343",
                UserAccountNotFoundForFidoSignIn: "500344",
                IdsLocked: "50053",
                InvalidPasswordLastPasswordUsed: "50054",
                InvalidPasswordExpiredPassword: "50055",
                InvalidPasswordNullPassword: "50056",
                UserDisabled: "50057",
                FlowTokenExpired: "50089",
                InvalidUserNameOrPassword: "50126",
                InvalidDomainName: "50128",
                ProtectedKeyMisuse: "50141",
                MissingCustomSigningKey: "50146",
                IdpLoopDetected: "50174",
                InvalidOneTimePasscode: "50181",
                ExpiredOneTimePasscode: "50182",
                OneTimePasscodeCacheError: "50183",
                OneTimePasscodeEntryNotExist: "50184",
                InvalidPassword: "50193",
                InvalidGrantDeviceNotFound: "700003",
                SsoArtifactExpiredDueToConditionalAccess: "70044",
                InvalidTenantName: "90002",
                InvalidTenantNameEmptyGuidIdentifier: "900021",
                InvalidTenantNameEmptyIdentifier: "900022",
                InvalidTenantNameFormat: "900023",
                PhoneSignInBlockedByUserCredentialPolicy: "130500",
                AccessPassBlockedByPolicy: "130502",
                InvalidAccessPass: "130503",
                AccessPassExpired: "130504",
                AccessPassAlreadyUsed: "130505",
                PublicIdentifierSasBeginCallRetriableError: "131001",
                PublicIdentifierAuthUserNotAllowedByPolicy: "131010",
                PublicIdentifierSasBeginCallNonRetriableError: "131002",
                PublicIdentifierSasEndCallRetriableError: "131003",
                PublicIdentifierSasEndCallNonRetriableError: "131004",
                DeviceIsDisabled: "135011",
                FidoBlockedByPolicy: "135016",
                BlockedAdalVersion: "220300",
                BlockedClientId: "220400",
                UserVoiceAuthFailedCallWentToVoicemail: "UserVoiceAuthFailedCallWentToVoicemail",
                UserVoiceAuthFailedInvalidPhoneInput: "UserVoiceAuthFailedInvalidPhoneInput",
                UserVoiceAuthFailedPhoneHungUp: "UserVoiceAuthFailedPhoneHungUp",
                UserVoiceAuthFailedInvalidPhoneNumber: "UserVoiceAuthFailedInvalidPhoneNumber",
                UserVoiceAuthFailedInvalidExtension: "UserVoiceAuthFailedInvalidExtension",
                InvalidFormat: "InvalidFormat",
                UserAuthFailedDuplicateRequest: "UserAuthFailedDuplicateRequest",
                UserVoiceAuthFailedPhoneUnreachable: "UserVoiceAuthFailedPhoneUnreachable",
                UserVoiceAuthFailedProviderCouldntSendCall: "UserVoiceAuthFailedProviderCouldntSendCall",
                User2WaySMSAuthFailedProviderCouldntSendSMS: "User2WaySMSAuthFailedProviderCouldntSendSMS",
                SMSAuthFailedProviderCouldntSendSMS: "SMSAuthFailedProviderCouldntSendSMS",
                User2WaySMSAuthFailedNoResponseTimeout: "User2WaySMSAuthFailedNoResponseTimeout",
                SMSAuthFailedNoResponseTimeout: "SMSAuthFailedNoResponseTimeout",
                SMSAuthFailedWrongCodeEntered: "SMSAuthFailedWrongCodeEntered",
                OathCodeIncorrect: "OathCodeIncorrect",
                OathCodeDuplicate: "OathCodeDuplicate",
                OathCodeOld: "OathCodeOld",
                PhoneAppNoResponse: "PhoneAppNoResponse",
                User2WaySMSAuthFailedWrongCodeEntered: "User2WaySMSAuthFailedWrongCodeEntered",
                PhoneAppInvalidResult: "PhoneAppInvalidResult",
                PhoneAppDenied: "PhoneAppDenied",
                PhoneAppTokenChanged: "PhoneAppTokenChanged",
                SMSAuthFailedMaxAllowedCodeRetryReached: "SMSAuthFailedMaxAllowedCodeRetryReached",
                PhoneAppFraudReported: "PhoneAppFraudReported",
                FraudCodeEntered: "FraudCodeEntered",
                UserIsBlocked: "UserIsBlocked",
                PhoneAppEntropyIncorrect: "PhoneAppEntropyIncorrect",
            }),
            (n.Fido = {
                MaxUserPromptLength: 99,
                FinishStates: { Success: 0, Cancel: 1, Error: 2, NotSupported: 3 },
                UnexpectedErrorCode: 9999,
                EdgeErrorCodes: { SyntaxError: 3, NotFoundError: 8, NotSupportedError: 9, InvalidAccessError: 15, AbortError: 20 },
            }),
            (n.IfExistsResult = { Unknown: -1, Exists: 0, NotExist: 1, Throttled: 2, Error: 4, ExistsInOtherMicrosoftIDP: 5, ExistsBothIDPs: 6 }),
            (n.ThrottleStatus = { NotThrottled: 0, AadThrottled: 1, MsaThrottled: 2 }),
            (n.DomainType = { Unknown: 1, Consumer: 2, Managed: 3, Federated: 4, CloudFederated: 5 }),
            (n.CredentialType = {
                Password: 1,
                RemoteNGC: 2,
                OneTimeCode: 3,
                Federation: 4,
                CloudFederation: 5,
                OtherMicrosoftIdpFederation: 6,
                Fido: 7,
                GitHub: 8,
                PublicIdentifierCode: 9,
                LinkedIn: 10,
                RemoteLogin: 11,
                Google: 12,
                AccessPass: 13,
                Facebook: 14,
                Certificate: 15,
                NoPreferredCredential: 1e3,
            }),
            (n.RemoteNgcType = { PushNotification: 1, ListSessions: 3 }),
            (n.SessionPollingType = { Image: 1, Json: 2 }),
            (n.AgreementType = { Privacy: "privacy", Tou: "tou", Impressum: "impressum" }),
            (n.ApiErrorCodes = { GeneralError: 6e3, AuthFailure: 6001, InvalidArgs: 6002, Generic: 8e3, Timeout: 8001, Aborted: 8002 }),
            (n.DefaultRequestTimeout = 3e4),
            (PROOF = {
                Type: {
                    Email: 1,
                    AltEmail: 2,
                    SMS: 3,
                    DeviceId: 4,
                    CSS: 5,
                    SQSA: 6,
                    HIP: 8,
                    Birthday: 9,
                    TOTPAuthenticator: 10,
                    RecoveryCode: 11,
                    StrongTicket: 13,
                    TOTPAuthenticatorV2: 14,
                    TwoWayVoice: 15,
                    TwoWaySMS: 16,
                    FidoKey: 17,
                    Voice: -3,
                },
            }),
            (n.ContentType = { Json: "application/json; charset=utf-8", FormUrlEncoded: "application/x-www-form-urlencoded" }),
            (n.BindProvider = { LinkedIn: 0, GitHub: 1, Google: 2, Samsung: 3, Facebook: 4 }),
            (n.PromotedAltCredFlags = { None: 0, GitHub: 1, LinkedIn: 2 }),
            (n.EnvironmentName = { Internal: 1, TestSlice: 2, FirstSlice: 3 }),
            (n.AnimationState = { Begin: 0, End: -1, RenderNewView: 1, AnimateNewView: 2 }),
            (n.AnimationName = { None: 0, SlideOutNext: 1, SlideInNext: 2, SlideOutBack: 3, SlideInBack: 4 }),
            (n.DialogId = { None: 0, FidoHelp: 1, GitHubHelp: 2, ConsentAppInfo: 3 }),
            (n.KeyCode = { Tab: 9, Enter: 13, Escape: 27, Space: 32, PageUp: 33, PageDown: 34, End: 35, Home: 36, ArrowUp: 38, ArrowDown: 40, WinKeyLeft: 91, F6: 117, GamePadB: 196 }),
            (n.ProofOfPossession = { AuthenticatorKey: "cpa", CanaryTokenKey: "canary", MethodHint: "cpa_method_hint" }),
            (n.UpgradeMigrationUXId = { Invalid: 0, Mojang: 1 }),
            (n.TransferLoginStringsVariant = { Default: 0, Mmx: 1, MmxPhoneFirst: 2, AppNameOnly: 3, AppNameAndUsername: 4 }),
            (n.LayoutTemplateType = { Lightbox: 0, VerticalSplit: 1 }),
            (n.LayoutTemplateHorizontalPosition = { Left: 0, Center: 1, Right: 2 }),
            (n.ProofUpRedirectViewType = { DefaultProofUpRedirectView: 0, AuthAppProofUpRedirectView: 1 });
    },
    function (e, n, t) {
        var i = t(26),
            a = t(3),
            o = t(5),
            r = t(10),
            s = a.Object,
            c = a.String,
            l = a.Array,
            d = window,
            u = null,
            p = {},
            g = {},
            f = {},
            m = null,
            h = null,
            v = null,
            b = null,
            S = null,
            _ = null,
            y = null,
            w = null,
            C = !!d.ServerData.fUseSameSite,
            T = null;
        n.HttpCode = { Ok: 200, NotModified: 304, Timeout: 408, ClientClosedRequest: 499 };
        var x = (n.Helper = {
                isIEOlderThan: function (e) {
                    if (p[e] === undefined) {
                        var n = x.getIEVersion();
                        p[e] = n && n < e + 1;
                    }
                    return p[e];
                },
                isEdge: function () {
                    if (null === u) {
                        u = !1;
                        var e = x.getWindowsVersion();
                        if (null !== e && e >= 10) {
                            var n = x.getIEVersion();
                            u = null !== n && n >= 12;
                        }
                    }
                    return u;
                },
                isChrome: function () {
                    return null === m && (m = navigator.userAgent.toLowerCase().indexOf("chrome") > -1), m;
                },
                isFirefoxNewerThan: function (e) {
                    if (g[e] === undefined) {
                        var n = x.getFirefoxVersion();
                        g[e] = n && n > e;
                    }
                    return g[e];
                },
                isChromeNewerThan: function (e) {
                    if (f[e] === undefined) {
                        var n = x.getChromeVersion();
                        f[e] = n && n > e;
                    }
                    return f[e];
                },
                isIOSSafari: function () {
                    if (null === h) {
                        var e = d.navigator.userAgent.toLowerCase();
                        h = /safari/.test(e) && /iphone|ipod|ipad/.test(e) && !d.MSStream;
                    }
                    return h;
                },
                isIOSUIWebView: function () {
                    if (null === v) {
                        var e = d.navigator.userAgent.toLowerCase();
                        v = !1 === /safari/.test(e) && /iphone|ipod|ipad/.test(e) && !d.MSStream;
                    }
                    return v;
                },
                isQtCarBrowser: function () {
                    return null === b && (b = navigator.userAgent.toLowerCase().indexOf("qtcarbrowser") > -1), b;
                },
                isEdgeClientBrowser: function () {
                    return null === S && (S = navigator.userAgent.toLowerCase().indexOf("edgeclient/") > -1), S;
                },
                isOnTouchStartEventSupported: function () {
                    return "ontouchstart" in document.documentElement;
                },
                getIEVersion: function () {
                    var e = d.navigator.userAgent,
                        n = e.indexOf("MSIE ");
                    if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
                    if (e.indexOf("Trident/") > 0) {
                        var t = e.indexOf("rv:");
                        return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10);
                    }
                    var i = e.indexOf("Edge/");
                    return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : null;
                },
                getFirefoxVersion: function () {
                    var e = d.navigator.userAgent.match(/(firefox(?=\/))\/?\s*(\d+)/i);
                    return e && 3 === e.length && "firefox" === e[1].toLowerCase() ? parseInt(e[2]) : null;
                },
                getChromeVersion: function () {
                    var e = d.navigator.userAgent.match(/(chrome(?=\/))\/?\s*(\d+)/i);
                    return e && 3 === e.length && "chrome" === e[1].toLowerCase() ? parseInt(e[2]) : null;
                },
                getWindowsVersion: function () {
                    return null !== new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) ? parseFloat(RegExp.$1) : null;
                },
                htmlEscape: function (e) {
                    if (!e) return "";
                    var n = document.createElement("textarea");
                    return (n.innerText = e), n.innerHTML;
                },
                htmlUnescape: function (e) {
                    if (!e) return "";
                    if (e.match(/<[^<>]+>/)) return e;
                    var n = document.createElement("textarea");
                    return (n.innerHTML = e), n.value;
                },
                getStackSize: function (e) {
                    var n = 0,
                        t = null == e;
                    try {
                        !(function i() {
                            n++, (t || n <= e) && i();
                        })();
                    } catch (i) {}
                    return n;
                },
                getAnimationEndEventName: function () {
                    var e = document.createElement("div"),
                        n = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" };
                    for (var t in n) if (e.style[t] !== undefined) return n[t];
                    return "";
                },
                isStackSizeGreaterThan: function (e) {
                    return (e = e || 0), x.getStackSize(e) > e;
                },
                isSvgImgSupported: function () {
                    return null === T && (T = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), T;
                },
                isPlaceholderAttributeAllowed: function (e) {
                    return null === y && (y = x.isChromeNewerThan(16) || x.isEdge() || x.isFirefoxNewerThan(14) || (e && x.isIOSUIWebView()) || x.isIOSSafari() || x.isQtCarBrowser()), y;
                },
                isCSSAnimationSupported: function () {
                    var e = !1,
                        n = document.createElement("div");
                    (e = n.style.animationName !== undefined) ||
                        (e = !!l.first(["Webkit", "Moz", "O"], function (e) {
                            return n.style[e + "AnimationName"] !== undefined;
                        }));
                    return e;
                },
                isStyleSupported: function (e) {
                    return e in document.documentElement.style;
                },
                isCORSSupported: function () {
                    return d.XDomainRequest || (d.XMLHttpRequest && "withCredentials" in new XMLHttpRequest());
                },
                isHistorySupported: function () {
                    if (null === w) {
                        if ((w = d.history && d.history.pushState && "undefined" != typeof d.history.state && "undefined" != typeof d.onpopstate))
                            try {
                                d.history.replaceState("__history_test", ""), ("__history_test" !== d.history.state || x.isEdgeClientBrowser()) && (w = !1);
                            } catch (e) {
                                w = !1;
                            }
                    }
                    return w;
                },
                isFidoSupportedAsync: function (e) {
                    return d.navigator.credentials !== undefined &&
                        d.navigator.credentials.create !== undefined &&
                        d.navigator.credentials.get !== undefined &&
                        d.PublicKeyCredential !== undefined &&
                        d.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable !== undefined
                        ? d.PublicKeyCredential.isExternalCTAP2SecurityKeySupported
                            ? r.newPromiseWithTimeout(d.PublicKeyCredential.isExternalCTAP2SecurityKeySupported, i.PromiseTimeout, !1)
                            : o.resolve(e)
                        : o.resolve(!1);
                },
                isChangingInputTypeSupported: function () {
                    return !x.isIEOlderThan(9);
                },
                isHighContrast: function () {
                    if (null === _) {
                        var e = document.createElement("span");
                        (e.style.borderLeftColor = "red"), (e.style.borderRightColor = "blue"), (e.style.position = "absolute"), (e.style.top = "-999px"), document.body.appendChild(e);
                        var n = x.getComputedStyle(e);
                        (_ = n.borderLeftColor === n.borderRightColor), document.body.removeChild(e);
                    }
                    return _;
                },
                getHighContrastTheme: function () {
                    if (x.isHighContrast()) {
                        var e = document.getElementsByTagName("body")[0],
                            n = x.getComputedStyle(e);
                        if (n.backgroundColor) {
                            var t = n.backgroundColor.toLowerCase().replace(new RegExp(" ", "g"), "");
                            if ("rgb(0,0,0)" === t || "#000000" === t || "#000" === t) return "black";
                            if ("rgb(255,255,255)" === t || "#ffffff" === t || "#fff" === t) return "white";
                        }
                    }
                },
                getComputedStyle: function (e) {
                    return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null) : e.currentStyle ? e.currentStyle : {};
                },
                history: {
                    pushState: function (e, n) {
                        x.isHistorySupported() && d.history.pushState(e, n);
                    },
                    replaceState: function (e, n) {
                        x.isHistorySupported() && d.history.replaceState(e, n);
                    },
                },
                addEventListener: function (e, n, t, i) {
                    e.addEventListener ? e.addEventListener(n, t, i) : e.attachEvent && e.attachEvent("on" + n, t);
                },
                removeEventListener: function (e, n, t, i) {
                    e.removeEventListener ? e.removeEventListener(n, t, i) : e.detachEvent && e.detachEvent("on" + n, t);
                },
                getEventTarget: function (e) {
                    return e ? (e.target ? e.target : e.srcElement ? e.srcElement : null) : null;
                },
            }),
            I = (n.QueryString = {
                parse: function (e) {
                    var n = e,
                        t = null,
                        i = null;
                    if (e) {
                        var a = e.indexOf("?"),
                            o = e.indexOf("#");
                        -1 !== o && (-1 === a || o < a)
                            ? ((n = e.substring(0, o)), (i = c.doubleSplit(e.substring(o + 1), "&", "=")))
                            : -1 !== a && -1 === o
                            ? ((n = e.substring(0, a)), (t = c.doubleSplit(e.substring(a + 1), "&", "=")))
                            : -1 !== a && -1 !== o && ((n = e.substring(0, a)), (t = c.doubleSplit(e.substring(a + 1, o), "&", "=")), (i = c.doubleSplit(e.substring(o + 1), "&", "=")));
                    }
                    return { originAndPath: n, query: t, fragment: i };
                },
                join: function (e) {
                    var n = e.originAndPath || "";
                    return e.query && (n += "?" + s.join(e.query, "&", "=")), e.fragment && (n += "#" + s.join(e.fragment, "&", "=")), n;
                },
                appendCurrentQueryParameterIfNotExist: function (e) {
                    var n = I.parse(window.location.href);
                    return (
                        s.forEach(n.query, function (n, t) {
                            e = I.addIfNotExist(e, n, t);
                        }),
                        e
                    );
                },
                append: function (e, n) {
                    var t = I.parse(e),
                        i = c.doubleSplit(n, "&", "=");
                    return (
                        (t.query = t.query || {}),
                        s.forEach(i, function (e, n) {
                            t.query[e] = n || null;
                        }),
                        I.join(t)
                    );
                },
                addIfNotExist: function (e, n, t) {
                    t = t || "";
                    var i = I.parse(e);
                    return null === s.findOwnProperty(i.query || {}, n, !0) && ((i.query = i.query || {}), (i.query[n.toLowerCase()] = t)), I.join(i);
                },
                add: function (e, n) {
                    var t = I.parse(e);
                    return (
                        e &&
                            n &&
                            n.length &&
                            ((t.query = t.query || {}),
                            l.forEach(n, function (e) {
                                t.query[e[0]] = e[1];
                            })),
                        I.join(t)
                    );
                },
                appendOrReplace: function (e, n, t, i) {
                    var a = I.parse(e);
                    a.query = a.query || {};
                    var o = s.findOwnProperty(a.query, n, !0);
                    o && delete a.query[o], (a.query[n.toLowerCase()] = t);
                    var r = I.join(a);
                    return i && r.length > i ? e : r;
                },
                remove: function (e, n) {
                    var t = I.parse(e);
                    t.query = t.query || {};
                    var i = s.findOwnProperty(t.query, n, !0);
                    return i && delete t.query[i], I.join(t);
                },
                extract: function (e, n) {
                    n || "" === n || (n = document.location.search);
                    var t = I.parse(n);
                    t.query = t.query || {};
                    var i = s.findOwnProperty(t.query, e, !0);
                    return i ? t.query[i] : "";
                },
                appendOrReplaceFromCurrentUrl: function (e, n) {
                    var t = I.extract(n);
                    return t ? I.appendOrReplace(e, n, t) : e;
                },
                stripQueryStringAndFragment: function (e) {
                    return I.parse(e).originAndPath;
                },
            }),
            k = (n.Cookies = {
                expireDate: "Thu, 30-Oct-1980 16:00:00 GMT",
                persistTTLDays: 390,
                cookieSafeRegex: /^[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]+$/,
                enabled: function () {
                    var e = "G" + new Date().getTime();
                    k.write("CkTst", e);
                    var n = !!k.getCookie("CkTst");
                    return k.remove("CkTst"), n;
                },
                getCookie: function (e) {
                    var n = c.doubleSplit(document.cookie, ";", "=", !1, c.trim);
                    return n[e] ? n[e] : null;
                },
                getObject: function (e) {
                    var n = k.getCookie(e) || "";
                    return c.doubleSplit(n, "&", "=");
                },
                remove: function (e, n, t) {
                    var i = n || document.location.hostname,
                        a = i.split("."),
                        o = a.length,
                        r = a[o - 2] + "." + a[o - 1],
                        s = t || "/",
                        l = "https:" === document.location.protocol,
                        d = l ? ";secure" : "",
                        u = k.getDefaultSameSiteAttribute(l);
                    (document.cookie = c.format("{0}= ;domain=.{1};path={2};expires={3}{4}{5}", e, r, s, k.expireDate, d, u)), (document.cookie = c.format("{0}= ;domain=.{1};path={2};expires={3}{4}{5}", e, i, s, k.expireDate, d, u));
                },
                write: function (e, n, t, i, a, o, r, s) {
                    var c = o ? "." : "",
                        l = document.domain.split(".");
                    a && l.splice(0, Math.max(0, l.length - 2));
                    var d = c + l.join(".");
                    k.writeWithExpiration(e, n, t, i ? k.getPersistDate() : null, d, r, s);
                },
                writeWithExpiration: function (e, n, t, i, a, o, r) {
                    if ("" === n) k.remove(e, a);
                    else {
                        "object" == typeof n && (n = s.join(n, "&", "="));
                        var l,
                            d = i ? ";expires=" + i : "",
                            u = a ? ";domain=" + a : "",
                            p = o || "/",
                            g = t ? ";secure" : "";
                        l = r && "none" !== r.toLowerCase() ? ";SameSite=" + r : k.getDefaultSameSiteAttribute(t);
                        var f = c.format("{0}={1}{2};path={3}{4}{5}{6}", e, n, u, p, d, g, l);
                        document.cookie = f;
                    }
                },
                isCookieSafeValue: function (e) {
                    return k.cookieSafeRegex.test(e);
                },
                getDefaultSameSiteAttribute: function (e) {
                    return e && C ? ";SameSite=None" : "";
                },
                getPersistDate: function () {
                    var e = new Date();
                    return e.setDate(e.getDate() + k.persistTTLDays), e.toUTCString();
                },
            });
    },
    function (e, n, t) {
        var i = window,
            a = i.document.documentMode,
            o = i.navigator;
        !(function () {
            var n = null,
                r = o.userAgent,
                s = null,
                c = r.match(/MSIE ([^ ]+)/);
            if ((c && (n = parseInt(c[1])), "function" == typeof i.Symbol && r.match(/AppleWebKit\/601/) && (i.Symbol = null), n && a && n !== a && Object.defineProperty))
                try {
                    Object.defineProperty(o, "userAgent", {
                        get: function () {
                            return s;
                        },
                    }),
                        (s = r.replace(/MSIE [^ ]+/, "MSIE " + a + ".0")),
                        (e.exports = t(16)),
                        (s = r);
                } catch (l) {
                    e.exports = t(16);
                }
            else e.exports = t(16);
        })();
    },
    function (e, n, t) {
        var i = t(2),
            a = t(12),
            o = t(60),
            r = (n.Object = {
                clone: function (e) {
                    var n = {};
                    return e && (n = a.parse(a.stringify(e))), n;
                },
                join: function (e, n, t) {
                    var i = "";
                    return (
                        e &&
                            r.forEach(e, function (e, a) {
                                i && (i += n), (i += e + t + (a || ""));
                            }),
                        i
                    );
                },
                forEach: function (e, n) {
                    i.utils.objectForEach(e, n);
                },
                findOwnProperty: function (e, n, t) {
                    var i;
                    for (var a in (t && (i = n.toLowerCase()), e)) if (e.hasOwnProperty(a) && (a === n || (t && a.toLowerCase() === i))) return a;
                    return null;
                },
                extend: i.utils.extend,
            }),
            s = (n.String = {
                trim: function (e) {
                    return e.replace(/^\s+|\s+$/g, "");
                },
                find: function (e, n, t, i) {
                    return e ? (t ? e.toLowerCase().indexOf(n.toLowerCase(), i) : e.indexOf(n, i)) : -1;
                },
                format: o.format,
                doubleSplit: function (e, n, t, i, a) {
                    var o = {};
                    return (
                        e &&
                            c.forEach(e.split(n), function (e) {
                                if (e) {
                                    var n = e.split(t),
                                        r = n[0];
                                    a && (r = a(r)), 1 === n.length ? (o[r] = null) : (o[r] = i ? n.slice(1) : n.slice(1).join(t));
                                }
                            }),
                        o
                    );
                },
                isEmailAddress: function (e) {
                    if ((e = s.trim(e)).charAt(0) > "~" || -1 !== e.indexOf(" ")) return !1;
                    var n = e.indexOf("@");
                    if (-1 === n || -1 === e.indexOf(".", n)) return !1;
                    var t = e.split("@");
                    return !(t.length > 2 || t[0].length < 1 || t[1].length < 2);
                },
                isPhoneNumber: function (e) {
                    var n = e.replace(/\D+/g, "");
                    return n.length >= 4 && n.length <= 50;
                },
                isSkypeName: function (e) {
                    e = s.trim(e);
                    var n = new RegExp(/^[a-zA-Z][a-zA-Z0-9.,\-_:']{0,128}$/);
                    return !!e.match(n);
                },
                extractDomain: function (e, n, t) {
                    if (!s.isEmailAddress(e)) return e;
                    var i = s.trim(e).split("@")[1];
                    return (e = t ? "@" : ""), n ? e + i.slice(0, i.lastIndexOf(".") + 1) : e + i;
                },
                extractDomainFromUrl: function (e) {
                    if (e) {
                        var n = document.createElement("a");
                        return (n.href = e), n.hostname;
                    }
                    return "";
                },
                extractOriginFromUrl: function (e) {
                    if (e) {
                        var n = document.createElement("a");
                        n.href = e;
                        var t = n.origin;
                        return t || (t = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : "")), t;
                    }
                    return "";
                },
                doOriginsMatch: function (e, n) {
                    var t = s.extractOriginFromUrl(e);
                    return s.extractOriginFromUrl(n) === t;
                },
                capFirst: function (e) {
                    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
                },
                cleanseUsername: function (e, n) {
                    if (!e) return "";
                    if (((e = s.trim(e).toLowerCase()), !s.isEmailAddress(e) && !s.isSkypeName(e) && s.isPhoneNumber(e))) {
                        var t = "";
                        return n && "+" === e.charAt(0) && (t = "+"), t + e.replace(/\D+/g, "");
                    }
                    return e;
                },
                maskString: function (e, n) {
                    if (!e) return "";
                    if (e.length <= 2 * n) return e;
                    var t = e.length - 2 * n,
                        i = Array(t + 1).join("*");
                    return e.substring(0, n) + i + e.substring(n + t);
                },
            }),
            c = (n.Array = {
                first: i.utils.arrayFirst,
                forEach: i.utils.arrayForEach,
                map: i.utils.arrayMap,
                removeItem: i.utils.arrayRemoveItem,
                arrayFilter: i.utils.arrayFilter,
                findIndex: function (e, n) {
                    if (e && "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) if (n(e[t])) return t;
                    return -1;
                },
            });
        (n.DateTime = {
            getCurrentTime: function () {
                return new Date().getTime();
            },
            getUTCString: function () {
                return Date.prototype.toISOString ? new Date().toISOString() : new Date().toUTCString();
            },
        }),
            (n.ErrorData = function (e, n) {
                var t = this;
                (t.errorText = e),
                    (t.remediationText = n),
                    (t.toString = function () {
                        return t.errorText;
                    });
            });
    },
    function (e, n, t) {
        var i = t(2);
        (n.create = function (e) {
            var n,
                t = !1;
            function a() {
                return (t = !0), a.eventArgs(Array.prototype.slice.call(arguments)), n;
            }
            return (
                (a.eventArgs = i.observable().extend({ notify: "always" })),
                (a.tracingOptions = e),
                (a.subscribe = function (e) {
                    a.eventArgs.subscribe(function (t) {
                        n = e(t);
                    }),
                        t && (n = e(a.eventArgs.peek()));
                }),
                a
            );
        }),
            (n.isComponentEvent = function (e) {
                return e && i.isObservable(e.eventArgs);
            });
    },
    function (e, n, t) {
        var i = window;
        e.exports = i.Promise;
    },
    function (e, n) {
        (n.Tokens = { Username: "#~#MemberName_LS#~#" }),
            (n.Fed = { DomainToken: "#~#partnerdomain#~#", FedDomain: "#~#FederatedDomainName_LS#~#", Partner: "#~#FederatedPartnerName_LS#~#" }),
            (n.LoginOption = { DoNotRemember: 0, RememberPWD: 1, NothingChecked: 3 }),
            (n.StringsVariantId = { Default: 0, SkypeMoveAlias: 1, CombinedSigninSignup: 2, CombinedSigninSignupDefaultTitle: 3, RemoteConnectLogin: 4, CombinedSigninSignupV2: 5, CombinedSigninSignupV2WelcomeTitle: 6 }),
            (n.AllowedIdentitiesType = { MsaOnly: 0, AadOnly: 1, Both: 2 }),
            (n.SessionIdp = { Aad: 0, Msa: 1 }),
            (n.ClientTracingEventIds = {
                Event_LoginPaginatedUsernameView_onLoad: 11e4,
                Event_LoginPaginatedPasswordView_onLoad: 110001,
                ComponentEvent_LoginPaginatedUsernameView_onShowDialog: 12e4,
                ComponentEvent_LoginPaginatedUsernameView_onAgreementClick: 120001,
                ComponentEvent_LoginPaginatedPasswordView_onResetPassword: 120100,
                PropertyValue_LoginPaginatedPageView_IsFidoSupported: 14e4,
                PropertyValue_LoginPaginatedUsernameView_Username: 140100,
                PropertyValue_LoginPaginatedUsernameView_ClientError: 140101,
                PropertyValue_LoginPaginatedPasswordView_Password: 140200,
                PropertyValue_LoginPaginatedPasswordView_ClientError: 140201,
                PropertyValue_LoginPaginatedPasswordView_KMSI: 140202,
            });
    },
    function (e, n) {
        (n.EventIds = {
            Unknown: 0,
            Event_PaginationControl_ViewSwitch: 1e4,
            Api_GetOneTimeCode: 2e4,
            Api_GetOneTimeToken: 20001,
            Api_CanaryValidation: 20002,
            Api_GetCustomCss: 20003,
            Api_GetCredentialType: 20004,
            Api_CheckSessionState: 20005,
            Api_GetIwaSsoToken: 20006,
            Api_OtcAuthentication: 20007,
            Api_DeviceAuthentication: 20008,
            Api_BeginOtcAuthentication: 20009,
            Api_ConfirmOneTimeCode: 20010,
            Api_BeginSessionApproval: 20011,
            Api_EndSessionApproval: 20012,
            Api_Forget: 20013,
            Redirect_Unknown: 4e4,
            Redirect_MSASignUpPage: 40001,
            Redirect_AADSignUpPage: 40002,
            Redirect_SkipZeroTouch: 40003,
            Redirect_ResetPasswordPage: 40004,
            Redirect_MSAUserRecoveryPage: 40005,
            Redirect_OtherIdpRedirection: 40006,
            Redriect_SwitchUser: 40007,
        }),
            (n.EventLevel = { None: 0, Critical: 1, Info: 2, ApiRequest: 4, CXH: 8, Debug: 16, Verbose: 32, All: 65535 }),
            (n.HidingMode = { None: 0, Hide: 1, Mask: 2 }),
            (n.DataPointScope = { ClientEvent: 1, Global: 2 }),
            (n.EventStage = { None: 0, Begin: 1, End: 2 });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window,
            r = a.Helper;
        function s(e, n, t) {
            var i = this,
                a = e.hasDarkBackground;
            (i.isHighContrastBlackTheme = !1),
                (i.isHighContrastWhiteTheme = !1),
                (i.hasDarkBackground = a),
                (i.lightImageNode = n),
                (i.darkImageNode = t),
                (function () {
                    if (r.isHighContrast()) {
                        var e = r.getHighContrastTheme();
                        (i.isHighContrastBlackTheme = "black" === e), (i.isHighContrastWhiteTheme = "white" === e);
                    }
                })();
        }
        i.components.register("accessible-image-control", {
            viewModel: {
                createViewModel: function (e, n) {
                    var t = i.utils.arrayFilter(n.templateNodes, function (e) {
                        return 1 === e.nodeType;
                    });
                    return new s(e, t[0], t[1]);
                },
            },
            template: t(274),
            synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents),
        }),
            (e.exports = s);
    },
    function (e, n, t) {
        var i = t(12),
            a = t(21),
            o = t(0),
            r = t(3),
            s = t(1),
            c = t(13).getInstance(window.ServerData),
            l = t(7),
            d = window,
            u = d.$Config || d.ServerData || {},
            p = r.Object,
            g = s.QueryString;
        e.exports = function (e) {
            var n = this,
                t = !1 !== (e = e || {}).checkApiCanary,
                r = e.withCredentials || !1,
                s = e.breakCache || !1,
                d = e.responseType || "",
                f = e.notifyOnClientAbort || !1;
            function m(e) {
                var n = { hpgid: u.hpgid || 0, hpgact: u.hpgact || 0 };
                return e || ((n.Accept = "application/json"), t && u.apiCanary && (n.canary = u.apiCanary)), u.correlationId && (n["client-request-id"] = u.correlationId), u.sessionId && (n.hpgrequestid = u.sessionId), n;
            }
            function h(e) {
                var n = e;
                if (e && "string" != typeof e) {
                    var t = {};
                    p.forEach(e, function (e, n) {
                        "unsafe_" === e.substr(0, 7) && (e = e.substr(7)), (t[e] = n);
                    }),
                        (n = i.stringify(t));
                }
                return n && (n = n.replace(/\?/g, "\\u003F")), n;
            }
            function v(e) {
                (e.headers = m()), (e.withCredentials = r), (e.breakCache = s), (e.responseType = d);
            }
            function b(e, n, t, i, a, o) {
                var r = null;
                if (n) {
                    var s = n.eventOptions || {};
                    if (((s.eventId = n.eventId || s.eventId), s.hasOwnProperty("hidingMode") || (s.hidingMode = l.HidingMode.None), s.eventId)) {
                        ((r = {}).eventType = t), (r.eventId = s.eventId), (r.eventLevel = s.eventLevel || l.EventLevel.ApiRequest);
                        var d = {};
                        (d.requestTimeout = i), a && (d.contentType = a), (d.requestType = t), o && (d.noCallback = !0), (r.eventArgs = d), (r.eventOptions = s), c.traceBeginRequest(e, r);
                    }
                }
                e.eventData = r;
            }
            function S(e, n, t, i, a) {
                c.traceEndRequest(e, n, t, i, a);
            }
            function _(e, n) {
                var t = {};
                return e && (t.xhr_status = e.status), (t.textStatus = n), t;
            }
            (n.Errors = []),
                (n.Json = function (e, a, r, s, c) {
                    var l = !(!r && !s),
                        d = new Date().getTime(),
                        p = e.url;
                    function g(e) {
                        var t,
                            a = (e = e || {}).error || null,
                            o = { startTime: d, endTime: new Date().getTime() };
                        if ((e.apiCanary && ((u.apiCanary = e.apiCanary), delete e.apiCanary), a)) {
                            t = (t = a.stackTrace) && t.encodeJson ? t.encodeJson() : "";
                            var c = i.stringify({ code: a.code, message: a.message, debug: a.debugMessage, stacktrace: t, requestUrl: p });
                            n.Errors.push(c), n.Errors.length > 100 && n.Errors.shift(), (8002 !== a.code || f) && s && s(e, o);
                        } else r && r(e, o);
                    }
                    if (t && !u.apiCanary)
                        return (
                            setTimeout(function () {
                                g({ error: { code: 8002, message: "Request Failed!", isFatal: !0 } });
                            }, 0),
                            null
                        );
                    var m = h(a);
                    n.Post(
                        e,
                        o.ContentType.Json,
                        m,
                        function (e, n) {
                            l && g(i.parse(n));
                        },
                        function (e, n, t, a) {
                            l &&
                                g(
                                    (function (e, n) {
                                        var t = {};
                                        if (500 === e.status)
                                            try {
                                                t = i.parse(e.responseText) || {};
                                            } catch (s) {}
                                        if (!t.error) {
                                            var a = !1,
                                                o = 8e3,
                                                r = "Request Failed -- No Response from Server";
                                            switch (n) {
                                                case "timeout":
                                                    (o = 8001), (r = "Timeout Error"), (a = !0);
                                                    break;
                                                case "abort":
                                                    (o = 8002), (r = "Aborted");
                                                    break;
                                                case "error":
                                                    e.status >= 400 && (a = !0);
                                                    break;
                                                case "parsererror":
                                                    (r = "Unable to parse response"), (a = !0);
                                            }
                                            t.error = { code: o, message: r, debugMessage: "(xhr status " + e.status + ") xhr.responseText: " + e.responseText, stackTrace: "", isFatal: a };
                                        }
                                        return t;
                                    })(n, t)
                                );
                        },
                        c
                    );
                }),
                (n.Post = function (e, t, i, o, r, s) {
                    var c = e.url,
                        l = {},
                        d = !1;
                    o || r || (d = !0), b(l, e, a.RequestType.Post, s, t, d);
                    var u = {
                        targetUrl: c,
                        contentType: t,
                        data: i,
                        requestType: a.RequestType.Post,
                        timeout: s || 3e4,
                        successCallback: function (e, n) {
                            S(l, "Success", n, !0, function () {
                                o(e, n);
                            });
                        },
                        failureCallback: function (e, n, t) {
                            S(l, "Failed", _(n, t), !1, function () {
                                r(e, n, t);
                            });
                        },
                        timeoutCallback: function (e, n, t) {
                            S(l, "Timeout", _(n, t), !1, function () {
                                r(e, n, t);
                            });
                        },
                    };
                    v(u), a.Handler.call(n, u), n.sendRequest();
                }),
                (n.Get = function (e, t, i, o, r) {
                    var s = e.url,
                        c = {},
                        l = !1;
                    i || o || (l = !0), b(c, e, a.RequestType.Get, r, t, l);
                    var d = {
                        targetUrl: s,
                        contentType: t,
                        requestType: a.RequestType.Get,
                        timeout: r || 3e4,
                        successCallback: function (e, n) {
                            S(c, "Success", n, !0, function () {
                                i(e, n);
                            });
                        },
                        failureCallback: function (e, n, t) {
                            S(c, "Failed", _(n, t), !1, function () {
                                o(e, n, t);
                            });
                        },
                        timeoutCallback: function (e, n, t) {
                            S(c, "Timeout", _(n, t), !1, function () {
                                o(e, n, t);
                            });
                        },
                    };
                    v(d), a.Handler.call(n, d), n.sendRequest();
                }),
                (n.Beacon = function (e, t, i, a, o) {
                    var r = [],
                        s = m(!0);
                    p.forEach(s, function (e, n) {
                        r.push([e, n]);
                    });
                    var c = e.url;
                    if (((c = g.add(c, r)), (e.url = c), navigator.sendBeacon)) {
                        var l = {};
                        b(l, e, "Beacon", o, null, !1);
                        var d = h(t),
                            u = navigator.sendBeacon(c, d);
                        S(l, u ? "Success" : "Failed", null, u, function () {
                            u && i ? i() : !u && a && a();
                        });
                    } else n.Json(e, t, i, a, o);
                });
        };
    },
    function (e, n, t) {
        var i = t(5);
        (n.throwUnhandledExceptionOnRejection = function (e) {
            e["catch"](function (e) {
                var n = e;
                e instanceof Error || (n = new Error("Unhandled Promise rejection: " + e)),
                    setTimeout(function () {
                        throw n;
                    }, 0);
            });
        }),
            (n.newPromiseWithTimeout = function (e, n, t) {
                return new i(function (a, o) {
                    i.resolve(e()).then(a, o),
                        setTimeout(function () {
                            a(t);
                        }, n);
                });
            });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(3),
            o = t(1),
            r = t(0),
            s = t(64),
            c = t(72),
            l = t(189),
            d = o.Helper,
            u = a.String,
            p = r.LayoutTemplateType,
            g = r.LayoutTemplateHorizontalPosition,
            f = {
                loadTenantBranding: function (e) {
                    var n = {};
                    if (e) {
                        var t = e[0] || {},
                            a = e[1] || {};
                        i.utils.arrayForEach(
                            [
                                "BoilerPlateText",
                                "UserIdLabel",
                                "TileLogo",
                                "TileDarkLogo",
                                "BannerLogo",
                                "BackgroundColor",
                                "Illustration",
                                "KeepMeSignedInDisabled",
                                "UseTransparentLightBox",
                                "CustomCss",
                                "LayoutTemplateConfig",
                                "HeaderLogo",
                                "AccessRecoveryLink",
                                "FooterTOULink",
                                "FooterTOUText",
                                "FooterPrivacyLink",
                                "FooterPrivacyText",
                            ],
                            function (e) {
                                n[e] = a[e] || t[e] || "";
                            }
                        ),
                            n.TileDarkLogo || (n.TileDarkLogo = n.TileLogo);
                    }
                    return n;
                },
                getPageBranding: function (e, n, t) {
                    var i = { useDefaultBackground: !1 };
                    if ((e && (i.bannerLogoUrl = e.BannerLogo), e && (e.BackgroundColor || e.Illustration)))
                        (i.color = e.BackgroundColor), (i.backgroundImageUrl = e.Illustration), (i.useTransparentLightBox = e.UseTransparentLightBox), (i.useImageMask = !0);
                    else if (n && (n.backgroundImageIndex >= 0 || n.backgroundLogoIndex >= 0 || n.backgroundColor || n.friendlyAppName))
                        n.backgroundImageIndex >= 0 &&
                            ((i.backgroundImageUrl = c(u.format("./{0}.jpg", n.backgroundImageIndex))), d.isStyleSupported("backgroundSize") && (i.smallImageUrl = c(u.format("./{0}-small.jpg", n.backgroundImageIndex)))),
                            n.backgroundLogoIndex >= 0 && (i.backgroundLogoUrl = l(u.format("./{0}.png", n.backgroundLogoIndex))),
                            (i.color = n.backgroundColor),
                            (i.friendlyAppName = n.friendlyAppName);
                    else if (n && n.urlLegacyBackgroundLogo) i.backgroundLogoUrl = n.urlLegacyBackgroundLogo;
                    else if (t >= 0) {
                        var a = d.isSvgImgSupported();
                        (i.backgroundImageUrl = s(u.format("./{0}.{1}", t, a ? "svg" : "jpg"))), !a && d.isStyleSupported("backgroundSize") && (i.smallImageUrl = s(u.format("./{0}-small.jpg", t))), (i.useDefaultBackground = !0);
                    }
                    return i;
                },
                getMergedBranding: function (e, n, t) {
                    var i;
                    return (
                        t
                            ? (i = n)
                            : (((i = e).BannerLogo = n && n.BannerLogo), (i.BoilerPlateText = n && n.BoilerPlateText), (i.KeepMeSignedInDisabled = n && n.KeepMeSignedInDisabled), n && e.CustomCss !== n.CustomCss && (i.CustomCss = null)),
                        i
                    );
                },
                getLayoutTemplateConfig: function (e) {
                    var n = e.LayoutTemplateConfig;
                    return n && n !== {} ? n : { showHeader: !1, layoutType: p.Lightbox, horizontalPosition: g.Center, hideAccessRecovery: !1, hideSignInOptions: !1, showFooter: !0, hideTOU: !1, hidePrivacy: !1 };
                },
            };
        e.exports = f;
    },
    function (module, exports) {
        var JSON;
        JSON || (JSON = {}),
            (function () {
                "use strict";
                var global = Function("return this")(),
                    JSON = global.JSON;
                function f(e) {
                    return e < 10 ? "0" + e : e;
                }
                JSON || (JSON = {}),
                    "function" != typeof Date.prototype.toJSON &&
                        ((Date.prototype.toJSON = function (e) {
                            return isFinite(this.valueOf())
                                ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
                                : null;
                        }),
                        (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                            return this.valueOf();
                        }));
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap,
                    indent,
                    meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                    rep;
                function quote(e) {
                    return (
                        (escapable.lastIndex = 0),
                        escapable.test(e)
                            ? '"' +
                              e.replace(escapable, function (e) {
                                  var n = meta[e];
                                  return "string" == typeof n ? n : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                              }) +
                              '"'
                            : '"' + e + '"'
                    );
                }
                function str(e, n) {
                    var t,
                        i,
                        a,
                        o,
                        r,
                        s = gap,
                        c = n[e];
                    switch ((c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(n, e, c)), typeof c)) {
                        case "string":
                            return quote(c);
                        case "number":
                            return isFinite(c) ? String(c) : "null";
                        case "boolean":
                        case "null":
                            return String(c);
                        case "object":
                            if (!c) return "null";
                            if (((gap += indent), (r = []), "[object Array]" === Object.prototype.toString.apply(c))) {
                                for (o = c.length, t = 0; t < o; t += 1) r[t] = str(t, c) || "null";
                                return (a = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + s + "]" : "[" + r.join(",") + "]"), (gap = s), a;
                            }
                            if (rep && "object" == typeof rep) for (o = rep.length, t = 0; t < o; t += 1) "string" == typeof rep[t] && (a = str((i = rep[t]), c)) && r.push(quote(i) + (gap ? ": " : ":") + a);
                            else for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (a = str(i, c)) && r.push(quote(i) + (gap ? ": " : ":") + a);
                            return (a = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + s + "}" : "{" + r.join(",") + "}"), (gap = s), a;
                    }
                }
                "function" != typeof JSON.stringify &&
                    (JSON.stringify = function (e, n, t) {
                        var i;
                        if (((gap = ""), (indent = ""), "number" == typeof t)) for (i = 0; i < t; i += 1) indent += " ";
                        else "string" == typeof t && (indent = t);
                        if (((rep = n), n && "function" != typeof n && ("object" != typeof n || "number" != typeof n.length))) throw new Error("JSON.stringify");
                        return str("", { "": e });
                    }),
                    "function" != typeof JSON.parse &&
                        (JSON.parse = function (text, reviver) {
                            var j;
                            function walk(e, n) {
                                var t,
                                    i,
                                    a = e[n];
                                if (a && "object" == typeof a) for (t in a) Object.prototype.hasOwnProperty.call(a, t) && ((i = walk(a, t)) !== undefined ? (a[t] = i) : delete a[t]);
                                return reviver.call(e, n, a);
                            }
                            if (
                                ((text = String(text)),
                                (cx.lastIndex = 0),
                                cx.test(text) &&
                                    (text = text.replace(cx, function (e) {
                                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                                    })),
                                /^[\],:{}\s]*$/.test(
                                    text
                                        .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                                        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                                ))
                            )
                                return (j = eval("(" + text + ")")), "function" == typeof reviver ? walk({ "": j }, "") : j;
                            throw new SyntaxError("JSON.parse");
                        }),
                    (global.JSON = JSON),
                    (module.exports = JSON);
            })();
    },
    function (e, n, t) {
        var i = t(7),
            a = t(22),
            o = t(3),
            r = t(5);
        function s(e) {
            var n,
                s = this,
                c = o.DateTime.getCurrentTime(),
                l = e && e.fEnableClientTelemetry && e.iClientLogLevel,
                d = null;
            function u(e) {
                return function () {
                    if (d) return d[e].apply(d, arguments);
                };
            }
            (s.createLoadClientTracingPromise = function () {
                return new r(function (n) {
                    l && !d
                        ? t
                              .e(2)
                              .then(
                                  function () {
                                      var i = t(401).getInstance(e, c);
                                      d || (d = i), n();
                                  }.bind(null, t)
                              )
                              ["catch"](t.oe)
                        : n();
                });
            }),
                (s.logRedirection = function (e, n) {
                    var t = e,
                        i = null;
                    return (
                        e && "string" != typeof e ? ((t = e.url), (i = e.eventOptions), (n = e.traceParameters ? n : null), e.traceUrl && (n ? (n.url = t) : (n = t))) : (n = null),
                        i && i.eventId && s.logEvent({ eventType: "onRedirect", eventId: i.eventId, eventLevel: i.eventLevel, eventArgs: n, eventOptions: i }),
                        t
                    );
                }),
                (s.getPropertyLogOption = function (e, n) {
                    return (n = n || {}).hasOwnProperty("tracingPropertyChange") || (n.tracingPropertyChange = !0), (n.eventLevel = n.eventLevel || i.EventLevel.Info), { viewModel: e, tracingOptions: n };
                }),
                (s.getDefaultTextBoxPropertyLogOption = function (e, n) {
                    return (n = n || {}).hasOwnProperty("hidingMode") || (n.hidingMode = i.HidingMode.None), (n.rateLimit = { method: "notifyWhenChangesStop" }), s.getPropertyLogOption(e, n);
                }),
                (s.getPIITextBoxPropertyLogOption = function (e, n) {
                    return ((n = n || {}).hidingMode = i.HidingMode.Mask), s.getDefaultTextBoxPropertyLogOption(e, n);
                }),
                (s.getPasswordTextBoxPropertyLogOption = function (e, n) {
                    return ((n = n || {}).hidingMode = i.HidingMode.Hide), s.getDefaultTextBoxPropertyLogOption(e, n);
                }),
                (s.getDefaultEventTracingOptions = function (e, n, t) {
                    return { eventId: e, eventLevel: t || i.EventLevel.Info, hidingMode: n ? i.HidingMode.None : i.HidingMode.Hide };
                }),
                (s.attachViewLoadClientTracingOptions =
                    ((n = "attachViewLoadClientTracingOptions"),
                    function () {
                        if (a) return a[n].apply(a, arguments);
                    })),
                (s.logEvent = u("logEvent")),
                (s.traceBeginRequest = u("traceBeginRequest")),
                (s.traceEndRequest = function (e, n, t, i, a) {
                    d ? d.traceEndRequest(e, n, t, i, a) : a && a();
                }),
                (s.setPageViewModel = u("setPageViewModel")),
                (s.logComponentEvent = u("logComponentEvent")),
                (s.logViewState = u("logViewState")),
                (s.setViewViewModel = u("setViewViewModel")),
                (s.switchView = u("switchView")),
                (s.postEvent = u("postEvent"));
        }
        var c = null;
        n.getInstance = function (e) {
            return (c = c || new s(e));
        };
    },
    function (e, n, t) {
        var i = t(21),
            a = t(1),
            o = i.Helper,
            r = a.QueryString,
            s = (n.Properties = { State: "State", SessionLookupKey: "SessionLookupKey", DisplaySignForUI: "DisplaySignForUI", FlowToken: "FlowToken" }),
            c = (n.Purpose = { Password: "eOTT_OneTimePassword", RemoteNGC: "eOTT_RemoteNGC", NoPassword: "eOTT_NoPasswordAccountLoginCode", OtcLogin: "eOTT_OtcLogin", XboxRemoteConnect: "RemoteSignInWithUserCode" }),
            l = (n.Channel = { Authenticator: "Authenticator", MobileSms: "SMS", EmailAddress: "Email", VoiceCall: "Voice", PushNotifications: "PushNotifications" }),
            d = (n.Type = { EmailAddress: "AltEmail", EmailAddressEncrypted: "AltEmailE", Mobile: "MobileNum", MobileEncrypted: "MobileNumE", SessionApprover: "SAPId" });
        n.Event = { OnSend: "otcsend", OnSendFail: "otcsendfailed", OnFlowExpired: "otcflowexpired" };
        var u = (n.RequestParam = {
                Username: "login",
                Purpose: "purpose",
                FlowToken: "flowtoken",
                CanaryFlowToken: "canaryFlowToken",
                Channel: "channel",
                UIMode: "UIMode",
                PhoneCountry: "MobileCountry",
                PhoneCountryCode: "MobileCC",
                UnauthSessionId: "uaid",
                ProofConfirmation: "ProofConfirmation",
            }),
            p = (n.Status = { None: 0, Error: 200, Success: 201, HIPError: 202, FTError: 203, InputError: 204, DestinationError: 205, Timeout: 300 }),
            g = (n.ProofTypeToChannel = function (e) {
                var n = null;
                switch (e) {
                    case PROOF.Type.SMS:
                        n = l.MobileSms;
                        break;
                    case PROOF.Type.Voice:
                        n = l.VoiceCall;
                        break;
                    case PROOF.Type.Email:
                    case PROOF.Type.AltEmail:
                        n = l.EmailAddress;
                        break;
                    case PROOF.Type.TOTPAuthenticatorV2:
                        n = l.PushNotifications;
                }
                return n;
            }),
            f = (n.ProofTypeToOtcType = function (e, n) {
                var t = null;
                switch (e) {
                    case PROOF.Type.Voice:
                    case PROOF.Type.SMS:
                        t = n ? d.MobileEncrypted : d.Mobile;
                        break;
                    case PROOF.Type.Email:
                    case PROOF.Type.AltEmail:
                        t = n ? d.EmailAddressEncrypted : d.EmailAddress;
                        break;
                    case PROOF.Type.TOTPAuthenticatorV2:
                        t = d.SessionApprover;
                }
                return t;
            });
        (n.Proof = function (e) {
            var n = e.username || "",
                t = e.flowToken || "",
                i = e.purpose || c.Password,
                a = e.proofType,
                o = e.proofData || "",
                r = e.isEncrypted,
                s = e.uiMode,
                l = e.lcid,
                d = e.phoneCountry || "",
                p = e.phoneCountryCode || "",
                m = e.unauthSessionId,
                h = e.proofConfirmation,
                v = e.canaryFlowToken;
            (this[u.Username] = n),
                (this[u.FlowToken] = t),
                (this[u.Purpose] = i),
                (this[u.Channel] = g(a)),
                (this[f(a, r)] = o),
                s && (this[u.UIMode] = s),
                l && (this.lcid = l),
                r || (a !== PROOF.Type.SMS && a !== PROOF.Type.Voice) || ((this[u.PhoneCountry] = d), (this[u.PhoneCountryCode] = p)),
                m && (this[u.UnauthSessionId] = m),
                h && (this[u.ProofConfirmation] = h),
                v && (this[u.CanaryFlowToken] = v);
        }),
            (n.Request = function (e) {
                var n,
                    t,
                    a,
                    c,
                    l = this,
                    d = p.None,
                    u = "",
                    g = "",
                    f = "",
                    m = e.data,
                    h = e.onSend,
                    v = e.onSendFail,
                    b = e.onFlowExpired,
                    S = e.timeout || 3e4,
                    _ = e.siteId,
                    y = e.clientId,
                    w = e.forwardedClientId,
                    C = e.noPaBubbleVersion;
                function T(e) {
                    var n = !1,
                        t = l.getResponseJson();
                    (f = t[s.FlowToken] || ""),
                        t[s.State] ? ((d = t[s.State]), (u = t[s.SessionLookupKey] || ""), (g = t[s.DisplaySignForUI] || ""), (n = d !== p.Success)) : ((d = p.Error), (u = ""), (g = ""), (n = !0)),
                        n ? (d === p.FTError ? b(e, l) : v(e, l)) : h(e);
                }
                function x() {
                    (f = ""), (d = p.Error), (u = ""), (g = ""), v(l);
                }
                function I() {
                    (d = p.Timeout), (u = ""), (g = ""), (f = ""), v(l);
                }
                (l.getOtcStatus = function () {
                    return l.isComplete() ? d : p.None;
                }),
                    (l.getSessionKey = function () {
                        return l.isComplete() ? u : "";
                    }),
                    (l.getDisplaySign = function () {
                        return l.isComplete() ? g : "";
                    }),
                    (l.getFlowToken = function () {
                        return l.isComplete() ? f : "";
                    }),
                    (n = r.extract("mkt")),
                    (t = r.extract("lc")),
                    (a = [].concat(n ? [["mkt", n]] : [], t ? [["lcid", t]] : [], _ ? [["id", _]] : [], y ? [["client_id", y]] : [], w ? [["fci", w]] : [], C ? [["nopa", C]] : [])),
                    (c = { targetUrl: r.add("GetOneTimeCode.srf", a), requestType: i.RequestType.Post, data: o.generateRequestString(m), isAsync: !0, timeout: S, successCallback: T, failureCallback: x, timeoutCallback: I }),
                    i.Handler.call(l, c);
            });
    },
    function (e, n, t) {
        var i = t(26),
            a = t(10),
            o = t(36),
            r = window,
            s = r.navigator;
        (n.makeCredential = function (e, n, t, a, r, c, l, d) {
            var u = [];
            c &&
                (u = c.map(function (e) {
                    return { type: "public-key", id: o.base64UrlStringToArrayBuffer(e) };
                }));
            var p = i.SupportedKeyAlgorithms.map(function (e) {
                    return { type: "public-key", alg: e };
                }),
                g = {
                    challenge: o.stringToArrayBuffer(e),
                    rp: { name: "Microsoft", id: d },
                    user: { id: o.base64UrlStringToArrayBuffer(n), name: t, displayName: a, icon: r },
                    pubKeyCredParams: p,
                    timeout: i.Timeout,
                    excludeCredentials: u,
                    authenticatorSelection: { authenticatorAttachment: l, requireResidentKey: !0, userVerification: "required" },
                    attestation: "direct",
                    extensions: { hmacCreateSecret: !0, credentialProtectionPolicy: "userVerificationOptional" },
                };
            return s.credentials.create({ publicKey: g });
        }),
            (n.getAssertion = function (e, n, t) {
                var a = [];
                n &&
                    (a = n.map(function (e) {
                        return { type: "public-key", id: o.base64UrlStringToArrayBuffer(e) };
                    }));
                var r = { challenge: o.stringToArrayBuffer(e), timeout: i.Timeout, rpId: t, allowCredentials: a, userVerification: "required" };
                return s.credentials.get({ publicKey: r });
            }),
            (n.isPlatformAuthenticatorAvailable = function () {
                return a.newPromiseWithTimeout(r.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable, i.PromiseTimeout, !1);
            });
    },
    function (e, n, t) {
        (function (n) {
            e.exports = n.ko = t(58);
        }.call(this, t(41)));
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4);
        var r = window;
        function s(e) {
            var n = this,
                t = ((e = e || {}).serverData, e.primaryButtonId),
                r = e.secondaryButtonId,
                s = e.primaryButtonText,
                c = e.secondaryButtonText,
                l = !1 !== e.isPrimaryButtonVisible,
                d = !1 !== e.isSecondaryButtonVisible,
                u = !1 !== e.isPrimaryButtonEnabled,
                p = !1 !== e.isSecondaryButtonEnabled,
                g = e.focusOnPrimaryButton || !1,
                f = e.focusOnSecondaryButton || !1,
                m = e.primaryButtonDescribedBy,
                h = e.secondaryButtonDescribedBy,
                v = e.primaryButtonCss,
                b = e.secondaryButtonCss,
                S = e.primaryButtonType || "submit",
                _ = e.removeBottomMargin,
                y = e.primaryButtonPreventTabbing || { direction: "none" };
            (n.primaryButtonId = t),
                (n.secondaryButtonId = r),
                (n.primaryButtonCss = v),
                (n.secondaryButtonCss = b),
                (n.primaryButtonText = i.observable(s)),
                (n.secondaryButtonText = i.observable(c)),
                (n.isPrimaryButtonVisible = i.observable(l)),
                (n.isSecondaryButtonVisible = i.observable(d)),
                (n.isPrimaryButtonEnabled = i.observable(u)),
                (n.isSecondaryButtonEnabled = i.observable(p)),
                (n.focusOnPrimaryButton = i.observable(g)),
                (n.focusOnSecondaryButton = i.observable(f)),
                (n.hasOneButtonVisible = i.pureComputed(function () {
                    var e = 0;
                    return n.isPrimaryButtonVisible() && e++, n.isSecondaryButtonVisible() && e++, 1 === e;
                })),
                (n.primaryButtonDescribedBy = m),
                (n.secondaryButtonDescribedBy = h),
                (n.removeBottomMargin = _),
                (n.primaryButtonPreventTabbing = y),
                (n.primaryButtonAttributes = i.pureComputed(function () {
                    var e = { id: n.primaryButtonId || "idSIButton9", "aria-describedby": n.primaryButtonDescribedBy };
                    return a.Helper.isChangingInputTypeSupported() && (e.type = S), e;
                })),
                (n.onPrimaryButtonClick = o.create()),
                (n.onSecondaryButtonClick = o.create()),
                (n.setTextPrimaryButton = function (e) {
                    n.primaryButtonText(e);
                }),
                (n.setTextSecondaryButton = function (e) {
                    n.secondaryButtonText(e);
                }),
                (n.setVisibilityPrimaryButton = function (e) {
                    n.isPrimaryButtonVisible(e);
                }),
                (n.setVisibilitySecondaryButton = function (e) {
                    n.isSecondaryButtonVisible(e);
                }),
                (n.setEnabledPrimaryButton = function (e) {
                    n.isPrimaryButtonEnabled(e);
                }),
                (n.setEnabledSecondaryButton = function (e) {
                    n.isSecondaryButtonEnabled(e);
                }),
                (n.primaryButton_onClick = function () {
                    n.onPrimaryButtonClick();
                }),
                (n.secondaryButton_onClick = function () {
                    n.onSecondaryButtonClick();
                });
        }
        i.components.register("footer-buttons-field", {
            viewModel: s,
            template: t(281),
            synchronous: !r.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(r.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = s);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window,
            r = a.Helper;
        function s() {
            var e = this;
            (e.useCssAnimation = !1), r.isCSSAnimationSupported() && !r.isHighContrast() && (e.useCssAnimation = !0);
        }
        i.components.register("marching-ants-control", { viewModel: s, template: t(291), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) }),
            (e.exports = s);
    },
    function (e, n, t) {
        var i = t(14),
            a = t(7),
            o = t(13).getInstance(window.ServerData);
        e.exports = function (e) {
            var n = null,
                t = e.username,
                r = e.proofData,
                s = e.proofType,
                c = e.purpose || i.Purpose.Password,
                l = e.flowToken,
                d = e.canaryFlowToken,
                u = !1 !== e.isEncrypted,
                p = e.uiMode,
                g = e.lcid,
                f = e.unauthSessionId,
                m = e.proofConfirmation,
                h = e.phoneCountry,
                v = e.phoneCountryCode,
                b = e.siteId,
                S = e.clientId,
                _ = e.forwardedClientId,
                y = e.noPaBubbleVersion,
                w = e.successCallback,
                C = e.failureCallback,
                T = e.clientTracingOptions,
                x = {};
            function I(e, n, t, i, a) {
                o.traceEndRequest(e, n, t, i, a);
            }
            function k() {
                I(x, "Success", null, !0, function () {
                    w && w(n);
                });
            }
            function P() {
                var e = { otcStatus: n.getOtcStatus() };
                I(x, "Failed", e, !1, function () {
                    C && C(n);
                });
            }
            this.sendRequest = function () {
                var e,
                    w = {
                        data:
                            ((e = {
                                username: t,
                                proofData: r,
                                proofType: s,
                                purpose: c,
                                flowToken: l,
                                canaryFlowToken: d,
                                isEncrypted: u,
                                uiMode: p,
                                lcid: g,
                                unauthSessionId: f,
                                proofConfirmation: m,
                                phoneCountry: h,
                                phoneCountryCode: v,
                            }),
                            new i.Proof(e)),
                        siteId: b,
                        clientId: S,
                        forwardedClientId: _,
                        noPaBubbleVersion: y,
                        onSend: k,
                        onSendFail: P,
                        onFlowExpired: P,
                    },
                    C = {};
                (C.proofType = s),
                    (C.purpose = c),
                    (C.uiMode = p),
                    (C.lcid = g),
                    (C.phoneCountry = h),
                    (C.phoneCountryCode = v),
                    (function (e, n) {
                        var t = T || {};
                        t.hasOwnProperty("eventId") || (t.eventId = a.EventIds.Api_GetOneTimeToken);
                        if (t.eventId) {
                            var i = { eventType: "POST", eventId: t.eventId, eventLevel: t.eventLevel || a.EventLevel.Info, eventArgs: n, eventOptions: t };
                            o.traceBeginRequest(e, i);
                        }
                    })(x, C),
                    (n = new i.Request(w)).sendRequest();
            };
        };
    },
    function (e, n, t) {
        var i = t(0),
            a = t(6),
            o = t(5),
            r = t(11),
            s = t(1),
            c = t(3),
            l = t(9),
            d = t(7),
            u = s.Helper,
            p = s.QueryString,
            g = c.String,
            f = c.Object,
            m = i.CredentialType,
            h = i.RemoteNgcType,
            v = i.Error,
            b = i.ApiErrorCodes,
            S = i.EstsError,
            _ = i.PaginatedState,
            y = i.IfExistsResult,
            w = i.ThrottleStatus,
            C = i.DomainType,
            T = i.BindProvider,
            x = a.AllowedIdentitiesType,
            I = i.SessionPullFlags;
        var k = (D.GctResultAction = { ShowError: 1, SwitchView: 2, Redirect: 3 }),
            P = (D.GctRequestHelperFlags = { CheckCurrentIdpOnly: 1, IsPhoneNumberFullyQualified: 2, DisableDesktopSsoPreferredCred: 4, DisableAutoSend: 8, ForceOtcLogin: 16, IsPostRequest: 32, IsSignup: 64 });
        function D(e, n) {
            var a = this,
                s = !1,
                D = null,
                E = null,
                A = null,
                R = {},
                L = e,
                N = 0 != (n & P.CheckCurrentIdpOnly),
                U = 0 != (n & P.IsPhoneNumberFullyQualified),
                F = 0 != (n & P.DisableDesktopSsoPreferredCred),
                O = 0 != (n & P.DisableAutoSend),
                B = 0 != (n & P.ForceOtcLogin),
                M = 0 != (n & P.IsPostRequest),
                V = 0 != (n & P.IsSignup),
                j = L.str,
                H = L.sUnauthSessionID,
                W = L.iAllowedIdentities,
                G = L.fIsFedDisabled,
                q = !!L.fIsRemoteNGCSupported,
                z = !!L.fShowCookieBanner,
                $ = !!L.fIsFidoSupported,
                K = L.fIsOtcLoginDisabled,
                X = L.fIsNoPaOtcDisabled,
                J = !!L.fIsExternalFederationDisallowed,
                Q = !!L.fIsPassthroughDisallowed,
                Y = !!L.fIsPhoneNumberSignupDisallowed,
                Z = L.sCtx,
                ee = L.fDoIfExists,
                ne = L.fCheckProofForAliases,
                te = L.fCheckApiCanary,
                ie = L.urlGetCredentialType,
                ae = L.fCBShowSignUp,
                oe = L.fAllowSkypeNameLogin,
                re = e.urlMsaSignUp,
                se = L.urlSignUp,
                ce = L.oSignUpPostParams,
                le = L.fUseConsumerEmailError,
                de = L.oUrlOtherIdpPostParams,
                ue = L.desktopSsoConfig,
                pe = L.sFedQS,
                ge = L.staticTenantBranding,
                fe = L.dynamicTenantBranding,
                me = L.isGlobalTenant,
                he = (L.fCheckForWindowsSku, L.country),
                ve = L.arrProofData || {},
                be = parseInt(L.sProofType),
                Se = L.urlChangePassword,
                _e = !!L.fAllowRemoteConnect,
                ye = L.fBindCookiesUsingPoP,
                we = L.iGctFederationFlags || 0,
                Ce = L.fIgnoreViralUsers,
                Te = L.fAccessPassSupported,
                xe = L.fHidePhoneCobasiInOtherSignIn,
                Ie = L.fImprovePhoneDisambig;
            function ke(e, n, t) {
                var i = e.Credentials && e.Credentials.OtcLoginEligibleProofs,
                    a = [];
                if (
                    (i &&
                        c.Array.forEach(i, function (e) {
                            if (e.isDefault === n) {
                                var t = { credType: m.OneTimeCode, proof: e };
                                switch (((t.proof.isEncrypted = !0), e.type)) {
                                    case PROOF.Type.SMS:
                                    case PROOF.Type.Voice:
                                        if (!e.isVoiceOnly) {
                                            var i = f.clone(t);
                                            i.proof.otcSent && M && be === PROOF.Type.Voice && (i.proof.otcSent = !1), (i.proof.type = PROOF.Type.SMS), xe && (i.shownOnlyOnPicker = !0), a.push(i);
                                        }
                                        if (e.voiceEnabled) {
                                            var o = f.clone(t);
                                            !o.proof.otcSent || (M && be === PROOF.Type.Voice) || (o.proof.otcSent = !1), (o.proof.type = PROOF.Type.Voice), a.push(o);
                                        }
                                        break;
                                    case PROOF.Type.Email:
                                        a.push(f.clone(t));
                                }
                            }
                        }),
                    n && 0 === a.length && Ae(e, t) === m.OneTimeCode)
                ) {
                    var o = e.Credentials && e.Credentials.HasPassword,
                        r = {
                            credType: m.OneTimeCode,
                            proof: { display: e.Display, data: g.cleanseUsername(e.Display), otcSent: !0, isEncrypted: !1, isDefault: !0, isNopa: !o, type: g.isEmailAddress(e.Username) ? PROOF.Type.Email : PROOF.Type.SMS },
                        };
                    a.push(r);
                }
                return a;
            }
            function Pe(e) {
                (e.proof.str = {}),
                    f.extend(e.proof.str, ve[e.proof.type] || {}),
                    f.forEach(e.proof.str, function (n, t) {
                        t && (e.proof.str[n] = g.format(t, e.proof.display + "\u200e", e.proof.clearDigits || ""));
                    });
            }
            function De(e, n, t, i, o, r) {
                var c = {},
                    l =
                        ue &&
                        i.EstsProperties &&
                        i.EstsProperties.DesktopSsoEnabled &&
                        !(function (e) {
                            return e && ue.lastUsernameTried && e.toLowerCase() === ue.lastUsernameTried.toLowerCase();
                        })(n),
                    d = i.ErrorHR,
                    f = Fe(n, i, o),
                    b = a.getGctSharedData(i, o, r);
                if (((b.username = n), d === v.PP_E_INVALID_PHONENUMBER || d === v.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION))
                    c = (function (e) {
                        if (U) return je(j.CT_PWD_STR_Error_InvalidPhoneNumber, !0);
                        return Ve(_.PhoneDisambiguation, { phoneDisambigError: e });
                    })(d);
                else if (d === v.PP_E_NAME_INVALID || d === v.PP_E_INVALIDARG) c = je(j.CT_PWD_STR_Error_InvalidUsername);
                else if (d === v.PP_E_FEDERATION_INLINELOGIN_DISALLOWED) c = je(j.CT_PWD_STR_Error_FedNotAllowed, !0);
                else if (d === v.PP_E_LOGIN_NOPA_USER_PASSWORD_REQUIRED) c = je(g.format(j.CT_STR_Error_PasswordRequired, p.stripQueryStringAndFragment(Se)));
                else if (i.RequiresPhoneDisambiguation) c = Ve(_.PhoneDisambiguation);
                else {
                    if (i.AliasDisabledForLogin) return je(j.CT_PWD_STR_Error_AliasDisabled, !0);
                    if (i.IfExistsResult === y.NotExist)
                        c = (function (e, n, t, i) {
                            var a,
                                o = Me(e, t),
                                r = t.EstsProperties || {},
                                s = r.DomainType && r.DomainType !== C.Unknown && r.DomainType !== C.Consumer;
                            if (t.IsProofForAlias) return Ve(_.ConfirmRecoverUsername);
                            if (ae && o && (ee || ne)) return ee ? Ue(e, t) : Ve(_.ConfirmSignup);
                            a = n
                                ? t.ThrottleStatus === w.NotThrottled && s
                                    ? j.CT_PWD_STR_Error_UsernameNotExist_Alternate_VerifiedDomain
                                    : j.CT_PWD_STR_Error_UsernameNotExist_Alternate
                                : Ae(t, i) === m.OneTimeCode
                                ? t.ThrottleStatus === w.MsaThrottled
                                    ? j.CT_PWD_STR_Error_UsernameNotExists_EmailOtpAllowed_MsaFailed
                                    : j.CT_PWD_STR_Error_UsernameNotExists_EmailOtpAllowed
                                : le && r.DomainType === C.Consumer
                                ? j.CT_PWD_STR_Error_UsernameNotExist_ConsumerEmail
                                : t.ThrottleStatus === w.NotThrottled && s
                                ? o
                                    ? j.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_SignupAllowed
                                    : j.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain
                                : t.ThrottleStatus === w.MsaThrottled
                                ? s && o
                                    ? j.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed_SignupAllowed
                                    : s
                                    ? j.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed
                                    : ae && !se
                                    ? j.CT_PWD_STR_Error_UsernameNotExist_Guest_SignupAllowed_MsaFailed
                                    : j.CT_PWD_STR_Error_UnknownDomain_MsaFailed
                                : V && !s
                                ? j.CT_PWD_STR_Error_UsernameNotExist_Guest_Signup
                                : Ie && U
                                ? j.CT_PWD_STR_Error_InvalidPhoneNumber
                                : j.CT_PWD_STR_Error_UsernameNotExist;
                            return je(g.format(a, u.htmlEscape(g.extractDomain(e)), u.htmlEscape(e)), !0);
                        })(n, t, i, o);
                    else if (i.IfExistsResult === y.ExistsBothIDPs)
                        c = Ve(_.IdpDisambiguation, { desktopSsoEnabled: l, idpRedirectUrl: f.idpRedirectUrl, idpRedirectPostParams: f.idpRedirectPostParams, idpRedirectProvider: f.idpRedirectProvider });
                    else if (i.IfExistsResult === y.ExistsInOtherMicrosoftIDP) c = Ne(e, n);
                    else if (!s || (i.IfExistsResult !== y.Error && i.IfExistsResult !== y.Throttled && 0 == (i.ThrottleStatus & w.MsaThrottled)))
                        if (i.ShowRemoteConnect) c = Ve(_.RemoteLoginPolling);
                        else {
                            c = (function (e, n, t, i, a, o) {
                                var r = Ae(i, o);
                                if (!F && n) return Ve(_.FetchSessionsProgress, { unsafe_desktopSsoDomainToUse: g.extractDomain(e), sessionPullType: I.Dsso });
                                var s = { idpRedirectUrl: t.idpRedirectUrl, idpRedirectPostParams: t.idpRedirectPostParams, idpRedirectProvider: t.idpRedirectProvider };
                                switch (r) {
                                    case m.OneTimeCode:
                                        var c = _.OneTimeCode;
                                        return O && (c = a ? _.ProofConfirmation : _.ConfirmSend), Ve(c);
                                    case m.PublicIdentifierCode:
                                        return O || (i.Credentials.SasParams && i.Credentials.SasParams.Success) ? Ve(O ? _.ConfirmSend : _.OneTimeCode) : je(j.CT_PWD_STR_Error_GetCredentialTypeError, !1, !0);
                                    case m.Fido:
                                        return Ve(_.Fido);
                                    case m.RemoteNGC:
                                        var l = i.Credentials.RemoteNgcParams.DefaultType === h.PushNotification;
                                        return Ve(O && l ? _.ConfirmSend : _.RemoteNGC, s);
                                    case m.Federation:
                                    case m.CloudFederation:
                                        return Ve(_.IdpRedirect, s);
                                    case m.LinkedIn:
                                    case m.GitHub:
                                    case m.Google:
                                    case m.Facebook:
                                        return Ve(Re(i, o).length > 1 || Le(i, o).length > 0 ? _.IdpRedirectSpeedbump : _.IdpRedirect, s);
                                    case m.AccessPass:
                                        return Ve(_.AccessPass, s);
                                    case m.NoPreferredCredential:
                                        return Ve(_.CredentialPicker, s);
                                    case m.OtherMicrosoftIdpFederation:
                                        return Ue(e, i, re);
                                    case m.Password:
                                    default:
                                        return Ve(_.Password);
                                }
                            })(n, l, f, i, b.otcCredential && b.otcCredential.proof.clearDigits, o);
                        }
                    else c = Ve(_.IdpDisambiguation, { hasIdpDisambigError: !0, desktopSsoEnabled: l, idpRedirectUrl: f.idpRedirectUrl, idpRedirectPostParams: f.idpRedirectPostParams, idpRedirectProvider: f.idpRedirectProvider });
                }
                return (c.flowToken = i.FlowToken || null), c.bypassCache || ((R[n] = i), (R[n].FlowToken = null)), (c.sharedData = b), c;
            }
            function Ee(e) {
                var n = {};
                if (e && e.error)
                    switch (e.error.code) {
                        case b.AuthFailure:
                            n = je(j.CT_PWD_STR_Error_FlowTokenExpired);
                            break;
                        case S.PublicIdentifierSasBeginCallNonRetriableError:
                        case S.PublicIdentifierSasBeginCallRetriableError:
                            n = je(j.CT_PWD_STR_Error_GetCredentialTypeError, !1, !0);
                            break;
                        default:
                            n = je(j.CT_PWD_STR_Error_GetCredentialTypeError);
                    }
                else n = je(j.CT_PWD_STR_Error_GetCredentialTypeError);
                return (n.flowToken = e.FlowToken || null), n;
            }
            function Ae(e, n) {
                var t = m.Password,
                    i = e.Credentials;
                return i && ((t = i.PrefCredential) !== m.Fido || n || (t = i.RemoteNgcParams && i.RemoteNgcParams.SessionIdentifier ? m.RemoteNGC : m.Password)), t;
            }
            function Re(e, n) {
                var t = e.Credentials || {},
                    i = t.SasParams,
                    a = t.LinkedInParams,
                    o = t.GitHubParams,
                    r = t.GoogleParams,
                    s = t.FacebookParams,
                    l = t.CertAuthParams,
                    d = e.EstsProperties || {},
                    u = [].concat(
                        t.HasPassword && d.DomainType !== C.Federated ? { credType: m.Password } : [],
                        t.FederationRedirectUrl && d.DomainType === C.Federated ? { credType: m.Federation } : [],
                        t.FederationRedirectUrl && d.DomainType === C.CloudFederated ? { credType: m.CloudFederation } : [],
                        t.HasRemoteNGC ? { credType: m.RemoteNGC } : [],
                        t.HasFido && n ? { credType: m.Fido } : [],
                        t.HasPhone && i ? { credType: m.PublicIdentifierCode } : [],
                        t.HasLinkedInFed && a ? { credType: m.LinkedIn, redirectUrl: a.LinkedInRedirectUrl } : [],
                        t.HasGitHubFed && o ? { credType: m.GitHub, redirectUrl: o.GithubRedirectUrl } : [],
                        t.HasGoogleFed && r ? { credType: m.Google, redirectUrl: r.GoogleRedirectUrl } : [],
                        t.HasFacebookFed && s ? { credType: m.Facebook, redirectUrl: s.FacebookRedirectUrl } : [],
                        t.HasAccessPass ? { credType: m.AccessPass } : [],
                        t.HasCertAuth ? { credType: m.Certificate, redirectUrl: l.CertAuthUrl, redirectPostParams: Oe(e.FlowToken) } : []
                    );
                if (ve[PROOF.Type.Email] && ve[PROOF.Type.SMS] && ve[PROOF.Type.Voice]) {
                    var p = ke(e, !0, n);
                    p.length > 0 && (c.Array.forEach(p, Pe), (u = u.concat(p)));
                }
                return u;
            }
            function Le(e, n) {
                var t = [];
                if (ve[PROOF.Type.Email] && ve[PROOF.Type.SMS] && ve[PROOF.Type.Voice]) {
                    var i = ke(e, !1, n);
                    i.length > 0 &&
                        (c.Array.forEach(i, Pe),
                        (t = t.concat(i)),
                        c.Array.first(i, function (e) {
                            return !e.proof.isNopa;
                        }) && (t = t.concat({ credType: m.Password, isDefault: !1 })));
                }
                return t;
            }
            function Ne(e, n) {
                e = p.appendOrReplace(e, "username", encodeURIComponent(n).replace(new RegExp("'", "g"), "%27"));
                var t = de ? f.clone(de) : null;
                return t && (t.unsafe_username = n), He(e, t, !0, d.EventIds.Redirect_OtherIdpRedirection);
            }
            function Ue(e, n, t) {
                (t = t || se), (t = p.remove(t, "username"));
                var i = ce ? f.clone(ce) : null;
                return (
                    n && (n.IfExistsResult === y.NotExist || (n.IsUnmanaged && n.IfExistsResult === y.Exists)) && Me(e, n) && (i ? (i.unsafe_username = e) : (t = p.appendOrReplace(t, "username", encodeURIComponent(e)))),
                    He(t, i, !1, d.EventIds.Redirect_MSASignUpPage)
                );
            }
            function Fe(e, n, t) {
                var i = {},
                    a = Ae(n, t),
                    o = n.EstsProperties || {};
                if (!(n.Credentials && (n.Credentials.FederationRedirectUrl || n.Credentials.LinkedInParams || n.Credentials.GitHubParams || n.Credentials.GoogleParams || n.Credentials.FacebookParams))) return i;
                switch (a) {
                    case m.RemoteNGC:
                    case m.Federation:
                    case m.AccessPass:
                    case m.NoPreferredCredential:
                        o && o.SamlRequest && o.RelayState
                            ? ((i.idpRedirectUrl = n.Credentials.FederationRedirectUrl), (i.idpRedirectPostParams = { SAMLRequest: o.SamlRequest, RelayState: o.RelayState, unsafe_username: e }))
                            : (i.idpRedirectUrl = (function (e, n) {
                                  if (pe) {
                                      var t = p.appendOrReplace("?" + pe, "wctx", "LoginOptions%3D3%26" + p.extract("wctx", "?" + pe));
                                      (t = t.substr(1)), (e = p.append(e, t));
                                  } else e = p.appendOrReplace(e, "wctx", "LoginOptions%3D3%26" + p.extract("wctx", e));
                                  return (
                                      (e = p.appendOrReplace(e, "cbcxt", encodeURIComponent(decodeURIComponent(p.extract("cbcxt"))))),
                                      (e = p.appendOrReplace(e, "username", encodeURIComponent(n))),
                                      (e = p.appendOrReplace(e, "mkt", encodeURIComponent(decodeURIComponent(p.extract("mkt"))))),
                                      (e = p.appendOrReplace(e, "lc", encodeURIComponent(decodeURIComponent(p.extract("lc")))))
                                  );
                              })(n.Credentials.FederationRedirectUrl, e));
                        break;
                    case m.CloudFederation:
                        i.idpRedirectUrl = n.Credentials.FederationRedirectUrl;
                        break;
                    case m.LinkedIn:
                        (i.idpRedirectUrl = n.Credentials.LinkedInParams.LinkedInRedirectUrl), (i.idpRedirectProvider = T.LinkedIn);
                        break;
                    case m.GitHub:
                        (i.idpRedirectUrl = n.Credentials.GitHubParams.GithubRedirectUrl), (i.idpRedirectProvider = T.GitHub);
                        break;
                    case m.Google:
                        (i.idpRedirectUrl = n.Credentials.GoogleParams.GoogleRedirectUrl), (i.idpRedirectProvider = T.Google);
                        break;
                    case m.Facebook:
                        (i.idpRedirectUrl = n.Credentials.FacebookParams.FacebookRedirectUrl), (i.idpRedirectProvider = T.Facebook);
                }
                return i;
            }
            function Oe(e) {
                return { ctx: Z, flowToken: e };
            }
            function Be(e) {
                return g.cleanseUsername(e, !0);
            }
            function Me(e, n) {
                var t = oe && g.isSkypeName(e),
                    i = n.EstsProperties || {};
                return i.DomainType && i.DomainType !== C.Unknown && i.DomainType !== C.Consumer ? !1 === n.IsSignupDisallowed : !n.IsSignupDisallowed && !t;
            }
            function Ve(e, n) {
                return { action: k.SwitchView, viewId: e, viewParams: n };
            }
            function je(e, n, t) {
                return { action: k.ShowError, error: e, isBlockingError: n, bypassCache: t };
            }
            function He(e, n, t, i) {
                return { action: k.Redirect, redirectUrl: e, redirectPostParams: n, isIdpRedirect: t, eventId: i };
            }
            (a.sendAsync = function (e, n, t) {
                var a = Be(n),
                    r = R[a] ? R[a] : null,
                    c = !!r,
                    u = r
                        ? o.resolve(r)
                        : (function (e, n) {
                              var t = [E].concat(A || []);
                              return o.all(t).then(function (t) {
                                  var a = t[0],
                                      r = t[1];
                                  return new o(function (t, o) {
                                      new l({ checkApiCanary: te }).Json(
                                          { url: ie, eventId: d.EventIds.Api_GetCredentialType },
                                          (function (e, n, t, i) {
                                              var a = {
                                                  unsafe_username: e,
                                                  uaid: H,
                                                  isOtherIdpSupported: s,
                                                  isFederationDisabled: G,
                                                  checkPhones: g.isPhoneNumber(e),
                                                  isRemoteNGCSupported: q,
                                                  isCookieBannerShown: z,
                                                  isFidoSupported: t,
                                                  originalRequest: Z,
                                                  country: he,
                                                  forceotclogin: B,
                                                  otclogindisallowed: K,
                                                  isExternalFederationDisallowed: J,
                                                  isRemoteConnectSupported: _e,
                                                  federationFlags: we,
                                                  isSignup: V,
                                                  flowToken: n,
                                              };
                                              ne && (a.checkProofForAliases = !0);
                                              X && (a.noPaOtcDisallowed = !0);
                                              Q && (a.isPassthroughDisallowed = !0);
                                              Y && (a.isPhoneNumberSignupDisallowed = !0);
                                              Ce && (a.ignoreViralUsers = !0);
                                              ye && ((i = i || { cpa: "", err: "Authenticator not generated." }), (a.cpa = i.cpa), (a.cpa_err = i.err));
                                              Te && (a.isAccessPassSupported = !0);
                                              return a;
                                          })(e, n, a, r),
                                          t,
                                          o,
                                          i.DefaultRequestTimeout
                                      );
                                  });
                              });
                          })(a, t);
                return o.all([D, u, E]).then(function (n) {
                    var t = n[0],
                        i = n[1],
                        o = n[2];
                    return De(e, a, t, i, o, c);
                }, Ee);
            }),
                (a.getResult = function (e, n, t, i) {
                    return De(e, Be(n), !1, t, i, !1);
                }),
                (a.getState = function () {
                    return { cache: R };
                }),
                (a.restoreState = function (e) {
                    e && (R = e.cache || {});
                }),
                (a.cacheResponse = function (e, n) {
                    R[Be(e)] = n;
                }),
                (a.getSignupRedirectGctResult = function (e) {
                    var n = Be(e);
                    return Ue(n, R[n] ? R[n] : null);
                }),
                (a.getOtherIdpRedirectGctResult = function (e, n) {
                    return Ne(e, Be(n));
                }),
                (a.getGctSharedData = function (e, n, t) {
                    var i = {},
                        a = Ae(e, n),
                        o = e.Credentials || {},
                        s = o.RemoteNgcParams,
                        l = o.FidoParams,
                        d = e.EstsProperties || {},
                        u = s ? s.DefaultType : null,
                        p = !!s && s.ShowAnimatedGifWhilePolling,
                        g = !!s && s.StyleCredSwitchLinkAsButton,
                        f = r.loadTenantBranding(d.UserTenantBranding || fe),
                        h = r.loadTenantBranding(ge),
                        v = Fe(e.Username, e, n);
                    return (
                        (i.preferredCredential = a),
                        (i.location = e.Location),
                        (i.fedRedirectParams = v),
                        e.Display && (i.displayName = e.Display),
                        (i.availableCreds = Re(e, n)),
                        (i.evictedCreds = Le(e, n)),
                        a === m.OneTimeCode &&
                            ((i.otcCredential = c.Array.first(i.availableCreds, function (e) {
                                return e.credType === m.OneTimeCode && e.proof.otcSent;
                            })),
                            (i.useEvictedCredentials = !1)),
                        (i.remoteNgcParams = {
                            requestSent: !O && !t && a === m.RemoteNGC && s && s.hasOwnProperty("Entropy"),
                            sessionIdentifier: s ? s.SessionIdentifier : null,
                            entropy: s ? s.Entropy : null,
                            defaultType: u,
                            showAnimatedGifWhilePolling: p,
                            styleCredSwitchLinkAsButton: g,
                        }),
                        (i.otcParams = { requestSent: (a === m.OneTimeCode || a === m.PublicIdentifierCode) && e.IfExistsResult !== y.ExistsBothIDPs }),
                        l && l.AllowList && (i.fidoParams = { allowList: l.AllowList }),
                        (i.callMetadata = d && d.CallMetadata ? d.CallMetadata : {}),
                        (i.userTenantBranding = r.getMergedBranding(h, f, me)),
                        i
                    );
                }),
                (s = !N && W === x.Both),
                (D = o.resolve(!1)),
                (E = u.isFidoSupportedAsync($)),
                ye &&
                    t
                        .e(26)
                        .then(
                            function () {
                                var e = t(434);
                                A = e.computePoPAuthenticator("POST", ie).then(
                                    function (e) {
                                        return { cpa: e, err: null };
                                    },
                                    function (e) {
                                        return { cpa: "", err: e.message };
                                    }
                                );
                            }.bind(null, t)
                        )
                        ["catch"](t.oe);
        }
        e.exports = D;
    },
    function (e, n, t) {
        var i = t(12),
            a = t(1),
            o = t(3),
            r = o.Object,
            s = a.HttpCode,
            c = window;
        n.RequestType = { Post: "POST", Get: "GET" };
        var l = (n.State = { Unsupported: -1, Unsent: 0, Done: 4, Timeout: 5 });
        (n.Event = { OnSuccess: "ajaxsuccess", OnError: "ajaxerror", OnTimeout: "ajaxtimeout" }),
            (n.Helper = {
                generateRequestString: function (e) {
                    var n = "";
                    return (
                        e &&
                            r.forEach(e, function (e, t) {
                                (t || "" === t) && (n.length > 0 && (n += "&"), (n += e + "=" + t));
                            }),
                        n
                    );
                },
            }),
            (n.Handler = function (e) {
                var n = this,
                    t = "",
                    d = [],
                    u = null,
                    p = null,
                    g = !1,
                    f = !0,
                    m = null,
                    h = !1,
                    v = !!e.contentType,
                    b = !!e.headers,
                    S = !!e.headerValue,
                    _ = e.data || "",
                    y = e.targetUrl || "",
                    w = e.requestType || "",
                    C = !1 !== e.isAsync,
                    T = e.timeout || 0,
                    x = e.username || "",
                    I = e.password || "",
                    k = e.contentType || "application/x-www-form-urlencoded",
                    P = e.withCredentials || !1,
                    D = e.breakCache || !1,
                    E = e.responseType || "",
                    A = e.headers || {},
                    R = e.successCallback,
                    L = e.failureCallback,
                    N = e.timeoutCallback;
                function U(e, i) {
                    e || n.isSuccess() ? R && R(u, t) : (i || (!n.isSuccess() && !g)) && L && L(u, p, p.statusText);
                }
                function F() {
                    if (((m = null), (g = !0), n.cancel(), N)) {
                        var e = { status: s.Timeout, statusText: "timeout" };
                        N(u, e, e.statusText);
                    }
                }
                function O(e) {
                    if ((j(), !n.isComplete() && !p.canceled && L)) {
                        var t = { status: s.ClientClosedRequest, statusText: "abort" };
                        L(e, t, t.statusText);
                    }
                }
                function B(e) {
                    n.isComplete() || V(e);
                }
                function M(e) {
                    n.isComplete() && !g && V(e);
                }
                function V(e) {
                    j(), (t = p.responseText), (u = e), U();
                }
                function j() {
                    m && (clearTimeout(m), (m = null));
                }
                function H(e) {
                    j(), (t = p.responseText), U(e, !e);
                }
                (n.sendRequest = function (e) {
                    (u = e),
                        (function () {
                            g = !1;
                            var e = "withCredentials" in new XMLHttpRequest();
                            if (!h || e) {
                                var t = y;
                                ((p = new XMLHttpRequest()).onreadystatechange = M),
                                    p.addEventListener && (p.addEventListener("abort", O), p.addEventListener("error", B)),
                                    D && (t = a.QueryString.appendOrReplace(t, "_", new Date().getTime())),
                                    x.length > 0 ? p.open(w, t, C, x, I) : p.open(w, t, C),
                                    n.clearResponse(),
                                    r.forEach(A, function (e, n) {
                                        p.setRequestHeader(e, n);
                                    }),
                                    (p.responseType = E),
                                    (p.withCredentials = P);
                            } else
                                c.XDomainRequest
                                    ? !C || x || I || v || b || S || P
                                        ? (f = !1)
                                        : (((p = new c.XDomainRequest()).onerror = function () {
                                              H(!1);
                                          }),
                                          (p.onload = function () {
                                              H(!0);
                                          }),
                                          p.open(w, y),
                                          n.clearResponse())
                                    : (f = !1);
                        })(),
                        f &&
                            (T > 0 &&
                                (m = setTimeout(function () {
                                    F.call(n);
                                }, T)),
                            p.send(_));
                }),
                    (n.getState = function () {
                        return f ? (g ? l.Timeout : p ? p.readyState : l.Unsent) : l.Unsupported;
                    }),
                    (n.getStatus = function () {
                        return g ? s.Timeout : p ? p.status : 0;
                    }),
                    (n.cancel = function () {
                        p && ((p.canceled = !0), p.abort());
                    }),
                    (n.getResponseJson = function () {
                        return t ? i.parse(t) : {};
                    }),
                    (n.isComplete = function () {
                        return n.getState() === l.Done || n.getState() === l.Timeout;
                    }),
                    (n.isSuccess = function () {
                        return n.isComplete() && d[n.getStatus()];
                    }),
                    (n.clearResponse = function () {
                        t = "";
                    }),
                    (function () {
                        (A["Content-type"] = k), (d[s.Ok] = !0), (d[s.NotModified] = !0), (d[s.Timeout] = !1);
                        var e = o.String.extractDomainFromUrl(y);
                        e && (h = o.String.extractDomainFromUrl(document.location.href) !== e);
                    })();
            });
    },
    function (e, n, t) {
        var i = t(3),
            a = t(7),
            o = {},
            r = null;
        n.setDataPoint = function (e, n, t, i) {
            var o = { scope: i || a.DataPointScope.ClientEvent },
                r = s(e);
            (r.tracingDataPoints = r.tracingDataPoints || {}),
                (r.tracingDataPoints[n] = {
                    options: o,
                    value: function () {
                        return t;
                    },
                });
        };
        var s = (n.getTracingContextObject = function (e) {
            return e ? (o[e] || (o[e] = {}), o[e]) : (r = r || {});
        });
        (n.getTracingContextObjects = function () {
            var e = [];
            return (
                i.Object.forEach(o, function (n, t) {
                    t && e.push({ viewModel: n, context: t });
                }),
                r && e.push(r),
                e
            );
        }),
            (n.registerTracingObservables = function (e, n, t) {
                var i = s(e);
                (i.tracingObservables = i.tracingObservables || []), i.tracingObservables.push({ options: t, value: n });
            }),
            (n.deleteTracingContextObject = function (e) {
                e ? o[e] && delete o[e] : (r = null);
            }),
            (n.attachViewLoadClientTracingOptions = function (e, n) {
                s(e).viewLoadClientTracingOptions = n;
            });
    },
    function (e, n, t) {
        var i = t(12),
            a = t(1),
            o = t(3),
            r = window,
            s = a.Helper,
            c = o.Array;
        function l(e) {
            var n = e || [],
                t = [],
                a = !1;
            function o(e) {
                if (r.opener) {
                    var t = i.stringify({ messageType: "BrandingLivePreviewConnect", isOpen: e });
                    c.forEach(n, function (e) {
                        r.opener.postMessage(t, e);
                    });
                }
            }
            function l(e) {
                if (
                    ((a = e.origin),
                    c.first(n, function (e) {
                        return e === a;
                    }))
                ) {
                    var a, o;
                    try {
                        o = i.parse(e.data) || {};
                    } catch (r) {
                        return;
                    }
                    "BrandingLivePreviewUpdate" === o.messageType &&
                        c.forEach(t, function (e) {
                            e(o.tenantBranding || {});
                        });
                }
            }
            (this.addListener = function (e) {
                t.push(e), a || (s.addEventListener(r, "message", l), o(!0), (a = !0));
            }),
                (this.removeListener = function (e) {
                    c.removeItem(t, e), a && 0 === t.length && (s.removeEventListener(r, "message", l), o(!1), (a = !1));
                });
        }
        var d = null;
        n.getInstance = function (e) {
            return (d = d || new l(e));
        };
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(3),
            r = t(4),
            s = t(9),
            c = t(368),
            l = window,
            d = o.DateTime,
            u = a.Helper;
        function p(e) {
            var n = this,
                t = null,
                a = e.debugDetails,
                o = e.serverData,
                c = e.isDebugTracingEnabled,
                l = e.useWiderWidth,
                p = o.strServiceExceptionMessage,
                g = o.urlSetDebugMode,
                f = o.sPOST_Username,
                m = o.sSigninName,
                h = o.str,
                v = o.sErrorCode;
            function b() {
                n.sending(!1), n.isDebugTracingEnabled(!n.isDebugTracingEnabled()), n.onSetDebugTracing();
            }
            function S() {
                n.sending(!1), n.debugModeError(h.STR_Error_Details_Debug_Mode_Failure);
            }
            (n.onCloseBanner = r.create()),
                (n.onSetDebugTracing = r.create()),
                (n.debugModeError = i.observable()),
                (n.isDebugTracingEnabled = i.observable(c)),
                (n.sending = i.observable(!1)),
                (n.showBanner = i.observable(!0)),
                (n.showDebugDetailsCopyMessage = i.observable(!1)),
                (n.isFocusActivated = i.observable(!1)),
                (n.unsafe_exceptionMessage = null),
                (n.debugDetails = null),
                (n.useWiderWidth = l),
                (n.hideBanner_onClick = function () {
                    n.onCloseBanner(), n.showBanner(!1);
                }),
                (n.setDebugMode_onClick = function () {
                    if (!n.sending()) {
                        var e = new s();
                        n.sending(!0), n.debugModeError("");
                        var i = { mode: n.isDebugTracingEnabled() ? 0 : 1, user: t };
                        e.Json({ url: g }, i, b, S);
                    }
                }),
                (n.activateFocus = function () {
                    this.isFocusActivated(!0);
                }),
                (t = f || m || ""),
                (n.unsafe_exceptionMessage = u.htmlUnescape(p)),
                (n.debugDetails = a || {}),
                v && (n.debugDetails.errorCode = v),
                n.debugDetails.timestamp || (n.debugDetails.timestamp = d.getUTCString());
        }
        c.applyExtensions(i),
            i.components.register("debug-details-control", {
                viewModel: p,
                template: t(369),
                synchronous: !l.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(l.ServerData.iMaxStackForKnockoutAsyncComponents),
                enableExtensions: !0,
            }),
            (e.exports = p);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(11),
            o = t(1),
            r = t(4),
            s = t(0),
            c = window,
            l = s.AgreementType;
        function d(e) {
            var n,
                t,
                o = this,
                s = e.serverData,
                d = e.showLogo,
                u = e.showLinks,
                p = e.hideFooter,
                g = e.debugDetails,
                f = e.showDebugDetails,
                m = e.hasDarkBackground,
                h = e.useDefaultBackground,
                v = s.str,
                b = s.fIsHosted,
                S = s.fIsChinaDc,
                _ = s.urlFooterTOU || s.urlHostedTOULink,
                y = s.urlFooterPrivacy || s.urlHostedPrivacyLink,
                w = s.urlImpressum,
                C = s.urlGallatinIcp,
                T = s.staticTenantBranding;
            function x(e, n) {
                b && !S ? o.onAgreementClick(e) : c.open(n, "_blank");
            }
            (o.onAgreementClick = r.create()),
                (o.onShowDebugDetails = r.create()),
                (o.showDebugDetails = i.observable(!!f)),
                (o.focusMoreInfo = i.observable(!1).extend({ notify: "always" })),
                (o.showLogo = d && !S),
                (o.showLinks = u),
                (o.hideFooter = p),
                (o.showIcpLicense = S),
                (o.debugDetails = g),
                (o.termsLink = _),
                (o.privacyLink = y),
                (o.impressumLink = w),
                (o.icpLink = C),
                (o.hasDarkBackground = m),
                (o.useDefaultBackground = h),
                (o.showFooter = !0),
                (o.hideTOU = !1),
                (o.termsText = null),
                (o.hidePrivacy = !1),
                (o.privacyText = null),
                (o.privacyLink_onClick = function () {
                    x(l.Privacy, o.privacyLink);
                }),
                (o.termsLink_onClick = function () {
                    x(l.Tou, o.termsLink);
                }),
                (o.impressumLink_onClick = function () {
                    x(l.Impressum, o.impressumLink);
                }),
                (o.moreInfo_onClick = function () {
                    o.setDebugDetailsState(!o.showDebugDetails()), o.onShowDebugDetails(), o.showDebugDetails() || o.focusMoreInfo(!0);
                }),
                (o.setDebugDetailsState = function (e) {
                    o.showDebugDetails(e);
                }),
                (o.focusMoreInfoLink = function () {
                    o.focusMoreInfo(!0);
                }),
                (n = a.loadTenantBranding(T)),
                (t = a.getLayoutTemplateConfig(n)),
                (o.showFooter = t.showFooter),
                (o.hideTOU = t.hideTOU),
                (o.hidePrivacy = t.hidePrivacy),
                (o.termsText = n.FooterTOUText || v.MOBILE_STR_Footer_Terms),
                (o.privacyText = n.FooterPrivacyText || v.MOBILE_STR_Footer_Privacy);
        }
        i.components.register("footer-control", {
            viewModel: d,
            template: t(378),
            synchronous: !c.ServerData.iMaxStackForKnockoutAsyncComponents || o.Helper.isStackSizeGreaterThan(c.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = d);
    },
    function (e, n) {
        (n.PlatformTimeout = 0), (n.Timeout = 6e5), (n.PromiseTimeout = 250), (n.SupportedKeyAlgorithms = [-7, -257]), (n.Error = { Internal: "InternalError", FidoCreateCallUnexpectedResponse: "FidoCreateCallUnexpectedResponse" });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = t(0),
            s = window,
            c = r.DialogId;
        function l(e) {
            var n = this,
                t = e.isPlatformAuthenticatorAvailable;
            (n.onRegisterDialog = o.create()),
                (n.onUnregisterDialog = o.create()),
                (n.onShowDialog = o.create()),
                (n.isPlatformAuthenticatorAvailable = t),
                (n.hasFocus = i.observable(!1)),
                (n.fidoHelp_onClick = function () {
                    n.onShowDialog(c.FidoHelp).then(function () {
                        n.hasFocus(!0);
                    });
                });
        }
        i.components.register("fido-help-button-control", {
            viewModel: l,
            template: t(395),
            synchronous: !s.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(s.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = l);
    },
    function (e, n, t) {
        var i = t(22);
        n.applyExtenders = function (e) {
            (e.extenders.preventExternalWrite = function (n) {
                var t = n(),
                    i = e.observable(t).extend({ notify: "always" });
                return e
                    .pureComputed({
                        read: function () {
                            return i();
                        },
                        write: function (e) {
                            e !== t && i(t);
                        },
                    })
                    .extend({ notify: "always" });
            }),
                (e.extenders.flowTokenUpdate = function (n, t) {
                    return e
                        .pureComputed({
                            read: n,
                            write: function (e) {
                                e && (t && (t.sFTTag && (t.sFTTag = t.sFTTag.replace(t.sFT, e)), (t.sFT = e)), n(e));
                            },
                        })
                        .extend({ notify: "always" });
                }),
                (e.extenders.logValue = function (e, n) {
                    return n && i.registerTracingObservables(n.viewModel, e, n.tracingOptions), e;
                }),
                (e.extenders.loadImageFromUrl = function (n) {
                    return e
                        .pureComputed({
                            read: n,
                            write: function (e) {
                                if (n() !== e)
                                    if (e) {
                                        var t = new Image();
                                        (t.onload = function () {
                                            n(e);
                                        }),
                                            (t.src = e);
                                    } else n(e);
                            },
                        })
                        .extend({ notify: "always" });
                });
        };
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = t(0),
            s = t(15),
            c = t(10),
            l = t(19),
            d = t(14),
            u = t(3),
            p = window,
            g = u.String,
            f = r.PaginatedState,
            m = r.CredentialType,
            h = r.DialogId;
        function v(e) {
            var n = this,
                t = e.serverData,
                a = e.username,
                r = e.availableCreds || [],
                u = e.currentCred || {},
                p = e.flowToken,
                v = e.showForgotUsername,
                b = e.hideCredSwitchLink,
                S = t.str,
                _ = t.urlForgotUsername,
                y = t.sSiteId,
                w = t.sClientId,
                C = t.sForwardedClientId,
                T = t.sNoPaBubbleVersion,
                x = t.fShowSignInOptionsAsButton,
                I = [],
                k = null,
                P = i.observable();
            function D(e) {
                A(e), n.onSetPendingRequest(!1), n.onSwitchView(f.OneTimeCode, !1, k);
            }
            function E(e) {
                var t,
                    i = e.getOtcStatus();
                switch ((A(e), i)) {
                    case d.Status.FTError:
                        t = S.CT_OTC_STR_Error_FlowExpired;
                        break;
                    default:
                        t = k.proof.str.CT_OTCS_STR_Error_SendCodeServer || "";
                }
                n.onSetPendingRequest(!1), n.credLinkError(t);
            }
            function A(e) {
                e && (e.getFlowToken ? ((p = e.getFlowToken()), n.onUpdateFlowToken(p)) : e.FlowToken && ((p = e.FlowToken), n.onUpdateFlowToken(p)));
            }
            (n.onSwitchView = o.create()),
                (n.onRedirect = o.create()),
                (n.onRegisterDialog = o.create()),
                (n.onUnregisterDialog = o.create()),
                (n.onShowDialog = o.create()),
                (n.onSetPendingRequest = o.create()),
                (n.onUpdateFlowToken = o.create()),
                (n.credentialCount = 0),
                (n.selectedCredType = null),
                (n.selectedCredShownOnlyOnPicker = !1),
                (n.switchToCredId = null),
                (n.switchToCredText = null),
                (n.showSwitchToCredPickerLink = !1),
                (n.showForgotUsername = v),
                (n.isUserKnown = !!u.credType),
                (n.displayHelp = !u.credType),
                (n.hideCredSwitchLink = b),
                (n.isPlatformAuthenticatorAvailable = i.observable(!1)),
                (n.credLinkError = i.observable()),
                (n.fidoHelp_onClick = function () {
                    n.onShowDialog(h.FidoHelp);
                }),
                (n.view_onUpdateFlowToken = function (e) {
                    p = e;
                }),
                (n.switchToCredPicker_onClick = function () {
                    n.onSwitchView(f.CredentialPicker);
                }),
                (n.switchToCred_onClick = function () {
                    var e = k.credType || m.Password;
                    switch ((n.credLinkError(""), e)) {
                        case m.OneTimeCode:
                            if (k.proof.clearDigits) n.onSwitchView(f.ProofConfirmation, !1, k);
                            else {
                                var t = (function () {
                                        var e = {
                                            username: g.cleanseUsername(a),
                                            proofData: k.proof.data,
                                            proofType: k.proof.type,
                                            purpose: k.proof.isNopa ? d.Purpose.NoPassword : d.Purpose.OtcLogin,
                                            flowToken: p,
                                            isEncrypted: k.proof.isEncrypted,
                                            siteId: y,
                                            clientId: w,
                                            forwardedClientId: C,
                                            noPaBubbleVersion: T,
                                            successCallback: D,
                                            failureCallback: E,
                                        };
                                        if (e.isEncrypted)
                                            switch (k.proof.type) {
                                                case PROOF.Type.Email:
                                                    e.proofConfirmation = k.proof.display;
                                                    break;
                                                case PROOF.Type.SMS:
                                                case PROOF.Type.Voice:
                                                    e.proofConfirmation = g.cleanseUsername(k.proof.display).slice(-4);
                                            }
                                        return e;
                                    })(),
                                    i = new l(t);
                                n.onSetPendingRequest(!0), i.sendRequest();
                            }
                            break;
                        case m.OtherMicrosoftIdpFederation:
                        case m.LinkedIn:
                        case m.GitHub:
                        case m.Google:
                        case m.Facebook:
                        case m.Certificate:
                            n.onRedirect(k.redirectUrl, k.redirectPostParams || null);
                            break;
                        default:
                            n.onSwitchView(I[e].viewId);
                    }
                }),
                (n.forgotUsername_onClick = function () {
                    document.location.assign(_);
                }),
                (n.getSwitchToCredText = function () {
                    return i.unwrap(n.switchToCredText);
                }),
                (function () {
                    if (
                        ((I[m.Password] = { viewId: f.Password, credId: "idA_PWD_SwitchToPassword", credText: S.CT_RNGC_STR_SwitchToPassword_Link }),
                        (I[m.RemoteNGC] = { viewId: f.RemoteNGC, credId: "idA_PWD_SwitchToRemoteNGC", credText: S.CT_PWD_STR_SwitchToRemoteNGC_Link }),
                        (I[m.Fido] = { viewId: f.Fido, credId: "idA_PWD_SwitchToFido", credText: P }),
                        (I[m.Certificate] = { credId: "idA_PWD_SwitchToCertificate", credText: S.CT_STR_CredentialPicker_Option_Certificate }),
                        (I[m.OtherMicrosoftIdpFederation] = { credId: "useMicrosoftLink", credText: S.CT_PWD_STR_UseMicrosoft_Link }),
                        (I[m.LinkedIn] = { credId: "useLinkedInLink", credText: S.CT_PWD_STR_UseLinkedIn_Link }),
                        (I[m.GitHub] = { credId: "useGitHubLink", credText: S.CT_PWD_STR_UseGitHub_Link }),
                        (I[m.Google] = { credId: "useGoogleLink", credText: S.CT_PWD_STR_UseGoogle_Link }),
                        (I[m.Facebook] = { credId: "useGoogleLink", credText: S.CT_PWD_STR_UseFacebook_Link }),
                        (I[m.Federation] = { viewId: f.IdpRedirect, credId: "redirectToIdpLink", credText: S.CT_RNGC_STR_SwitchToFederated_Link }),
                        (I[m.RemoteLogin] = { viewId: f.RemoteLoginPolling, credId: "remoteLoginLink", credText: S.CT_PWD_STR_RemoteLoginLink }),
                        (I[m.OneTimeCode] = { viewId: f.OneTimeCode, credId: "otcLoginLink", credText: S.CT_PWD_STR_SwitchToOTC_Link }),
                        (I[m.AccessPass] = { viewId: f.AccessPass, credId: "accessPassLink", credText: S.CT_PWD_STR_Login_SwitchToAccessPassLink }),
                        P(S.CT_PWD_STR_SwitchToFidoCrossPlatform_Link),
                        i.utils.arrayForEach(r, function (e) {
                            if (I[e.credType]) {
                                var t = e.credType === u.credType,
                                    i = e.credType === m.OneTimeCode,
                                    a = t && i && e.proof.data === u.proof.data,
                                    o = t && i && e.proof.type === u.proof.type;
                                (!t || (i && !a) || (i && !o)) && (n.credentialCount++, (k = e));
                            }
                            e.credType === m.Fido &&
                                c.throwUnhandledExceptionOnRejection(
                                    s
                                        .isPlatformAuthenticatorAvailable()
                                        .then(null, function () {
                                            return !1;
                                        })
                                        .then(function (e) {
                                            e && (P(S.CT_PWD_STR_SwitchToFido_Link), n.isPlatformAuthenticatorAvailable(!0));
                                        })
                                );
                        }),
                        1 === n.credentialCount &&
                            ((n.selectedCredType = k.credType),
                            (n.selectedCredShownOnlyOnPicker = !!k.shownOnlyOnPicker),
                            (n.switchToCredId = I[n.selectedCredType || m.Password].credId),
                            (n.switchToCredText = I[n.selectedCredType || m.Password].credText),
                            n.selectedCredType === m.OneTimeCode))
                    )
                        switch (k.proof.type) {
                            case PROOF.Type.Email:
                                n.switchToCredText = g.format(S.CT_OTC_STR_SwitchToOtc_EmailLink, k.proof.display);
                                break;
                            case PROOF.Type.SMS:
                                n.switchToCredText = g.format(S.CT_OTC_STR_SwitchToOtc_SmsLink, k.proof.display);
                                break;
                            case PROOF.Type.Voice:
                                n.switchToCredText = g.format(S.CT_OTC_STR_SwitchToOtc_VoiceLink, k.proof.display);
                        }
                    n.showSwitchToCredPickerLink = (!x || n.isUserKnown) && (n.credentialCount > 1 || (1 === n.credentialCount && (v || n.selectedCredShownOnlyOnPicker)));
                })();
        }
        i.components.register("cred-switch-link-control", {
            viewModel: v,
            template: t(394),
            synchronous: !p.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(p.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = v);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(3).String;
        e.exports = function (e, n) {
            var t = this,
                o = null;
            (t.placeholderTextboxMethods = i.observable()),
                (t.value = i.observable(n || "")),
                (t.focused = i.observable(!1).extend({ notify: "always" })),
                (t.error = e),
                (t.textbox_onUpdateFocus = function (e) {
                    t.focused(e);
                }),
                (t.getTrimmedValue = function (e) {
                    var n = a.trim(t.value() || "");
                    return e && e > 0 && (n = n.substring(0, e)), n;
                }),
                t.placeholderTextboxMethods.subscribe(function (e) {
                    e &&
                        !o &&
                        (function (e) {
                            var n = t.value.peek();
                            e.toggleVisibility(!n),
                                (o = t.value.subscribe(function (n) {
                                    e.toggleVisibility(!n);
                                }));
                        })(e);
                });
        };
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = window;
        function s(e) {
            var n = this,
                t = "placeholder" in document.createElement("input"),
                r = e.serverData,
                s = e.hintText,
                c = e.hintCss || "placeholder",
                l = r.fIsHosted;
            (n.onUpdateFocus = o.create()),
                (n.hintText = s),
                (n.usePlaceholderAttribute = !1),
                (n.placeholderVisible = i.observable(!0)),
                (n.hintCss = i.pureComputed(function () {
                    var e = {};
                    return (
                        c &&
                            i.utils.arrayForEach(c.split(" "), function (n) {
                                e[n] = !0;
                            }),
                        e
                    );
                })),
                (n.placeholderText = i.pureComputed(function () {
                    if (n.usePlaceholderAttribute) return n.hintText;
                })),
                (n.toggleVisibility = function (e) {
                    n.placeholderVisible(e);
                }),
                (n.placeholder_onClick = function () {
                    n.onUpdateFocus(!0);
                }),
                t && a.Helper.isPlaceholderAttributeAllowed(l) && (n.usePlaceholderAttribute = !0);
        }
        i.components.register("placeholder-textbox-field", {
            viewModel: s,
            template: t(393),
            synchronous: !r.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(r.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = s);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        function r(e) {
            var n,
                t = this,
                i = e.serverData,
                a = e.title,
                o = !1 !== e.useSubtitle,
                r = i.oAppCobranding;
            (t.title = null), (n = !(!r || !r.friendlyAppName)), (t.isSubtitleVisible = o && n), (t.title = a);
        }
        i.components.register("header-control", { viewModel: r, template: t(397), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) }),
            (e.exports = r);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/picker_account_msa_4e3619a499fd74c0c66d5215514b566a.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/picker_account_msa_2d8f86059be176833897099ee6ddedeb.svg";
    },
    function (e, n, t) {
        var i = t(2);
        n.errorComputed = function (e) {
            var n = i.observable(),
                t = i.observable(),
                a = i.pureComputed(e).extend({ notify: "always" }),
                o = i.pureComputed(function () {
                    if (a()) return a();
                    if (n()) {
                        var e = n();
                        return n(null), e;
                    }
                    return null;
                });
            return i.utils.extend(
                i.pureComputed(function () {
                    if (o()) return o();
                    if (t()) {
                        var e = t();
                        return t(null), e;
                    }
                    return null;
                }),
                {
                    isBlocking: function () {
                        return null !== o();
                    },
                    setBlockingError: function (e) {
                        n(e);
                    },
                    setNonBlockingError: function (e) {
                        t(e);
                    },
                    setError: function (e, i) {
                        i ? n(e) : t(e);
                    },
                    clearNonBlockingError: function () {
                        t(null), t.valueHasMutated();
                    },
                }
            );
        };
    },
    function (e, n) {
        var t = (n.stringToArrayBuffer = function (e) {
                for (var n = new ArrayBuffer(e.length), t = new Uint8Array(n), i = 0, a = e.length; i < a; ++i) t[i] = e.charCodeAt(i);
                return n;
            }),
            i = (n.arrayBufferToString = function (e) {
                return String.fromCharCode.apply(null, new Uint8Array(e));
            });
        (n.base64UrlStringToArrayBuffer = function (e) {
            var n = e.replace(/[-_]/g, function (e) {
                    switch (e) {
                        case "-":
                            return "+";
                        case "_":
                            return "/";
                    }
                }),
                i = atob(n);
            return t(i);
        }),
            (n.arrayBufferToBase64UrlString = function (e) {
                var n = i(e),
                    t = btoa(n);
                return a(t);
            }),
            (n.objectToBase64UrlString = function (e) {
                if (e) {
                    var n = JSON.stringify(e),
                        t = btoa(n);
                    return a(t);
                }
                return null;
            });
        var a = (n.base64ToBase64UrlString = function (e) {
            return e.replace(/[+/=]/g, function (e) {
                switch (e) {
                    case "+":
                        return "-";
                    case "/":
                        return "_";
                    case "=":
                        return "";
                }
            });
        });
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/credentialoptions/cred_option_fido_white_4631a1537323be36c76aa5c13b3c9edd.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/credentialoptions/cred_option_fido_white_2f0ec557a5c4580eedc58f64a1946a00.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/credentialoptions/cred_option_fido_eeb097cefb5f08917c48faff86e945ae.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/credentialoptions/cred_option_fido_498a4d7bb984e5436a52c8b52f3ab0f7.svg";
    },
    function (e, n) {
        var t;
        t = (function () {
            return this;
        })();
        try {
            t = t || new Function("return this")();
        } catch (i) {
            "object" == typeof window && (t = window);
        }
        e.exports = t;
    },
    function (e, n, t) {
        var i = t(9),
            a = t(0),
            o = t(5),
            r = t(7),
            s = {
                DeviceAuth: { PageId: "ConvergedRemoteConnect", ActionId: "OAuth2DeviceAuth", ConfirmationViewId: a.PaginatedState.RemoteConnectCanaryValidation },
                FidoAuth: { PageId: "PaginatedLogin", ActionId: "FidoGet", ConfirmationViewId: a.PaginatedState.PartnerCanaryValidation },
            },
            c = (d.PartnerCanaryScenario = { Undefined: 0, Fido: 1 }),
            l = (d.CanaryValidationSuccessAction = { SwitchView: 1, Redirect: 2 });
        function d(e) {
            var n = e,
                t = n.sExternalCanary,
                u = n.urlCanaryValidation,
                p = !!n.sRemoteConnectAppName,
                g = !!n.fIsRemoteConnectSignup,
                f = n.urlSignUp,
                m = n.oSignUpPostParams,
                h = n.iPartnerCanaryScenario;
            this.validateAsync = function () {
                return new o(function (e, n) {
                    var o = (function () {
                        if (p) return s.DeviceAuth;
                        if (h === c.Fido) return s.FidoAuth;
                        throw "Canary Validation: Flow IDs not known.";
                    })();
                    o.Canary = t;
                    var v = (function () {
                        if (g) return { action: l.Redirect, redirectUrl: f, redirectPostParams: m, isIdpRedirect: !1 };
                        return { action: l.SwitchView };
                    })();
                    new i({ checkApiCanary: !1, withCredentials: !0 }).Json(
                        { url: u, eventId: r.EventIds.Api_CanaryValidation },
                        o,
                        function () {
                            e(v);
                        },
                        function (e) {
                            n(new d.CanaryValidationError(e, o.ConfirmationViewId, v));
                        },
                        a.DefaultRequestTimeout
                    );
                });
            };
        }
        (d.CanaryValidationError = function (e, n, t) {
            (this.name = "CanaryValidationError"),
                (this.message = "Canary validation failed, user confirmation required."),
                (this.stack = new Error().stack),
                (this.innerError = e),
                (this.confirmationViewId = n),
                (this.postConfirmationAction = t);
        }),
            (e.exports = d);
    },
    function (e, n, t) {
        var i = t(12),
            a = t(3),
            o = t(1),
            r = t(9),
            s = t(5),
            c = t(251),
            l = t(252),
            d = window,
            u = o.QueryString,
            p = o.Cookies,
            g = a.Array;
        e.exports = function (e) {
            var n = e,
                t = n.bsso || { enabled: !1 },
                a = n.fIsCloudBuild,
                o = n.fTrimChromeBssoUrl,
                f = !1 !== n.checkApiCanary,
                m = t.cookieNames,
                h = null;
            function v() {
                var e = new Date();
                e.setSeconds(e.getSeconds() + 60), p.writeWithExpiration(m.ssoPulled, "1", !a, e.toUTCString());
                var n = d.location.href;
                return (n = u.appendOrReplace(n, "sso_reload", "true")), t.reloadOnFailure || "select_account" !== u.extract("prompt").toLowerCase() || (n = u.appendOrReplace(n, "prompt", "")), n;
            }
            function b(e) {
                h.traces.push(e);
            }
            function S(e, n) {
                h.data[e] = n;
            }
            function _(e) {
                return (
                    (h.result = e.newSessions ? "UserList" : "Reload"),
                    w().then(function () {
                        return e;
                    })
                );
            }
            function y(e) {
                return (
                    (h.result = "Error"),
                    e instanceof c.Error ? ("OSError" === e.code && e.externalData && e.externalData.error ? (h.error = e.externalData.error) : (h.error = e.code)) : (h.error = e),
                    w().then(function () {
                        return s.reject(e);
                    })
                );
            }
            function w() {
                return new s(function (e) {
                    try {
                        d.console && d.console.info("BSSO Telemetry: " + i.stringify(h));
                    } catch (n) {}
                    t.telemetry.url ? new r({ checkApiCanary: f }).Beacon({ url: t.telemetry.url }, h, e, e, 500) : e();
                });
            }
            (this.loginWindowsUserAsync = function (e) {
                return t.enabled
                    ? (function (e) {
                          if (!d.navigator || "function" != typeof d.navigator.msLaunchUri) return S("BSSO.info", "not-supported"), b("window.navigator.msLaunchUri is not available for _loginWindowsUser"), s.reject("bssoNotSupported");
                          var n = "abort" === t.initiatePullTimeoutAction;
                          return new l({ logMessage: b, logDataPoint: S }, t.initiatePullTimeoutMs, t.overallTimeoutMs, n).loginWindowsUserAsync(e).then(function (e) {
                              return e.reload ? (b("SSO cookie detected. Refreshing page."), v()) : s.reject("error");
                          });
                      })(e).then(_, y)
                    : s.reject("bssoDisabled");
            }),
                (this.pullBrowserSsoCookieAsync = function () {
                    var e,
                        n = t.failureRedirectUrl || t.reloadOnFailure,
                        r = t.type;
                    return t.enabled
                        ? ("windows" === r
                              ? (e = (function () {
                                    if (!d.navigator || "function" != typeof d.navigator.msLaunchUri)
                                        return S("BSSO.info", "not-supported"), b("window.navigator.msLaunchUri is not available for _pullBrowserSsoCookie"), s.reject("bssoNotSupported");
                                    var e = p.getCookie(m.ssoTiles) || t.forceTiles;
                                    if (!e && p.getCookie(m.ssoPulled)) return S("BSSO.info", "throttled"), b("Cookie pull throttled"), s.reject("throttled");
                                    var n =
                                            "tbauth://login.windows.net?context=" +
                                            encodeURIComponent(d.location.href.split("/", 3).join("/")) +
                                            (t.nonce ? "&request_nonce=" + encodeURIComponent(t.nonce) : "") +
                                            (t.rid ? "&rid=" + encodeURIComponent(t.rid) : ""),
                                        a = n;
                                    e && ((a = u.appendOrReplace(a, "user_id", "*")), p.remove(m.ssoTiles));
                                    var o = "abort" === t.initiatePullTimeoutAction;
                                    return new l({ logMessage: b, logDataPoint: S }, t.initiatePullTimeoutMs, t.overallTimeoutMs, o).pullBrowserSsoCookieAsync(a).then(function (e) {
                                        if (e.reload) return b("SSO cookie detected. Refreshing page."), { redirectUrl: v() };
                                        if (e.userList) {
                                            var t = (function (e, n) {
                                                var t = [],
                                                    a = i.parse(e).users;
                                                a && a.length > 0
                                                    ? (g.forEach(a, function (e) {
                                                          var i = { ssoUniqueId: e.unique_id, displayName: e.display_name || "", name: e.upn, isWindowsSso: !0, isSignedIn: !0, url: n };
                                                          t.push(i);
                                                      }),
                                                      b("User list processed. List: " + i.stringify(t)))
                                                    : b("User list is empty.");
                                                return t;
                                            })(e.userList, n);
                                            return t.length > 0 ? { newSessions: t } : s.reject("noUsers");
                                        }
                                    });
                                })())
                              : "chrome" === r &&
                                (e = new c({ logMessage: b, logDataPoint: S }, t.nonce, "login.microsoftonline.com", a, o)
                                    .getCookiesAsync()
                                    .then(function (e) {
                                        if (!e || !e.length) return s.reject(new c.Error("PageException", "Extension returned no cookies"));
                                        for (var n = 0, t = e.length; n < t; ++n) {
                                            var i = e[n].data;
                                            -1 !== i.indexOf(";") && (i = i.substr(0, i.indexOf(";"))), p.write(e[n].name, i, !a);
                                        }
                                        return b("SSO cookie detected. Refreshing page."), { redirectUrl: v() };
                                    })
                                    .then(null, function (e) {
                                        return p.write(m.aadSso, e.toCookieString(), !a), b("Error: " + e.toString()), s.reject(e);
                                    })),
                          e
                              .then(function (e) {
                                  return n && !e.redirectUrl ? s.reject("silentPullFailed") : e;
                              })
                              .then(_, y)
                              .then(null, function (e) {
                                  return n ? (t.reloadOnFailure ? { redirectUrl: v() } : { redirectUrl: t.failureRedirectUrl }) : s.reject(e);
                              }))
                        : s.reject("bssoDisabled");
                }),
                (this.isEnabled = function () {
                    return !!t.enabled;
                }),
                t.enabled &&
                    ((h = { result: null, error: null, type: t.telemetry.type || null, data: {}, traces: [] }),
                    (t.initiatePullTimeoutMs = t.initiatePullTimeoutMs || t.overallTimeoutMs),
                    (t.initiatePullTimeoutAction = t.initiatePullTimeoutAction || "abort"),
                    b("BrowserSSO Initialized"));
        };
    },
    function (e, n, t) {
        var i = t(3),
            a = t(6),
            o = i.Array,
            r = {
                mergeSessions: function (e, n, t) {
                    var i = [];
                    return (
                        o.forEach(n, function (n) {
                            var a = (function (e, n) {
                                for (var t = 0; t < n.length; t++) if (n[t].name === e.name && n[t].idp === e.idp) return t;
                                return -1;
                            })(n, e);
                            -1 === a ? (n.isWindowsSso ? e.unshift(n) : e.push(n), i.push(n)) : n.isWindowsSso ? (e.splice(a, 1), e.unshift(n), i.push(n)) : t && (e.splice(a, 1), e.push(n), i.push(n));
                        }),
                        i
                    );
                },
                parseMeControlSessions: function (e) {
                    return o.map(e, function (e) {
                        var n = e.firstName,
                            t = e.lastName;
                        return (
                            t && (n ? (n += " " + t) : (n = t)),
                            {
                                id: e.sessionId,
                                fullName: n,
                                name: e.memberName || e.signInName,
                                displayName: e.memberName || e.signInName,
                                idp: a.SessionIdp.Msa,
                                isOtherIdp: !0,
                                isSignedIn: e.isSignedIn || 1 === e.authenticatedState || 2 === e.authenticatedState,
                                isWindowsSso: e.isWindowsSso || !1,
                                isMeControlSession: !0,
                                isGitHubFed: e.isGitHubFed || !1,
                            }
                        );
                    });
                },
                parseBssoSessions: function (e) {
                    return o.map(e, function (e) {
                        return { ssoUniqueId: e.ssoUniqueId, name: e.name, displayName: e.displayName, idp: a.SessionIdp.Aad, ssoLink: e.url, isWindowsSso: e.isWindowsSso, isSignedIn: e.isSignedIn };
                    });
                },
            };
        e.exports = r;
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(9),
            r = t(284).Microsoft.ApplicationInsights,
            s = window;
        function c(e) {
            var n,
                t,
                a = this,
                c = e.serverData,
                l = c.iLoginMode,
                d = c.urlReportPageLoad,
                u = c.fCheckApiCanary,
                p = c.sHostBuildNumber,
                g = c.iServerExecutionTime,
                f = c.sRequestCountry || c.country,
                m = c.serverDetails,
                h = c.hpgid,
                v = c.fApplicationInsightsEnabled,
                b = c.iApplicationInsightsEnabledPercentage,
                S = c.urlApplicationInsightsEndpoint,
                _ = c.sApplicationInsightsInstrumentationKey,
                y = c.inlineMode,
                w = c.isCustomPerf,
                C = 0,
                T = !1,
                x = !1;
            function I(e) {
                var n = {};
                if (e.toJSON) return e.toJSON();
                for (var t in e) n[t] = e[t];
                return n;
            }
            (a.clientMode = l),
                (a.srsFailed = s.g_iSRSFailed),
                (a.srsSuccess = s.g_sSRSSuccess),
                (a.timeOnPage = i.observable(null)),
                (a.recordSubmit = function () {
                    s.performance && s.performance.timing && a.timeOnPage(new Date().getTime() - s.performance.timing.loadEventEnd);
                }),
                (a.setPageLoadCompleted = function () {
                    (T = !0),
                        setTimeout(function () {
                            !(function () {
                                if (x || !T) return;
                                if (((x = !0), d)) {
                                    var e = { hostBuildNumber: m ? m.ver.v.join(".") : p, serverExecutionTime: m ? m.et : g, requestCountry: f, plt: 0 },
                                        n = (function () {
                                            var e = s.performance,
                                                n = s.navigator,
                                                t = {};
                                            if (!e) return null;
                                            e.navigation && (t.navigation = I(e.navigation));
                                            e.timing && ((t.timing = I(e.timing)), C > 0 && (t.timing.customLoadEventEnd = C));
                                            e.getEntries && (t.entries = i.utils.arrayMap(e.getEntries(), I));
                                            n.connection && (t.connection = I(n.connection));
                                            return t;
                                        })();
                                    n && (e.performanceData = n), y && (e.inlineMode = y), new o({ checkApiCanary: u }).Json({ url: d }, e);
                                }
                                var t = s.appInsights;
                                if (t) {
                                    var a = {},
                                        r = {};
                                    (r.serverExecutionTime = m ? m.et : g), t.trackPageView(null, null, a, r);
                                }
                            })();
                        }, 0);
                }),
                (a.setCustomPageLoadCompletedTime = function (e) {
                    C = e || new Date().getTime();
                }),
                v &&
                    ((n = { config: { instrumentationKey: _, isCookieUseDisabled: !0, isStorageUseDisabled: !0, disableAjaxTracking: !0, disableExceptionTracking: !0, endpointUrl: S } }),
                    (t = new r.Initialization(n).loadAppInsights()),
                    (s.appInsights = t),
                    t.context.addTelemetryInitializer(function (e) {
                        var n = e.data.baseData;
                        (n.properties = n.properties || {}),
                            (n.properties.hostBuildNumber = m ? m.ver.v.join(".") : p),
                            (n.properties.requestCountry = f),
                            (n.properties.hpgid = h),
                            (n.measurements = n.measurements || {}),
                            (n.measurements.enabledPercentage = b),
                            "string" == typeof n.url && (n.url = n.url.split("?")[0]);
                        for (var t = ["ai.operation.id", "ai.operation.parentid", "ai.operation.rootid", "ai.session.id", "ai.user.accountId", "ai.user.authUserId", "ai.user.id"], i = 0; i < t.length; i++)
                            e.tags[t[i]] && delete e.tags[t[i]];
                    })),
                w ||
                    setTimeout(function () {
                        a.setPageLoadCompleted();
                    }, 100);
        }
        i.components.register("instrumentation-control", {
            viewModel: c,
            template: t(285),
            synchronous: !s.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(s.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = c);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        i.components.register("logo-control", { template: t(286), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(3),
            o = t(1),
            r = t(4),
            s = null,
            c = null,
            l = null,
            d = t(294),
            u = window,
            p = null;
        function g(e, n) {
            var c = this,
                u = !1,
                g = null,
                f = e.serverData,
                m = e.showButtons || !1,
                h = e.showFooterLinks,
                v = !1 !== e.showFooterLogo,
                b = e.useWizardBehavior,
                S = e.hideFromAria || i.observable(!1),
                _ = f.iProductIcon,
                y = f.staticTenantBranding,
                w = f.arrLivePreviewOrigins;
            function C(e, n) {
                var t = ["Microsoft", "OneDrive", "Skype", "Bing", "Xbox", "Word", "Outlook", "Office", "Excel", "PowerPoint", "Cortana", "SkypeDialer", "Health", "MileIQ", "Beam", "MSN", "Minecraft"];
                return (e < 0 || e >= t.length) && (e = 0), a.String.format("./AppCentipede_{0}{1}.{2}", t[e], n ? "_white" : "", u ? "svg" : "png");
            }
            function T(e) {
                var n = s.loadTenantBranding(e),
                    i = s.getLayoutTemplateConfig(n).layoutType === p.VerticalSplit;
                c.isVerticalSplitTemplate(i),
                    i &&
                        !c.isVerticalSplitTemplateLoaded() &&
                        t
                            .e(34)
                            .then(
                                function () {
                                    t(435), c.isVerticalSplitTemplateLoaded(!0);
                                }.bind(null, t)
                            )
                            ["catch"](t.oe);
            }
            (c.useLayoutTemplates = !0),
                (c.templateNodes = {}),
                (c.showButtons = m),
                (c.footer = { showLinks: h, showLogo: v }),
                (c.centipede = {
                    getLightUrl: function () {
                        return d(C(_, !0));
                    },
                    getDarkUrl: function () {
                        return d(C(_, !1));
                    },
                }),
                (c.hideFromAria = S),
                (c.isInternalModeEnabled = "1" === o.QueryString.extract("psi")),
                (c.viewModel = null),
                (c.viewAgreement = i.observable(!1)),
                (c.agreementType = i.observable()),
                (c.isVerticalSplitTemplate = i.observable(!1)),
                (c.isVerticalSplitTemplateLoaded = i.observable(!1)),
                (c.onFooterAgreementClick = r.create()),
                (c.footer_agreementClick = function (e) {
                    c.onFooterAgreementClick(e);
                }),
                (c.agreement_backButtonClick = function () {
                    c.viewAgreement(!1);
                }),
                (c.dispose = function () {
                    g && g.removeListener(T);
                }),
                (c.showAgreement = function (e) {
                    c.agreementType(e), c.viewAgreement(!0);
                }),
                (function () {
                    if (
                        ((u = o.Helper.isSvgImgSupported()),
                        T(y),
                        n &&
                            i.utils.arrayForEach(n, function (e) {
                                e.id && (c.templateNodes[e.id] = e.childNodes);
                            }),
                        b)
                    ) {
                        0;
                    }
                    w && (g = l.getInstance(w)).addListener(T);
                })();
        }
        (s = t(11)),
            (c = t(0)),
            (l = t(23)),
            (p = c.LayoutTemplateType),
            i.components.register("master-page", {
                viewModel: {
                    createViewModel: function (e, n) {
                        return new g(e, n.templateNodes);
                    },
                },
                template: t(363),
                synchronous: !u.ServerData.iMaxStackForKnockoutAsyncComponents || o.Helper.isStackSizeGreaterThan(u.ServerData.iMaxStackForKnockoutAsyncComponents),
                enableExtensions: !0,
            }),
            (e.exports = g);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        function r() {
            var e = this;
            (e.isAppBranding = i.observable(!1)),
                (e.backgroundStyle = i.observable()),
                (e.smallImageUrl = i.observable()),
                (e.backgroundImageUrl = i.observable()),
                (e.useImageMask = i.observable(!1)),
                (e.useTransparentLightBox = i.observable(!1)),
                (e.updateBranding = function (n) {
                    e.isAppBranding(!!n.backgroundLogoUrl),
                        e.backgroundStyle(n.color),
                        e.smallImageUrl(n.smallImageUrl),
                        e.backgroundImageUrl(n.backgroundImageUrl),
                        e.useImageMask(!!n.useImageMask),
                        e.useTransparentLightBox(!!n.useTransparentLightBox);
                });
        }
        i.components.register("background-image-control", {
            viewModel: r,
            template: t(366),
            synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = r);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        i.components.register("page-level-title-control", { template: t(367), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(0),
            o = t(1),
            r = t(379),
            s = t(4),
            c = t(10),
            l = t(13).getInstance(window.ServerData),
            d = t(7),
            u = window,
            p = a.PaginatedState.Previous,
            g = a.AnimationState,
            f = a.AnimationName,
            m = a.AnimationTimeout,
            h = o.Helper;
        function v(e, n, t, a) {
            var o = this,
                u = e.initialViewId || null,
                v = e.currentViewId || null,
                b = e.initialSharedData || {},
                S = e.initialError,
                _ = e.enableCssAnimation,
                y = e.disableAnimationIfAnimationEndUnsupported,
                w = t,
                C = a,
                T = null,
                x = g.End,
                I = !1,
                k = null,
                P = null,
                D = !1,
                E = null,
                A = i.observable();
            function R() {
                var e = o.currentViewIndex();
                return w[e] ? w[e]() : null;
            }
            function L(e) {
                A(null), o.view_onSetIdentityBackButtonState(), (o.isInitialState = T.getState().isInitialState), o.onShowView(C[e].metadata, e), A(e), o.hasInitialViewShown(!0);
            }
            function N(e) {
                var n = A(),
                    t = o.onLoadView(e);
                t
                    ? c.throwUnhandledExceptionOnRejection(
                          t.then(function () {
                              U(n, e);
                          })
                      )
                    : U(n, e);
            }
            function U(e, n) {
                !D || e === n || (S && !e)
                    ? (o.animate(f.None), o.view_onAnimationEnd(), L(n))
                    : (y &&
                          null === k &&
                          (E = setTimeout(function () {
                              (D = !1), o.hidePaginatedView(!1), o.hidePaginatedView.hideSubView(!1), o.onSetLightBoxFadeIn(!1), (x = g.End), N(n);
                          }, m)),
                      (k = e),
                      (P = n),
                      (x = g.Begin),
                      o.view_onAnimationEnd());
            }
            function F(e) {
                var n = R();
                if (n) {
                    e && n.saveSharedData(o.sharedData);
                    var t = n.getState(),
                        i = T.getState();
                    (i.viewState = t), T.replaceState(i);
                }
            }
            function O() {
                (I = !0), F(!1);
            }
            function B() {
                I = !1;
            }
            function M(e) {
                (o.initialError = null), N(e.viewId);
            }
            (o.views = n),
                (o.viewInterfaces = t),
                (o.sharedData = b),
                (o.initialError = S),
                (o.isInitialState = !1),
                (o.isBackButtonVisible = i.observable(!1)),
                (o.isBackButtonFocused = i.observable(!1)),
                (o.backButtonDescribedBy = i.observable(null)),
                (o.hasInitialViewShown = i.observable(!1)),
                (o.hidePaginatedView = i.utils.extend(i.observable(!1), { hideSubView: i.observable(!1) })),
                (o.animate = i.utils.extend(i.observable(f.None), {
                    animateBanner: i.observable(!1),
                    isSlideOutNext: i.pureComputed(function () {
                        return o.animate() === f.SlideOutNext;
                    }),
                    isSlideInNext: i.pureComputed(function () {
                        return o.animate() === f.SlideInNext;
                    }),
                    isSlideOutBack: i.pureComputed(function () {
                        return o.animate() === f.SlideOutBack;
                    }),
                    isSlideInBack: i.pureComputed(function () {
                        return o.animate() === f.SlideInBack;
                    }),
                })),
                (o.showIdentityBanner = i.pureComputed(function () {
                    var e = A();
                    return e && C[e].metadata && C[e].metadata.showIdentityBanner;
                })),
                (o.currentViewIndex = i.pureComputed(function () {
                    var e = A();
                    return C[e] && !isNaN(C[e].index) ? C[e].index : -1;
                })),
                (o.onCancel = s.create()),
                (o.onLoadView = s.create()),
                (o.onShowView = s.create()),
                (o.onSetLightBoxFadeIn = s.create()),
                (o.onAnimationStateChange = s.create()),
                (o.dispose = function () {
                    T.dispose();
                }),
                (o.setDefaultFocus = function () {
                    var e = R();
                    e && e.setDefaultFocus && e.setDefaultFocus();
                }),
                (o.getCurrentViewId = function () {
                    return A();
                }),
                (o.getSharedData = function () {
                    return o.sharedData || {};
                }),
                (o.getSharedDataItem = function (e) {
                    return o.getSharedData()[e];
                }),
                (o.getCurrentView = function () {
                    return { viewId: A(), viewInterface: R() };
                }),
                (o.setSharedDataItem = function (e, n) {
                    o.sharedData || (o.sharedData = {}), (o.sharedData[e] = n);
                }),
                (o.currentViewHasMetadata = function (e) {
                    var n = A();
                    return !!C[n] && !!C[n].metadata[e];
                }),
                (o.submitCurrentView = function () {
                    var e = R();
                    e && e.submit && e.submit();
                }),
                (o.identityBanner_onBackButtonClick = function () {
                    o.view_onSwitchView(p);
                }),
                (o.view_onLoad = function () {
                    var e = T.getState(),
                        n = R();
                    if (n) {
                        n.restoreState(e ? e.viewState : null);
                        var t = o.getCurrentViewId();
                        l.setViewViewModel(n, t, C[t].metadata), l.logViewState(n), o.setDefaultFocus();
                    }
                }),
                (o.view_onSwitchView = function (e, n) {
                    l.logEvent({
                        eventType: "view_onSwitchView",
                        eventId: d.EventIds.Event_PaginationControl_ViewSwitch,
                        eventLevel: d.EventLevel.Critical,
                        eventArgs: { viewId: e, replaceHistory: n },
                        eventOptions: { hidingMode: d.HidingMode.None },
                    }),
                        l.switchView(R());
                    var t = T.getState() || {};
                    (o.initialError = null),
                        e === p ? ((I = !0), t.isInitialState ? o.onCancel() : T.goBack()) : ((I = !1), F(!0), (n |= e === A()) ? ((t.viewId = e), (t.viewState = null), T.replaceState(t)) : ((t = { viewId: e }), T.pushState(t)), N(e));
                }),
                (o.view_onCancel = function () {
                    o.onCancel();
                }),
                (o.view_onSetIdentityBackButtonState = function (e, n, t) {
                    o.isBackButtonVisible(e || !1), o.isBackButtonFocused(n || !1), o.backButtonDescribedBy(t || null);
                }),
                (o.view_onAnimationEnd = function () {
                    switch ((o.onAnimationStateChange(x, I, !!k), x)) {
                        case g.Begin:
                            o.animate(f.None),
                                o.animate.animateBanner(!k || C[k].metadata.showIdentityBanner !== C[P].metadata.showIdentityBanner),
                                (x = g.RenderNewView),
                                k ? o.animate(I ? f.SlideOutBack : f.SlideOutNext) : o.view_onAnimationEnd();
                            break;
                        case g.RenderNewView:
                            L(P), o.animate.animateBanner() ? o.hidePaginatedView(!0) : o.hidePaginatedView.hideSubView(!0), (x = g.AnimateNewView), k ? setTimeout(o.view_onAnimationEnd, 0) : o.onSetLightBoxFadeIn(!0);
                            break;
                        case g.AnimateNewView:
                            E && (clearTimeout(E), (E = null)), (x = g.End), o.hidePaginatedView(!1), o.hidePaginatedView.hideSubView(!1), o.animate(I ? f.SlideInBack : f.SlideInNext);
                    }
                }),
                (function () {
                    (D = _ && h.isCSSAnimationSupported()), (T = new r(O, B, M));
                    var e = null;
                    (null === u && null === v) || ((u = null === u ? v : u), (v = null === v ? u : v), (e = { viewId: u, isInitialState: !0 }), T.replaceState(e)),
                        v !== u && ((e = { viewId: v }), T.pushState(e)),
                        null !== e &&
                            setTimeout(function () {
                                N(e.viewId);
                            }, 0);
                })();
        }
        function b(e) {
            var n = {};
            return (
                i.utils.arrayForEach(["wide", "hideLogo", "hideDefaultLogo", "dynamicBranding", "hideLwaDisclaimer", "showIdentityBanner", "showFedCredButton", "hidePageLevelTitleAndDesc", "extraDebugDetails"], function (t) {
                    var i = e.getAttribute("data-" + t);
                    i && (n[t] = "true" === i.toLowerCase());
                }),
                n
            );
        }
        i.components.register("pagination-control", {
            viewModel: {
                createViewModel: function (e, n) {
                    var t = [],
                        a = [],
                        o = {},
                        r = 0;
                    return (
                        i.utils.arrayForEach(n.templateNodes, function (e) {
                            var n;
                            1 === e.nodeType && null !== (n = e.getAttribute("data-viewid")) && (t.push(e), a.push(i.observable()), (n = isNaN(n) ? n : parseInt(n)), (o[n] = { index: r++, metadata: b(e) }));
                        }),
                        new v(e, t, a, o)
                    );
                },
            },
            template: t(380),
            synchronous: !u.ServerData.iMaxStackForKnockoutAsyncComponents || o.Helper.isStackSizeGreaterThan(u.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        });
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = window;
        function s(e) {
            var n = e.isPlatformAuthenticatorAvailable;
            (this.isPlatformAuthenticatorAvailable = n), (this.onRegisterDialog = o.create()), (this.onUnregisterDialog = o.create());
        }
        i.components.register("fido-help-dialog-content-control", {
            viewModel: s,
            template: t(396),
            synchronous: !r.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(r.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = s);
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = window;
        function s(e, n) {
            var t = this,
                i = e.dialogId,
                a = e.data,
                r = n;
            (t.onRegisterDialog = o.create()),
                (t.onUnregisterDialog = o.create()),
                (t.dispose = function () {
                    t.onUnregisterDialog(i);
                }),
                t.onRegisterDialog(i, { templateNodes: r, data: a });
        }
        i.components.register("dialog-content-control", {
            viewModel: {
                createViewModel: function (e, n) {
                    return new s(e, n.templateNodes);
                },
            },
            template: "\x3c!-- --\x3e",
            synchronous: !r.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(r.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = s);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/documentation_white_f1d76f59f87ee716791873beaa56f42b.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/documentation_white_c8c3f0c876ac28614d1d0c2068289237.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/documentation_9628e22a6bfb1edc59e81064a666b614.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg";
    },
    function (e, n, t) {
        var i = window;
        (t.p = i.ServerData.urlCdn), (i.ServerData.urlImagePath = i.ServerData.urlCdn + "images/");
        var a = t(2),
            o = t(59),
            r = t(0),
            s = t(1),
            c = t(62),
            l = t(6),
            d = t(63),
            u = r.LoginMode,
            p = s.Helper,
            g = s.QueryString,
            f = s.Cookies,
            m = l.LoginOption,
            h = !1;
        function v(e) {
            !(function (e) {
                if (e) {
                    new Image().src = e;
                }
            })(e.urlIPv6Experiment),
                (function (e) {
                    if (e.fUpgradeEVCert && null !== new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) && parseFloat(RegExp.$1) < 6 && p.getIEVersion() >= 7)
                        try {
                            document.getElementById("ev").src = e.urlEVCertUpgrade;
                        } catch (n) {}
                })(e);
        }
        o.applyExtensions(a),
            a.utils.registerEventHandler(i, "load", function () {
                var e = i.ServerData;
                if (
                    ((e.str = c.getStrings("str", e)),
                    (e.html = c.getStrings("html", e)),
                    (e.arrProofData = c.getStrings("proofData")),
                    !h &&
                        !(function (e) {
                            try {
                                if ((top !== self && top.location.replace(self.location.href), 2 === e.iFedState && e.urlFed))
                                    return (
                                        (function (e, n, t, i) {
                                            var a = i.sFedQS;
                                            n === m.NothingChecked && (a = g.appendOrReplace("?" + a, "wctx", "LoginOptions%3D3%26" + g.extract("wctx", "?" + a)).substr(1));
                                            (e = g.appendOrReplace(e, "cbcxt", encodeURIComponent(decodeURIComponent(g.extract("cbcxt"))))),
                                                (e = g.appendOrReplace(e, "vv", encodeURIComponent(decodeURIComponent(g.extract("cbcxt"))))),
                                                (e = g.appendOrReplace(e, "username", encodeURIComponent(t))),
                                                (e = g.appendOrReplace(e, "mkt", encodeURIComponent(decodeURIComponent(g.extract("mkt"))))),
                                                (e = g.appendOrReplace(e, "lc", encodeURIComponent(decodeURIComponent(g.extract("lc"))))),
                                                document.location.replace(g.append(e, a));
                                        })(e.urlFed, e.iDefaultLoginOptions, decodeURIComponent(g.extract("username")), e),
                                        !0
                                    );
                                if (!f.enabled()) return (document.location = e.urlNoCookies), !0;
                            } catch (n) {
                                e.iLoginMode = u.GenericError;
                            }
                            return !1;
                        })(e))
                )
                    switch (((h = !0), e.iLoginMode)) {
                        case u.GenericError:
                        case u.GenericErrorMobile:
                        case u.GenericErrorHost:
                        case u.SwitchUser:
                        case u.SwitchUserMobile:
                        case u.SwitchUserHost:
                        case u.InviteBlocked:
                        case u.ServiceBlocked:
                        case u.IDPFailed:
                        case u.HIP_Lockout:
                        case u.HIP_LockoutMobile:
                        case u.HIP_LockoutHost:
                        case u.BindFailed:
                            t.e(1)
                                .then(
                                    function () {
                                        var n = t(399);
                                        (document.body.appendChild(document.createElement("div")).innerHTML = t(400)), a.applyBindings(new n(e)), v(e);
                                    }.bind(null, t)
                                )
                                ["catch"](t.oe);
                            break;
                        default:
                            (document.body.appendChild(document.createElement("div")).innerHTML = t(271)), a.applyBindings(new d(e)), v(e);
                    }
            });
    },
    function (e, n, t) {
        var i, a, o;
        /*!
         * Knockout JavaScript library v3.5.1
         * (c) The Knockout.js team - http://knockoutjs.com/
         * License: MIT (http://www.opensource.org/licenses/mit-license.php)
         */ !(function (r) {
            var s = this || (0, eval)("this"),
                c = s.document,
                l = s.navigator,
                d = s.jQuery,
                u = s.JSON;
            d || "undefined" == typeof jQuery || (d = jQuery),
                (function (r) {
                    (a = [n, t]), (o = "function" == typeof (i = r) ? i.apply(n, a) : i) === undefined || (e.exports = o);
                })(function (e, n) {
                    function t(e, n) {
                        return (null === e || typeof e in y) && e === n;
                    }
                    function i(e, n) {
                        var t;
                        return function () {
                            t ||
                                (t = _.a.setTimeout(function () {
                                    (t = r), e();
                                }, n));
                        };
                    }
                    function a(e, n) {
                        var t;
                        return function () {
                            clearTimeout(t), (t = _.a.setTimeout(e, n));
                        };
                    }
                    function o(e, n) {
                        n && "change" !== n ? ("beforeChange" === n ? this.pc(e) : this.gb(e, n)) : this.qc(e);
                    }
                    function p(e, n) {
                        null !== n && n.s && n.s();
                    }
                    function g(e, n) {
                        var t = this.qd,
                            i = t[I];
                        i.ra || (this.Qb && this.mb[n] ? (t.uc(n, e, this.mb[n]), (this.mb[n] = null), --this.Qb) : i.I[n] || t.uc(n, e, i.J ? { da: e } : t.$c(e)), e.Ja && e.gd());
                    }
                    var f,
                        m,
                        h,
                        v,
                        b,
                        S,
                        _ = void 0 !== e ? e : {};
                    (_.b = function (e, n) {
                        for (var t = e.split("."), i = _, a = 0; a < t.length - 1; a++) i = i[t[a]];
                        i[t[t.length - 1]] = n;
                    }),
                        (_.L = function (e, n, t) {
                            e[n] = t;
                        }),
                        (_.version = "3.5.1"),
                        _.b("version", _.version),
                        (_.options = { deferUpdates: !1, useOnlyNativeEvents: !1, foreachHidesDestroyed: !1 }),
                        (_.a = (function () {
                            function e(e, n) {
                                for (var t in e) a.call(e, t) && n(t, e[t]);
                            }
                            function n(e, n) {
                                if (n) for (var t in n) a.call(n, t) && (e[t] = n[t]);
                                return e;
                            }
                            function t(e, n) {
                                return (e.__proto__ = n), e;
                            }
                            function i(e, n, t, i) {
                                var a = e[n].match(b) || [];
                                _.a.D(t.match(b), function (e) {
                                    _.a.Na(a, e, i);
                                }),
                                    (e[n] = a.join(" "));
                            }
                            var a = Object.prototype.hasOwnProperty,
                                o = { __proto__: [] } instanceof Array,
                                p = "function" == typeof Symbol,
                                g = {},
                                f = {};
                            (g[l && /Firefox\/2/i.test(l.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]),
                                (g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ")),
                                e(g, function (e, n) {
                                    if (n.length) for (var t = 0, i = n.length; t < i; t++) f[n[t]] = e;
                                });
                            var m,
                                h = { propertychange: !0 },
                                v =
                                    c &&
                                    (function () {
                                        for (var e = 3, n = c.createElement("div"), t = n.getElementsByTagName("i"); (n.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e"), t[0]; );
                                        return 4 < e ? e : r;
                                    })(),
                                b = /\S+/g;
                            return {
                                Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                                D: function (e, n, t) {
                                    for (var i = 0, a = e.length; i < a; i++) n.call(t, e[i], i, e);
                                },
                                A:
                                    "function" == typeof Array.prototype.indexOf
                                        ? function (e, n) {
                                              return Array.prototype.indexOf.call(e, n);
                                          }
                                        : function (e, n) {
                                              for (var t = 0, i = e.length; t < i; t++) if (e[t] === n) return t;
                                              return -1;
                                          },
                                Lb: function (e, n, t) {
                                    for (var i = 0, a = e.length; i < a; i++) if (n.call(t, e[i], i, e)) return e[i];
                                    return r;
                                },
                                Pa: function (e, n) {
                                    var t = _.a.A(e, n);
                                    0 < t ? e.splice(t, 1) : 0 === t && e.shift();
                                },
                                wc: function (e) {
                                    var n = [];
                                    return (
                                        e &&
                                            _.a.D(e, function (e) {
                                                0 > _.a.A(n, e) && n.push(e);
                                            }),
                                        n
                                    );
                                },
                                Mb: function (e, n, t) {
                                    var i = [];
                                    if (e) for (var a = 0, o = e.length; a < o; a++) i.push(n.call(t, e[a], a));
                                    return i;
                                },
                                jb: function (e, n, t) {
                                    var i = [];
                                    if (e) for (var a = 0, o = e.length; a < o; a++) n.call(t, e[a], a) && i.push(e[a]);
                                    return i;
                                },
                                Nb: function (e, n) {
                                    if (n instanceof Array) e.push.apply(e, n);
                                    else for (var t = 0, i = n.length; t < i; t++) e.push(n[t]);
                                    return e;
                                },
                                Na: function (e, n, t) {
                                    var i = _.a.A(_.a.bc(e), n);
                                    0 > i ? t && e.push(n) : t || e.splice(i, 1);
                                },
                                Ba: o,
                                extend: n,
                                setPrototypeOf: t,
                                Ab: o ? t : n,
                                P: e,
                                Ga: function (e, n, t) {
                                    if (!e) return e;
                                    var i,
                                        o = {};
                                    for (i in e) a.call(e, i) && (o[i] = n.call(t, e[i], i, e));
                                    return o;
                                },
                                Tb: function (e) {
                                    for (; e.firstChild; ) _.removeNode(e.firstChild);
                                },
                                Yb: function (e) {
                                    for (var n = (((e = _.a.la(e))[0] && e[0].ownerDocument) || c).createElement("div"), t = 0, i = e.length; t < i; t++) n.appendChild(_.oa(e[t]));
                                    return n;
                                },
                                Ca: function (e, n) {
                                    for (var t = 0, i = e.length, a = []; t < i; t++) {
                                        var o = e[t].cloneNode(!0);
                                        a.push(n ? _.oa(o) : o);
                                    }
                                    return a;
                                },
                                va: function (e, n) {
                                    if ((_.a.Tb(e), n)) for (var t = 0, i = n.length; t < i; t++) e.appendChild(n[t]);
                                },
                                Xc: function (e, n) {
                                    var t = e.nodeType ? [e] : e;
                                    if (0 < t.length) {
                                        for (var i = t[0], a = i.parentNode, o = 0, r = n.length; o < r; o++) a.insertBefore(n[o], i);
                                        for (o = 0, r = t.length; o < r; o++) _.removeNode(t[o]);
                                    }
                                },
                                Ua: function (e, n) {
                                    if (e.length) {
                                        for (n = (8 === n.nodeType && n.parentNode) || n; e.length && e[0].parentNode !== n; ) e.splice(0, 1);
                                        for (; 1 < e.length && e[e.length - 1].parentNode !== n; ) e.length--;
                                        if (1 < e.length) {
                                            var t = e[0],
                                                i = e[e.length - 1];
                                            for (e.length = 0; t !== i; ) e.push(t), (t = t.nextSibling);
                                            e.push(i);
                                        }
                                    }
                                    return e;
                                },
                                Zc: function (e, n) {
                                    7 > v ? e.setAttribute("selected", n) : (e.selected = n);
                                },
                                Db: function (e) {
                                    return null === e || e === r ? "" : e.trim ? e.trim() : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                                },
                                Ud: function (e, n) {
                                    return (e = e || ""), !(n.length > e.length) && e.substring(0, n.length) === n;
                                },
                                vd: function (e, n) {
                                    if (e === n) return !0;
                                    if (11 === e.nodeType) return !1;
                                    if (n.contains) return n.contains(1 !== e.nodeType ? e.parentNode : e);
                                    if (n.compareDocumentPosition) return 16 == (16 & n.compareDocumentPosition(e));
                                    for (; e && e != n; ) e = e.parentNode;
                                    return !!e;
                                },
                                Sb: function (e) {
                                    return _.a.vd(e, e.ownerDocument.documentElement);
                                },
                                kd: function (e) {
                                    return !!_.a.Lb(e, _.a.Sb);
                                },
                                R: function (e) {
                                    return e && e.tagName && e.tagName.toLowerCase();
                                },
                                Ac: function (e) {
                                    return _.onError
                                        ? function () {
                                              try {
                                                  return e.apply(this, arguments);
                                              } catch (n) {
                                                  throw (_.onError && _.onError(n), n);
                                              }
                                          }
                                        : e;
                                },
                                setTimeout: function (e, n) {
                                    return setTimeout(_.a.Ac(e), n);
                                },
                                Gc: function (e) {
                                    setTimeout(function () {
                                        throw (_.onError && _.onError(e), e);
                                    }, 0);
                                },
                                B: function (e, n, t) {
                                    var i = _.a.Ac(t);
                                    if (((t = h[n]), _.options.useOnlyNativeEvents || t || !d))
                                        if (t || "function" != typeof e.addEventListener) {
                                            if ("undefined" == typeof e.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                            var a = function (n) {
                                                    i.call(e, n);
                                                },
                                                o = "on" + n;
                                            e.attachEvent(o, a),
                                                _.a.K.za(e, function () {
                                                    e.detachEvent(o, a);
                                                });
                                        } else e.addEventListener(n, i, !1);
                                    else m || (m = "function" == typeof d(e).on ? "on" : "bind"), d(e)[m](n, i);
                                },
                                Fb: function (e, n) {
                                    if (!e || !e.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                    var t;
                                    if (((t = !("input" !== _.a.R(e) || !e.type || "click" != n.toLowerCase()) && ("checkbox" == (t = e.type) || "radio" == t)), _.options.useOnlyNativeEvents || !d || t))
                                        if ("function" == typeof c.createEvent) {
                                            if ("function" != typeof e.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                            (t = c.createEvent(f[n] || "HTMLEvents")).initEvent(n, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(t);
                                        } else if (t && e.click) e.click();
                                        else {
                                            if ("undefined" == typeof e.fireEvent) throw Error("Browser doesn't support triggering events");
                                            e.fireEvent("on" + n);
                                        }
                                    else d(e).trigger(n);
                                },
                                f: function (e) {
                                    return _.O(e) ? e() : e;
                                },
                                bc: function (e) {
                                    return _.O(e) ? e.v() : e;
                                },
                                Eb: function (e, n, t) {
                                    var a;
                                    n &&
                                        ("object" == typeof e.classList
                                            ? ((a = e.classList[t ? "add" : "remove"]),
                                              _.a.D(n.match(b), function (n) {
                                                  a.call(e.classList, n);
                                              }))
                                            : "string" == typeof e.className.baseVal
                                            ? i(e.className, "baseVal", n, t)
                                            : i(e, "className", n, t));
                                },
                                Bb: function (e, n) {
                                    var t = _.a.f(n);
                                    (null !== t && t !== r) || (t = "");
                                    var i = _.h.firstChild(e);
                                    !i || 3 != i.nodeType || _.h.nextSibling(i) ? _.h.va(e, [e.ownerDocument.createTextNode(t)]) : (i.data = t), _.a.Ad(e);
                                },
                                Yc: function (e, n) {
                                    if (((e.name = n), 7 >= v))
                                        try {
                                            var i = e.name.replace(/[&<>'"]/g, function (e) {
                                                return "&#" + e.charCodeAt(0) + ";";
                                            });
                                            e.mergeAttributes(c.createElement("<input name='" + i + "'/>"), !1);
                                        } catch (t) {}
                                },
                                Ad: function (e) {
                                    9 <= v && (e = 1 == e.nodeType ? e : e.parentNode).style && (e.style.zoom = e.style.zoom);
                                },
                                wd: function (e) {
                                    if (v) {
                                        var n = e.style.width;
                                        (e.style.width = 0), (e.style.width = n);
                                    }
                                },
                                Pd: function (e, n) {
                                    (e = _.a.f(e)), (n = _.a.f(n));
                                    for (var t = [], i = e; i <= n; i++) t.push(i);
                                    return t;
                                },
                                la: function (e) {
                                    for (var n = [], t = 0, i = e.length; t < i; t++) n.push(e[t]);
                                    return n;
                                },
                                Da: function (e) {
                                    return p ? Symbol(e) : e;
                                },
                                Zd: 6 === v,
                                $d: 7 === v,
                                W: v,
                                Lc: function (e, n) {
                                    for (
                                        var t = _.a.la(e.getElementsByTagName("input")).concat(_.a.la(e.getElementsByTagName("textarea"))),
                                            i =
                                                "string" == typeof n
                                                    ? function (e) {
                                                          return e.name === n;
                                                      }
                                                    : function (e) {
                                                          return n.test(e.name);
                                                      },
                                            a = [],
                                            o = t.length - 1;
                                        0 <= o;
                                        o--
                                    )
                                        i(t[o]) && a.push(t[o]);
                                    return a;
                                },
                                Nd: function (e) {
                                    return "string" == typeof e && (e = _.a.Db(e)) ? (u && u.parse ? u.parse(e) : new Function("return " + e)()) : null;
                                },
                                hc: function (e, n, t) {
                                    if (!u || !u.stringify)
                                        throw Error(
                                            "Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"
                                        );
                                    return u.stringify(_.a.f(e), n, t);
                                },
                                Od: function (n, t, i) {
                                    var a = (i = i || {}).params || {},
                                        o = i.includeFields || this.Jc,
                                        r = n;
                                    if ("object" == typeof n && "form" === _.a.R(n)) {
                                        r = n.action;
                                        for (var s = o.length - 1; 0 <= s; s--) for (var l = _.a.Lc(n, o[s]), d = l.length - 1; 0 <= d; d--) a[l[d].name] = l[d].value;
                                    }
                                    t = _.a.f(t);
                                    var u = c.createElement("form");
                                    for (var p in ((u.style.display = "none"), (u.action = r), (u.method = "post"), t)) ((n = c.createElement("input")).type = "hidden"), (n.name = p), (n.value = _.a.hc(_.a.f(t[p]))), u.appendChild(n);
                                    e(a, function (e, n) {
                                        var t = c.createElement("input");
                                        (t.type = "hidden"), (t.name = e), (t.value = n), u.appendChild(t);
                                    }),
                                        c.body.appendChild(u),
                                        i.submitter ? i.submitter(u) : u.submit(),
                                        setTimeout(function () {
                                            u.parentNode.removeChild(u);
                                        }, 0);
                                },
                            };
                        })()),
                        _.b("utils", _.a),
                        _.b("utils.arrayForEach", _.a.D),
                        _.b("utils.arrayFirst", _.a.Lb),
                        _.b("utils.arrayFilter", _.a.jb),
                        _.b("utils.arrayGetDistinctValues", _.a.wc),
                        _.b("utils.arrayIndexOf", _.a.A),
                        _.b("utils.arrayMap", _.a.Mb),
                        _.b("utils.arrayPushAll", _.a.Nb),
                        _.b("utils.arrayRemoveItem", _.a.Pa),
                        _.b("utils.cloneNodes", _.a.Ca),
                        _.b("utils.createSymbolOrString", _.a.Da),
                        _.b("utils.extend", _.a.extend),
                        _.b("utils.fieldsIncludedWithJsonPost", _.a.Jc),
                        _.b("utils.getFormFields", _.a.Lc),
                        _.b("utils.objectMap", _.a.Ga),
                        _.b("utils.peekObservable", _.a.bc),
                        _.b("utils.postJson", _.a.Od),
                        _.b("utils.parseJson", _.a.Nd),
                        _.b("utils.registerEventHandler", _.a.B),
                        _.b("utils.stringifyJson", _.a.hc),
                        _.b("utils.range", _.a.Pd),
                        _.b("utils.toggleDomNodeCssClass", _.a.Eb),
                        _.b("utils.triggerEvent", _.a.Fb),
                        _.b("utils.unwrapObservable", _.a.f),
                        _.b("utils.objectForEach", _.a.P),
                        _.b("utils.addOrRemoveItem", _.a.Na),
                        _.b("utils.setTextContent", _.a.Bb),
                        _.b("unwrap", _.a.f),
                        Function.prototype.bind ||
                            (Function.prototype.bind = function (e) {
                                var n = this;
                                if (1 === arguments.length)
                                    return function () {
                                        return n.apply(e, arguments);
                                    };
                                var t = Array.prototype.slice.call(arguments, 1);
                                return function () {
                                    var i = t.slice(0);
                                    return i.push.apply(i, arguments), n.apply(e, i);
                                };
                            }),
                        (_.a.g = new (function () {
                            var e,
                                n,
                                t = 0,
                                i = "__ko__" + new Date().getTime(),
                                a = {};
                            return (
                                _.a.W
                                    ? ((e = function (e, n) {
                                          var o = e[i];
                                          if (!o || "null" === o || !a[o]) {
                                              if (!n) return r;
                                              (o = e[i] = "ko" + t++), (a[o] = {});
                                          }
                                          return a[o];
                                      }),
                                      (n = function (e) {
                                          var n = e[i];
                                          return !!n && (delete a[n], (e[i] = null), !0);
                                      }))
                                    : ((e = function (e, n) {
                                          var t = e[i];
                                          return !t && n && (t = e[i] = {}), t;
                                      }),
                                      (n = function (e) {
                                          return !!e[i] && (delete e[i], !0);
                                      })),
                                {
                                    get: function (n, t) {
                                        var i = e(n, !1);
                                        return i && i[t];
                                    },
                                    set: function (n, t, i) {
                                        (n = e(n, i !== r)) && (n[t] = i);
                                    },
                                    Ub: function (n, t, i) {
                                        return (n = e(n, !0))[t] || (n[t] = i);
                                    },
                                    clear: n,
                                    Z: function () {
                                        return t++ + i;
                                    },
                                }
                            );
                        })()),
                        _.b("utils.domData", _.a.g),
                        _.b("utils.domData.clear", _.a.g.clear),
                        (_.a.K = new (function () {
                            function e(e, n) {
                                var t = _.a.g.get(e, i);
                                return t === r && n && ((t = []), _.a.g.set(e, i, t)), t;
                            }
                            function n(n) {
                                if ((i = e(n, !1))) for (var i = i.slice(0), a = 0; a < i.length; a++) i[a](n);
                                _.a.g.clear(n), _.a.K.cleanExternalData(n), o[n.nodeType] && t(n.childNodes, !0);
                            }
                            function t(e, t) {
                                for (var i, a = [], o = 0; o < e.length; o++) if ((!t || 8 === e[o].nodeType) && (n((a[a.length] = i = e[o])), e[o] !== i)) for (; o-- && -1 == _.a.A(a, e[o]); );
                            }
                            var i = _.a.g.Z(),
                                a = { 1: !0, 8: !0, 9: !0 },
                                o = { 1: !0, 9: !0 };
                            return {
                                za: function (n, t) {
                                    if ("function" != typeof t) throw Error("Callback must be a function");
                                    e(n, !0).push(t);
                                },
                                yb: function (n, t) {
                                    var a = e(n, !1);
                                    a && (_.a.Pa(a, t), 0 == a.length && _.a.g.set(n, i, r));
                                },
                                oa: function (e) {
                                    return (
                                        _.u.G(function () {
                                            a[e.nodeType] && (n(e), o[e.nodeType] && t(e.getElementsByTagName("*")));
                                        }),
                                        e
                                    );
                                },
                                removeNode: function (e) {
                                    _.oa(e), e.parentNode && e.parentNode.removeChild(e);
                                },
                                cleanExternalData: function (e) {
                                    d && "function" == typeof d.cleanData && d.cleanData([e]);
                                },
                            };
                        })()),
                        (_.oa = _.a.K.oa),
                        (_.removeNode = _.a.K.removeNode),
                        _.b("cleanNode", _.oa),
                        _.b("removeNode", _.removeNode),
                        _.b("utils.domNodeDisposal", _.a.K),
                        _.b("utils.domNodeDisposal.addDisposeCallback", _.a.K.za),
                        _.b("utils.domNodeDisposal.removeDisposeCallback", _.a.K.yb),
                        (f = [0, "", ""]),
                        (b = {
                            thead: (m = [1, "<table>", "</table>"]),
                            tbody: m,
                            tfoot: m,
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: (h = [3, "<table><tbody><tr>", "</tr></tbody></table>"]),
                            th: h,
                            option: (v = [1, "<select multiple='multiple'>", "</select>"]),
                            optgroup: v,
                        }),
                        (S = 8 >= _.a.W),
                        (_.a.ua = function (e, n) {
                            var t;
                            if (d) {
                                if (d.parseHTML) t = d.parseHTML(e, n) || [];
                                else if ((t = d.clean([e], n)) && t[0]) {
                                    for (var i = t[0]; i.parentNode && 11 !== i.parentNode.nodeType; ) i = i.parentNode;
                                    i.parentNode && i.parentNode.removeChild(i);
                                }
                            } else {
                                (t = n) || (t = c), (i = t.parentWindow || t.defaultView || s);
                                var a,
                                    o = _.a.Db(e).toLowerCase(),
                                    r = t.createElement("div");
                                for (
                                    a = ((o = o.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && b[o[1]]) || f,
                                        o = a[0],
                                        a = "ignored<div>" + a[1] + e + a[2] + "</div>",
                                        "function" == typeof i.innerShiv ? r.appendChild(i.innerShiv(a)) : (S && t.body.appendChild(r), (r.innerHTML = a), S && r.parentNode.removeChild(r));
                                    o--;

                                )
                                    r = r.lastChild;
                                t = _.a.la(r.lastChild.childNodes);
                            }
                            return t;
                        }),
                        (_.a.Md = function (e, n) {
                            var t = _.a.ua(e, n);
                            return (t.length && t[0].parentElement) || _.a.Yb(t);
                        }),
                        (_.a.fc = function (e, n) {
                            if ((_.a.Tb(e), null !== (n = _.a.f(n)) && n !== r))
                                if (("string" != typeof n && (n = n.toString()), d)) d(e).html(n);
                                else for (var t = _.a.ua(n, e.ownerDocument), i = 0; i < t.length; i++) e.appendChild(t[i]);
                        }),
                        _.b("utils.parseHtmlFragment", _.a.ua),
                        _.b("utils.setHtml", _.a.fc),
                        (_.aa = (function () {
                            var e = {};
                            return {
                                Xb: function (n) {
                                    if ("function" != typeof n) throw Error("You can only pass a function to ko.memoization.memoize()");
                                    var t = ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1) + ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1);
                                    return (e[t] = n), "\x3c!--[ko_memo:" + t + "]--\x3e";
                                },
                                bd: function (n, t) {
                                    var i = e[n];
                                    if (i === r) throw Error("Couldn't find any memo with ID " + n + ". Perhaps it's already been unmemoized.");
                                    try {
                                        return i.apply(null, t || []), !0;
                                    } finally {
                                        delete e[n];
                                    }
                                },
                                cd: function (e, n) {
                                    var t = [];
                                    !(function s(e, n) {
                                        if (e)
                                            if (8 == e.nodeType) null != (t = _.aa.Uc(e.nodeValue)) && n.push({ ud: e, Kd: t });
                                            else if (1 == e.nodeType) for (var t = 0, i = e.childNodes, a = i.length; t < a; t++) s(i[t], n);
                                    })(e, t);
                                    for (var i = 0, a = t.length; i < a; i++) {
                                        var o = t[i].ud,
                                            r = [o];
                                        n && _.a.Nb(r, n), _.aa.bd(t[i].Kd, r), (o.nodeValue = ""), o.parentNode && o.parentNode.removeChild(o);
                                    }
                                },
                                Uc: function (e) {
                                    return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null;
                                },
                            };
                        })()),
                        _.b("memoization", _.aa),
                        _.b("memoization.memoize", _.aa.Xb),
                        _.b("memoization.unmemoize", _.aa.bd),
                        _.b("memoization.parseMemoText", _.aa.Uc),
                        _.b("memoization.unmemoizeDomNodeAndDescendants", _.aa.cd),
                        (_.na = (function () {
                            function e() {
                                if (i)
                                    for (var e, n = i, a = 0; o < i; )
                                        if ((e = t[o++])) {
                                            if (o > n) {
                                                if (5e3 <= ++a) {
                                                    (o = i), _.a.Gc(Error("'Too much recursion' after processing " + a + " task groups."));
                                                    break;
                                                }
                                                n = i;
                                            }
                                            try {
                                                e();
                                            } catch (r) {
                                                _.a.Gc(r);
                                            }
                                        }
                            }
                            function n() {
                                e(), (o = i = t.length = 0);
                            }
                            var t = [],
                                i = 0,
                                a = 1,
                                o = 0;
                            return {
                                scheduler: s.MutationObserver
                                    ? (function (e) {
                                          var n = c.createElement("div");
                                          return (
                                              new MutationObserver(e).observe(n, { attributes: !0 }),
                                              function () {
                                                  n.classList.toggle("foo");
                                              }
                                          );
                                      })(n)
                                    : c && "onreadystatechange" in c.createElement("script")
                                    ? function (e) {
                                          var n = c.createElement("script");
                                          (n.onreadystatechange = function () {
                                              (n.onreadystatechange = null), c.documentElement.removeChild(n), (n = null), e();
                                          }),
                                              c.documentElement.appendChild(n);
                                      }
                                    : function (e) {
                                          setTimeout(e, 0);
                                      },
                                zb: function (e) {
                                    return i || _.na.scheduler(n), (t[i++] = e), a++;
                                },
                                cancel: function (e) {
                                    (e -= a - i) >= o && e < i && (t[e] = null);
                                },
                                resetForTesting: function () {
                                    var e = i - o;
                                    return (o = i = t.length = 0), e;
                                },
                                Sd: e,
                            };
                        })()),
                        _.b("tasks", _.na),
                        _.b("tasks.schedule", _.na.zb),
                        _.b("tasks.runEarly", _.na.Sd),
                        (_.Ta = {
                            throttle: function (e, n) {
                                e.throttleEvaluation = n;
                                var t = null;
                                return _.$({
                                    read: e,
                                    write: function (i) {
                                        clearTimeout(t),
                                            (t = _.a.setTimeout(function () {
                                                e(i);
                                            }, n));
                                    },
                                });
                            },
                            rateLimit: function (e, n) {
                                var t, o, r;
                                "number" == typeof n ? (t = n) : ((t = n.timeout), (o = n.method)),
                                    (e.Hb = !1),
                                    (r = "function" == typeof o ? o : "notifyWhenChangesStop" == o ? a : i),
                                    e.ub(function (e) {
                                        return r(e, t, n);
                                    });
                            },
                            deferred: function (e, n) {
                                if (!0 !== n) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                                e.Hb ||
                                    ((e.Hb = !0),
                                    e.ub(function (n) {
                                        var t,
                                            i = !1;
                                        return function () {
                                            if (!i) {
                                                _.na.cancel(t), (t = _.na.zb(n));
                                                try {
                                                    (i = !0), e.notifySubscribers(r, "dirty");
                                                } finally {
                                                    i = !1;
                                                }
                                            }
                                        };
                                    }));
                            },
                            notify: function (e, n) {
                                e.equalityComparer = "always" == n ? null : t;
                            },
                        });
                    var y = { undefined: 1, boolean: 1, number: 1, string: 1 };
                    _.b("extenders", _.Ta),
                        (_.ic = function (e, n, t) {
                            (this.da = e), (this.lc = n), (this.mc = t), (this.Ib = !1), (this.fb = this.Jb = null), _.L(this, "dispose", this.s), _.L(this, "disposeWhenNodeIsRemoved", this.l);
                        }),
                        (_.ic.prototype.s = function () {
                            this.Ib || (this.fb && _.a.K.yb(this.Jb, this.fb), (this.Ib = !0), this.mc(), (this.da = this.lc = this.mc = this.Jb = this.fb = null));
                        }),
                        (_.ic.prototype.l = function (e) {
                            (this.Jb = e), _.a.K.za(e, (this.fb = this.s.bind(this)));
                        }),
                        (_.T = function () {
                            _.a.Ab(this, w), w.qb(this);
                        });
                    var w = {
                        qb: function (e) {
                            (e.U = { change: [] }), (e.sc = 1);
                        },
                        subscribe: function (e, n, t) {
                            var i = this;
                            t = t || "change";
                            var a = new _.ic(i, n ? e.bind(n) : e, function () {
                                _.a.Pa(i.U[t], a), i.hb && i.hb(t);
                            });
                            return i.Qa && i.Qa(t), i.U[t] || (i.U[t] = []), i.U[t].push(a), a;
                        },
                        notifySubscribers: function (e, n) {
                            if (("change" === (n = n || "change") && this.Gb(), this.Wa(n))) {
                                var t = ("change" === n && this.ed) || this.U[n].slice(0);
                                try {
                                    _.u.xc();
                                    for (var i, a = 0; (i = t[a]); ++a) i.Ib || i.lc(e);
                                } finally {
                                    _.u.end();
                                }
                            }
                        },
                        ob: function () {
                            return this.sc;
                        },
                        Dd: function (e) {
                            return this.ob() !== e;
                        },
                        Gb: function () {
                            ++this.sc;
                        },
                        ub: function (e) {
                            var n,
                                t,
                                i,
                                a,
                                r,
                                s = this,
                                c = _.O(s);
                            s.gb || ((s.gb = s.notifySubscribers), (s.notifySubscribers = o));
                            var l = e(function () {
                                (s.Ja = !1), c && a === s && (a = s.nc ? s.nc() : s());
                                var e = t || (r && s.sb(i, a));
                                (r = t = n = !1), e && s.gb((i = a));
                            });
                            (s.qc = function (e, t) {
                                (t && s.Ja) || (r = !t), (s.ed = s.U.change.slice(0)), (s.Ja = n = !0), (a = e), l();
                            }),
                                (s.pc = function (e) {
                                    n || ((i = e), s.gb(e, "beforeChange"));
                                }),
                                (s.rc = function () {
                                    r = !0;
                                }),
                                (s.gd = function () {
                                    s.sb(i, s.v(!0)) && (t = !0);
                                });
                        },
                        Wa: function (e) {
                            return this.U[e] && this.U[e].length;
                        },
                        Bd: function (e) {
                            if (e) return (this.U[e] && this.U[e].length) || 0;
                            var n = 0;
                            return (
                                _.a.P(this.U, function (e, t) {
                                    "dirty" !== e && (n += t.length);
                                }),
                                n
                            );
                        },
                        sb: function (e, n) {
                            return !this.equalityComparer || !this.equalityComparer(e, n);
                        },
                        toString: function () {
                            return "[object Object]";
                        },
                        extend: function (e) {
                            var n = this;
                            return (
                                e &&
                                    _.a.P(e, function (e, t) {
                                        var i = _.Ta[e];
                                        "function" == typeof i && (n = i(n, t) || n);
                                    }),
                                n
                            );
                        },
                    };
                    _.L(w, "init", w.qb),
                        _.L(w, "subscribe", w.subscribe),
                        _.L(w, "extend", w.extend),
                        _.L(w, "getSubscriptionsCount", w.Bd),
                        _.a.Ba && _.a.setPrototypeOf(w, Function.prototype),
                        (_.T.fn = w),
                        (_.Qc = function (e) {
                            return null != e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers;
                        }),
                        _.b("subscribable", _.T),
                        _.b("isSubscribable", _.Qc),
                        (_.S = _.u = (function () {
                            function e(e) {
                                i.push(t), (t = e);
                            }
                            function n() {
                                t = i.pop();
                            }
                            var t,
                                i = [],
                                a = 0;
                            return {
                                xc: e,
                                end: n,
                                cc: function (e) {
                                    if (t) {
                                        if (!_.Qc(e)) throw Error("Only subscribable things can act as dependencies");
                                        t.od.call(t.pd, e, e.fd || (e.fd = ++a));
                                    }
                                },
                                G: function (t, i, a) {
                                    try {
                                        return e(), t.apply(i, a || []);
                                    } finally {
                                        n();
                                    }
                                },
                                qa: function () {
                                    if (t) return t.o.qa();
                                },
                                Va: function () {
                                    if (t) return t.o.Va();
                                },
                                Ya: function () {
                                    if (t) return t.Ya;
                                },
                                o: function () {
                                    if (t) return t.o;
                                },
                            };
                        })()),
                        _.b("computedContext", _.S),
                        _.b("computedContext.getDependenciesCount", _.S.qa),
                        _.b("computedContext.getDependencies", _.S.Va),
                        _.b("computedContext.isInitial", _.S.Ya),
                        _.b("computedContext.registerDependency", _.S.cc),
                        _.b("ignoreDependencies", (_.Yd = _.u.G));
                    var C = _.a.Da("_latestValue");
                    _.ta = function (e) {
                        function n() {
                            return 0 < arguments.length ? (n.sb(n[C], arguments[0]) && (n.ya(), (n[C] = arguments[0]), n.xa()), this) : (_.u.cc(n), n[C]);
                        }
                        return (n[C] = e), _.a.Ba || _.a.extend(n, _.T.fn), _.T.fn.qb(n), _.a.Ab(n, T), _.options.deferUpdates && _.Ta.deferred(n, !0), n;
                    };
                    var T = {
                        equalityComparer: t,
                        v: function () {
                            return this[C];
                        },
                        xa: function () {
                            this.notifySubscribers(this[C], "spectate"), this.notifySubscribers(this[C]);
                        },
                        ya: function () {
                            this.notifySubscribers(this[C], "beforeChange");
                        },
                    };
                    _.a.Ba && _.a.setPrototypeOf(T, _.T.fn);
                    var x = (_.ta.Ma = "__ko_proto__");
                    (T[x] = _.ta),
                        (_.O = function (e) {
                            if ((e = "function" == typeof e && e[x]) && e !== T[x] && e !== _.o.fn[x]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                            return !!e;
                        }),
                        (_.Za = function (e) {
                            return "function" == typeof e && (e[x] === T[x] || (e[x] === _.o.fn[x] && e.Nc));
                        }),
                        _.b("observable", _.ta),
                        _.b("isObservable", _.O),
                        _.b("isWriteableObservable", _.Za),
                        _.b("isWritableObservable", _.Za),
                        _.b("observable.fn", T),
                        _.L(T, "peek", T.v),
                        _.L(T, "valueHasMutated", T.xa),
                        _.L(T, "valueWillMutate", T.ya),
                        (_.Ha = function (e) {
                            if ("object" != typeof (e = e || []) || !("length" in e)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                            return (e = _.ta(e)), _.a.Ab(e, _.Ha.fn), e.extend({ trackArrayChanges: !0 });
                        }),
                        (_.Ha.fn = {
                            remove: function (e) {
                                for (
                                    var n = this.v(),
                                        t = [],
                                        i =
                                            "function" != typeof e || _.O(e)
                                                ? function (n) {
                                                      return n === e;
                                                  }
                                                : e,
                                        a = 0;
                                    a < n.length;
                                    a++
                                ) {
                                    var o = n[a];
                                    if (i(o)) {
                                        if ((0 === t.length && this.ya(), n[a] !== o)) throw Error("Array modified during remove; cannot remove item");
                                        t.push(o), n.splice(a, 1), a--;
                                    }
                                }
                                return t.length && this.xa(), t;
                            },
                            removeAll: function (e) {
                                if (e === r) {
                                    var n = this.v(),
                                        t = n.slice(0);
                                    return this.ya(), n.splice(0, n.length), this.xa(), t;
                                }
                                return e
                                    ? this.remove(function (n) {
                                          return 0 <= _.a.A(e, n);
                                      })
                                    : [];
                            },
                            destroy: function (e) {
                                var n = this.v(),
                                    t =
                                        "function" != typeof e || _.O(e)
                                            ? function (n) {
                                                  return n === e;
                                              }
                                            : e;
                                this.ya();
                                for (var i = n.length - 1; 0 <= i; i--) {
                                    var a = n[i];
                                    t(a) && (a._destroy = !0);
                                }
                                this.xa();
                            },
                            destroyAll: function (e) {
                                return e === r
                                    ? this.destroy(function () {
                                          return !0;
                                      })
                                    : e
                                    ? this.destroy(function (n) {
                                          return 0 <= _.a.A(e, n);
                                      })
                                    : [];
                            },
                            indexOf: function (e) {
                                var n = this();
                                return _.a.A(n, e);
                            },
                            replace: function (e, n) {
                                var t = this.indexOf(e);
                                0 <= t && (this.ya(), (this.v()[t] = n), this.xa());
                            },
                            sorted: function (e) {
                                var n = this().slice(0);
                                return e ? n.sort(e) : n.sort();
                            },
                            reversed: function () {
                                return this().slice(0).reverse();
                            },
                        }),
                        _.a.Ba && _.a.setPrototypeOf(_.Ha.fn, _.ta.fn),
                        _.a.D("pop push reverse shift sort splice unshift".split(" "), function (e) {
                            _.Ha.fn[e] = function () {
                                var n = this.v();
                                this.ya(), this.zc(n, e, arguments);
                                var t = n[e].apply(n, arguments);
                                return this.xa(), t === n ? this : t;
                            };
                        }),
                        _.a.D(["slice"], function (e) {
                            _.Ha.fn[e] = function () {
                                var n = this();
                                return n[e].apply(n, arguments);
                            };
                        }),
                        (_.Pc = function (e) {
                            return _.O(e) && "function" == typeof e.remove && "function" == typeof e.push;
                        }),
                        _.b("observableArray", _.Ha),
                        _.b("isObservableArray", _.Pc),
                        (_.Ta.trackArrayChanges = function (e, n) {
                            function t() {
                                function n() {
                                    if (l) {
                                        var n,
                                            t = [].concat(e.v() || []);
                                        e.Wa("arrayChange") && ((!c || 1 < l) && (c = _.a.Pb(o, t, e.Ob)), (n = c)), (o = t), (c = null), (l = 0), n && n.length && e.notifySubscribers(n, "arrayChange");
                                    }
                                }
                                s
                                    ? n()
                                    : ((s = !0),
                                      (a = e.subscribe(
                                          function () {
                                              ++l;
                                          },
                                          null,
                                          "spectate"
                                      )),
                                      (o = [].concat(e.v() || [])),
                                      (c = null),
                                      (i = e.subscribe(n)));
                            }
                            if (((e.Ob = {}), n && "object" == typeof n && _.a.extend(e.Ob, n), (e.Ob.sparse = !0), !e.zc)) {
                                var i,
                                    a,
                                    o,
                                    s = !1,
                                    c = null,
                                    l = 0,
                                    d = e.Qa,
                                    u = e.hb;
                                (e.Qa = function (n) {
                                    d && d.call(e, n), "arrayChange" === n && t();
                                }),
                                    (e.hb = function (n) {
                                        u && u.call(e, n), "arrayChange" !== n || e.Wa("arrayChange") || (i && i.s(), a && a.s(), (a = i = null), (s = !1), (o = r));
                                    }),
                                    (e.zc = function (e, n, t) {
                                        function i(e, n, t) {
                                            return (a[a.length] = { status: e, value: n, index: t });
                                        }
                                        if (s && !l) {
                                            var a = [],
                                                o = e.length,
                                                r = t.length,
                                                d = 0;
                                            switch (n) {
                                                case "push":
                                                    d = o;
                                                case "unshift":
                                                    for (n = 0; n < r; n++) i("added", t[n], d + n);
                                                    break;
                                                case "pop":
                                                    d = o - 1;
                                                case "shift":
                                                    o && i("deleted", e[d], d);
                                                    break;
                                                case "splice":
                                                    (n = Math.min(Math.max(0, 0 > t[0] ? o + t[0] : t[0]), o)), (o = 1 === r ? o : Math.min(n + (t[1] || 0), o)), (r = n + r - 2), (d = Math.max(o, r));
                                                    for (var u = [], p = [], g = 2; n < d; ++n, ++g) n < o && p.push(i("deleted", e[n], n)), n < r && u.push(i("added", t[g], n));
                                                    _.a.Kc(p, u);
                                                    break;
                                                default:
                                                    return;
                                            }
                                            c = a;
                                        }
                                    });
                            }
                        });
                    var I = _.a.Da("_state");
                    _.o = _.$ = function (e, n, t) {
                        function i() {
                            if (0 < arguments.length) {
                                if ("function" != typeof a) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return a.apply(o.nb, arguments), this;
                            }
                            return o.ra || _.u.cc(i), (o.ka || (o.J && i.Xa())) && i.ha(), o.X;
                        }
                        if (("object" == typeof e ? (t = e) : ((t = t || {}), e && (t.read = e)), "function" != typeof t.read)) throw Error("Pass a function that returns the value of the ko.computed");
                        var a = t.write,
                            o = { X: r, sa: !0, ka: !0, rb: !1, jc: !1, ra: !1, wb: !1, J: !1, Wc: t.read, nb: n || t.owner, l: t.disposeWhenNodeIsRemoved || t.l || null, Sa: t.disposeWhen || t.Sa, Rb: null, I: {}, V: 0, Ic: null };
                        return (
                            (i[I] = o),
                            (i.Nc = "function" == typeof a),
                            _.a.Ba || _.a.extend(i, _.T.fn),
                            _.T.fn.qb(i),
                            _.a.Ab(i, k),
                            t.pure ? ((o.wb = !0), (o.J = !0), _.a.extend(i, P)) : t.deferEvaluation && _.a.extend(i, D),
                            _.options.deferUpdates && _.Ta.deferred(i, !0),
                            o.l && ((o.jc = !0), o.l.nodeType || (o.l = null)),
                            o.J || t.deferEvaluation || i.ha(),
                            o.l &&
                                i.ja() &&
                                _.a.K.za(
                                    o.l,
                                    (o.Rb = function () {
                                        i.s();
                                    })
                                ),
                            i
                        );
                    };
                    var k = {
                            equalityComparer: t,
                            qa: function () {
                                return this[I].V;
                            },
                            Va: function () {
                                var e = [];
                                return (
                                    _.a.P(this[I].I, function (n, t) {
                                        e[t.Ka] = t.da;
                                    }),
                                    e
                                );
                            },
                            Vb: function (e) {
                                if (!this[I].V) return !1;
                                var n = this.Va();
                                return (
                                    -1 !== _.a.A(n, e) ||
                                    !!_.a.Lb(n, function (n) {
                                        return n.Vb && n.Vb(e);
                                    })
                                );
                            },
                            uc: function (e, n, t) {
                                if (this[I].wb && n === this) throw Error("A 'pure' computed must not be called recursively");
                                (this[I].I[e] = t), (t.Ka = this[I].V++), (t.La = n.ob());
                            },
                            Xa: function () {
                                var e,
                                    n,
                                    t = this[I].I;
                                for (e in t) if (Object.prototype.hasOwnProperty.call(t, e) && ((n = t[e]), (this.Ia && n.da.Ja) || n.da.Dd(n.La))) return !0;
                            },
                            Jd: function () {
                                this.Ia && !this[I].rb && this.Ia(!1);
                            },
                            ja: function () {
                                var e = this[I];
                                return e.ka || 0 < e.V;
                            },
                            Rd: function () {
                                this.Ja ? this[I].ka && (this[I].sa = !0) : this.Hc();
                            },
                            $c: function (e) {
                                if (e.Hb) {
                                    var n = e.subscribe(this.Jd, this, "dirty"),
                                        t = e.subscribe(this.Rd, this);
                                    return {
                                        da: e,
                                        s: function () {
                                            n.s(), t.s();
                                        },
                                    };
                                }
                                return e.subscribe(this.Hc, this);
                            },
                            Hc: function () {
                                var e = this,
                                    n = e.throttleEvaluation;
                                n && 0 <= n
                                    ? (clearTimeout(this[I].Ic),
                                      (this[I].Ic = _.a.setTimeout(function () {
                                          e.ha(!0);
                                      }, n)))
                                    : e.Ia
                                    ? e.Ia(!0)
                                    : e.ha(!0);
                            },
                            ha: function (e) {
                                var n = this[I],
                                    t = n.Sa,
                                    i = !1;
                                if (!n.rb && !n.ra) {
                                    if ((n.l && !_.a.Sb(n.l)) || (t && t())) {
                                        if (!n.jc) return void this.s();
                                    } else n.jc = !1;
                                    n.rb = !0;
                                    try {
                                        i = this.zd(e);
                                    } finally {
                                        n.rb = !1;
                                    }
                                    return i;
                                }
                            },
                            zd: function (e) {
                                var n = this[I],
                                    t = !1,
                                    i = n.wb ? r : !n.V;
                                (t = { qd: this, mb: n.I, Qb: n.V }), _.u.xc({ pd: t, od: g, o: this, Ya: i }), (n.I = {}), (n.V = 0);
                                var a = this.yd(n, t);
                                return (
                                    n.V ? (t = this.sb(n.X, a)) : (this.s(), (t = !0)),
                                    t && (n.J ? this.Gb() : this.notifySubscribers(n.X, "beforeChange"), (n.X = a), this.notifySubscribers(n.X, "spectate"), !n.J && e && this.notifySubscribers(n.X), this.rc && this.rc()),
                                    i && this.notifySubscribers(n.X, "awake"),
                                    t
                                );
                            },
                            yd: function (e, n) {
                                try {
                                    var t = e.Wc;
                                    return e.nb ? t.call(e.nb) : t();
                                } finally {
                                    _.u.end(), n.Qb && !e.J && _.a.P(n.mb, p), (e.sa = e.ka = !1);
                                }
                            },
                            v: function (e) {
                                var n = this[I];
                                return ((n.ka && (e || !n.V)) || (n.J && this.Xa())) && this.ha(), n.X;
                            },
                            ub: function (e) {
                                _.T.fn.ub.call(this, e),
                                    (this.nc = function () {
                                        return this[I].J || (this[I].sa ? this.ha() : (this[I].ka = !1)), this[I].X;
                                    }),
                                    (this.Ia = function (e) {
                                        this.pc(this[I].X), (this[I].ka = !0), e && (this[I].sa = !0), this.qc(this, !e);
                                    });
                            },
                            s: function () {
                                var e = this[I];
                                !e.J &&
                                    e.I &&
                                    _.a.P(e.I, function (e, n) {
                                        n.s && n.s();
                                    }),
                                    e.l && e.Rb && _.a.K.yb(e.l, e.Rb),
                                    (e.I = r),
                                    (e.V = 0),
                                    (e.ra = !0),
                                    (e.sa = !1),
                                    (e.ka = !1),
                                    (e.J = !1),
                                    (e.l = r),
                                    (e.Sa = r),
                                    (e.Wc = r),
                                    this.Nc || (e.nb = r);
                            },
                        },
                        P = {
                            Qa: function (e) {
                                var n = this,
                                    t = n[I];
                                if (!t.ra && t.J && "change" == e) {
                                    if (((t.J = !1), t.sa || n.Xa())) (t.I = null), (t.V = 0), n.ha() && n.Gb();
                                    else {
                                        var i = [];
                                        _.a.P(t.I, function (e, n) {
                                            i[n.Ka] = e;
                                        }),
                                            _.a.D(i, function (e, i) {
                                                var a = t.I[e],
                                                    o = n.$c(a.da);
                                                (o.Ka = i), (o.La = a.La), (t.I[e] = o);
                                            }),
                                            n.Xa() && n.ha() && n.Gb();
                                    }
                                    t.ra || n.notifySubscribers(t.X, "awake");
                                }
                            },
                            hb: function (e) {
                                var n = this[I];
                                n.ra ||
                                    "change" != e ||
                                    this.Wa("change") ||
                                    (_.a.P(n.I, function (e, t) {
                                        t.s && ((n.I[e] = { da: t.da, Ka: t.Ka, La: t.La }), t.s());
                                    }),
                                    (n.J = !0),
                                    this.notifySubscribers(r, "asleep"));
                            },
                            ob: function () {
                                var e = this[I];
                                return e.J && (e.sa || this.Xa()) && this.ha(), _.T.fn.ob.call(this);
                            },
                        },
                        D = {
                            Qa: function (e) {
                                ("change" != e && "beforeChange" != e) || this.v();
                            },
                        };
                    _.a.Ba && _.a.setPrototypeOf(k, _.T.fn);
                    var E = _.ta.Ma;
                    (k[E] = _.o),
                        (_.Oc = function (e) {
                            return "function" == typeof e && e[E] === k[E];
                        }),
                        (_.Fd = function (e) {
                            return _.Oc(e) && e[I] && e[I].wb;
                        }),
                        _.b("computed", _.o),
                        _.b("dependentObservable", _.o),
                        _.b("isComputed", _.Oc),
                        _.b("isPureComputed", _.Fd),
                        _.b("computed.fn", k),
                        _.L(k, "peek", k.v),
                        _.L(k, "dispose", k.s),
                        _.L(k, "isActive", k.ja),
                        _.L(k, "getDependenciesCount", k.qa),
                        _.L(k, "getDependencies", k.Va),
                        (_.xb = function (e, n) {
                            return "function" == typeof e ? _.o(e, n, { pure: !0 }) : (((e = _.a.extend({}, e)).pure = !0), _.o(e, n));
                        }),
                        _.b("pureComputed", _.xb),
                        (function () {
                            function e(t, i, a) {
                                if (((a = a || new n()), "object" != typeof (t = i(t)) || null === t || t === r || t instanceof RegExp || t instanceof Date || t instanceof String || t instanceof Number || t instanceof Boolean)) return t;
                                var o = t instanceof Array ? [] : {};
                                return (
                                    a.save(t, o),
                                    (function (e, n) {
                                        if (e instanceof Array) {
                                            for (var t = 0; t < e.length; t++) n(t);
                                            "function" == typeof e.toJSON && n("toJSON");
                                        } else for (t in e) n(t);
                                    })(t, function (n) {
                                        var s = i(t[n]);
                                        switch (typeof s) {
                                            case "boolean":
                                            case "number":
                                            case "string":
                                            case "function":
                                                o[n] = s;
                                                break;
                                            case "object":
                                            case "undefined":
                                                var c = a.get(s);
                                                o[n] = c !== r ? c : e(s, i, a);
                                        }
                                    }),
                                    o
                                );
                            }
                            function n() {
                                (this.keys = []), (this.values = []);
                            }
                            (_.ad = function (n) {
                                if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                                return e(n, function (e) {
                                    for (var n = 0; _.O(e) && 10 > n; n++) e = e();
                                    return e;
                                });
                            }),
                                (_.toJSON = function (e, n, t) {
                                    return (e = _.ad(e)), _.a.hc(e, n, t);
                                }),
                                (n.prototype = {
                                    constructor: n,
                                    save: function (e, n) {
                                        var t = _.a.A(this.keys, e);
                                        0 <= t ? (this.values[t] = n) : (this.keys.push(e), this.values.push(n));
                                    },
                                    get: function (e) {
                                        return 0 <= (e = _.a.A(this.keys, e)) ? this.values[e] : r;
                                    },
                                });
                        })(),
                        _.b("toJS", _.ad),
                        _.b("toJSON", _.toJSON),
                        (_.Wd = function (e, n, t) {
                            function i(n) {
                                var i = _.xb(e, t).extend({ ma: "always" }),
                                    a = i.subscribe(function (e) {
                                        e && (a.s(), n(e));
                                    });
                                return i.notifySubscribers(i.v()), a;
                            }
                            return "function" != typeof Promise || n ? i(n.bind(t)) : new Promise(i);
                        }),
                        _.b("when", _.Wd),
                        (_.w = {
                            M: function (e) {
                                switch (_.a.R(e)) {
                                    case "option":
                                        return !0 === e.__ko__hasDomDataOptionValue__ ? _.a.g.get(e, _.c.options.$b) : 7 >= _.a.W ? (e.getAttributeNode("value") && e.getAttributeNode("value").specified ? e.value : e.text) : e.value;
                                    case "select":
                                        return 0 <= e.selectedIndex ? _.w.M(e.options[e.selectedIndex]) : r;
                                    default:
                                        return e.value;
                                }
                            },
                            cb: function (e, n, t) {
                                switch (_.a.R(e)) {
                                    case "option":
                                        "string" == typeof n
                                            ? (_.a.g.set(e, _.c.options.$b, r), "__ko__hasDomDataOptionValue__" in e && delete e.__ko__hasDomDataOptionValue__, (e.value = n))
                                            : (_.a.g.set(e, _.c.options.$b, n), (e.__ko__hasDomDataOptionValue__ = !0), (e.value = "number" == typeof n ? n : ""));
                                        break;
                                    case "select":
                                        ("" !== n && null !== n) || (n = r);
                                        for (var i, a = -1, o = 0, s = e.options.length; o < s; ++o)
                                            if ((i = _.w.M(e.options[o])) == n || ("" === i && n === r)) {
                                                a = o;
                                                break;
                                            }
                                        (t || 0 <= a || (n === r && 1 < e.size)) &&
                                            ((e.selectedIndex = a),
                                            6 === _.a.W &&
                                                _.a.setTimeout(function () {
                                                    e.selectedIndex = a;
                                                }, 0));
                                        break;
                                    default:
                                        (null !== n && n !== r) || (n = ""), (e.value = n);
                                }
                            },
                        }),
                        _.b("selectExtensions", _.w),
                        _.b("selectExtensions.readValue", _.w.M),
                        _.b("selectExtensions.writeValue", _.w.cb),
                        (_.m = (function () {
                            function e(e) {
                                123 === (e = _.a.Db(e)).charCodeAt(0) && (e = e.slice(1, -1));
                                var n,
                                    t = [],
                                    r = (e += "\n,").match(i),
                                    s = [],
                                    c = 0;
                                if (1 < r.length) {
                                    for (var l, d = 0; (l = r[d]); ++d) {
                                        var u = l.charCodeAt(0);
                                        if (44 === u) {
                                            if (0 >= c) {
                                                t.push(n && s.length ? { key: n, value: s.join("") } : { unknown: n || s.join("") }), (n = c = 0), (s = []);
                                                continue;
                                            }
                                        } else if (58 === u) {
                                            if (!c && !n && 1 === s.length) {
                                                n = s.pop();
                                                continue;
                                            }
                                        } else {
                                            if (47 === u && 1 < l.length && (47 === l.charCodeAt(1) || 42 === l.charCodeAt(1))) continue;
                                            47 === u && d && 1 < l.length
                                                ? (u = r[d - 1].match(a)) && !o[u[0]] && ((r = (e = e.substr(e.indexOf(l) + 1)).match(i)), (d = -1), (l = "/"))
                                                : 40 === u || 123 === u || 91 === u
                                                ? ++c
                                                : 41 === u || 125 === u || 93 === u
                                                ? --c
                                                : n || s.length || (34 !== u && 39 !== u) || (l = l.slice(1, -1));
                                        }
                                        s.push(l);
                                    }
                                    if (0 < c) throw Error("Unbalanced parentheses, braces, or brackets");
                                }
                                return t;
                            }
                            var n = ["true", "false", "null", "undefined"],
                                t = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                                i = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
                                a = /[\])"'A-Za-z0-9_$]+$/,
                                o = { in: 1, return: 1, typeof: 1 },
                                r = {};
                            return {
                                Ra: [],
                                wa: r,
                                ac: e,
                                vb: function (i, a) {
                                    function o(e, i) {
                                        var a;
                                        if (!d) {
                                            var u = _.getBindingHandler(e);
                                            if (u && u.preprocess && !(i = u.preprocess(i, e, o))) return;
                                            (u = r[e]) && ((a = i), 0 <= _.a.A(n, a) ? (a = !1) : ((u = a.match(t)), (a = null !== u && (u[1] ? "Object(" + u[1] + ")" + u[2] : a))), (u = a)),
                                                u && c.push("'" + ("string" == typeof r[e] ? r[e] : e) + "':function(_z){" + a + "=_z}");
                                        }
                                        l && (i = "function(){return " + i + " }"), s.push("'" + e + "':" + i);
                                    }
                                    var s = [],
                                        c = [],
                                        l = (a = a || {}).valueAccessors,
                                        d = a.bindingParams,
                                        u = "string" == typeof i ? e(i) : i;
                                    return (
                                        _.a.D(u, function (e) {
                                            o(e.key || e.unknown, e.value);
                                        }),
                                        c.length && o("_ko_property_writers", "{" + c.join(",") + " }"),
                                        s.join(",")
                                    );
                                },
                                Id: function (e, n) {
                                    for (var t = 0; t < e.length; t++) if (e[t].key == n) return !0;
                                    return !1;
                                },
                                eb: function (e, n, t, i, a) {
                                    e && _.O(e) ? !_.Za(e) || (a && e.v() === i) || e(i) : (e = n.get("_ko_property_writers")) && e[t] && e[t](i);
                                },
                            };
                        })()),
                        _.b("expressionRewriting", _.m),
                        _.b("expressionRewriting.bindingRewriteValidators", _.m.Ra),
                        _.b("expressionRewriting.parseObjectLiteral", _.m.ac),
                        _.b("expressionRewriting.preProcessBindings", _.m.vb),
                        _.b("expressionRewriting._twoWayBindings", _.m.wa),
                        _.b("jsonExpressionRewriting", _.m),
                        _.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", _.m.vb),
                        (function () {
                            function e(e) {
                                return 8 == e.nodeType && o.test(a ? e.text : e.nodeValue);
                            }
                            function n(e) {
                                return 8 == e.nodeType && r.test(a ? e.text : e.nodeValue);
                            }
                            function t(t, i) {
                                for (var a = t, o = 1, r = []; (a = a.nextSibling); ) {
                                    if (n(a) && (_.a.g.set(a, l, !0), 0 == --o)) return r;
                                    r.push(a), e(a) && o++;
                                }
                                if (!i) throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                                return null;
                            }
                            function i(e, n) {
                                var i = t(e, n);
                                return i ? (0 < i.length ? i[i.length - 1].nextSibling : e.nextSibling) : null;
                            }
                            var a = c && "\x3c!--test--\x3e" === c.createComment("test").text,
                                o = a ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                                r = a ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                                s = { ul: !0, ol: !0 },
                                l = "__ko_matchedEndComment__";
                            _.h = {
                                ea: {},
                                childNodes: function (n) {
                                    return e(n) ? t(n) : n.childNodes;
                                },
                                Ea: function (n) {
                                    if (e(n)) for (var t = 0, i = (n = _.h.childNodes(n)).length; t < i; t++) _.removeNode(n[t]);
                                    else _.a.Tb(n);
                                },
                                va: function (n, t) {
                                    if (e(n)) {
                                        _.h.Ea(n);
                                        for (var i = n.nextSibling, a = 0, o = t.length; a < o; a++) i.parentNode.insertBefore(t[a], i);
                                    } else _.a.va(n, t);
                                },
                                Vc: function (n, t) {
                                    var i;
                                    e(n) ? ((i = n.nextSibling), (n = n.parentNode)) : (i = n.firstChild), i ? t !== i && n.insertBefore(t, i) : n.appendChild(t);
                                },
                                Wb: function (n, t, i) {
                                    i ? ((i = i.nextSibling), e(n) && (n = n.parentNode), i ? t !== i && n.insertBefore(t, i) : n.appendChild(t)) : _.h.Vc(n, t);
                                },
                                firstChild: function (t) {
                                    if (e(t)) return !t.nextSibling || n(t.nextSibling) ? null : t.nextSibling;
                                    if (t.firstChild && n(t.firstChild)) throw Error("Found invalid end comment, as the first child of " + t);
                                    return t.firstChild;
                                },
                                nextSibling: function (t) {
                                    if ((e(t) && (t = i(t)), t.nextSibling && n(t.nextSibling))) {
                                        var a = t.nextSibling;
                                        if (n(a) && !_.a.g.get(a, l)) throw Error("Found end comment without a matching opening comment, as child of " + t);
                                        return null;
                                    }
                                    return t.nextSibling;
                                },
                                Cd: e,
                                Vd: function (e) {
                                    return (e = (a ? e.text : e.nodeValue).match(o)) ? e[1] : null;
                                },
                                Sc: function (t) {
                                    if (s[_.a.R(t)]) {
                                        var a = t.firstChild;
                                        if (a)
                                            do {
                                                if (1 === a.nodeType) {
                                                    var o,
                                                        r = null;
                                                    if ((o = a.firstChild))
                                                        do {
                                                            if (r) r.push(o);
                                                            else if (e(o)) {
                                                                var c = i(o, !0);
                                                                c ? (o = c) : (r = [o]);
                                                            } else n(o) && (r = [o]);
                                                        } while ((o = o.nextSibling));
                                                    if ((o = r)) for (r = a.nextSibling, c = 0; c < o.length; c++) r ? t.insertBefore(o[c], r) : t.appendChild(o[c]);
                                                }
                                            } while ((a = a.nextSibling));
                                    }
                                },
                            };
                        })(),
                        _.b("virtualElements", _.h),
                        _.b("virtualElements.allowedBindings", _.h.ea),
                        _.b("virtualElements.emptyNode", _.h.Ea),
                        _.b("virtualElements.insertAfter", _.h.Wb),
                        _.b("virtualElements.prepend", _.h.Vc),
                        _.b("virtualElements.setDomNodeChildren", _.h.va),
                        (_.ga = function () {
                            this.nd = {};
                        }),
                        _.a.extend(_.ga.prototype, {
                            nodeHasBindings: function (e) {
                                switch (e.nodeType) {
                                    case 1:
                                        return null != e.getAttribute("data-bind") || _.j.getComponentNameForNode(e);
                                    case 8:
                                        return _.h.Cd(e);
                                    default:
                                        return !1;
                                }
                            },
                            getBindings: function (e, n) {
                                var t = (t = this.getBindingsString(e, n)) ? this.parseBindingsString(t, n, e) : null;
                                return _.j.tc(t, e, n, !1);
                            },
                            getBindingAccessors: function (e, n) {
                                var t = (t = this.getBindingsString(e, n)) ? this.parseBindingsString(t, n, e, { valueAccessors: !0 }) : null;
                                return _.j.tc(t, e, n, !0);
                            },
                            getBindingsString: function (e) {
                                switch (e.nodeType) {
                                    case 1:
                                        return e.getAttribute("data-bind");
                                    case 8:
                                        return _.h.Vd(e);
                                    default:
                                        return null;
                                }
                            },
                            parseBindingsString: function (e, n, t, i) {
                                try {
                                    var a,
                                        o = this.nd,
                                        r = e + ((i && i.valueAccessors) || "");
                                    if (!(a = o[r])) {
                                        var s,
                                            c = "with($context){with($data||{}){return{" + _.m.vb(e, i) + "}}}";
                                        (s = new Function("$context", "$element", c)), (a = o[r] = s);
                                    }
                                    return a(n, t);
                                } catch (l) {
                                    throw ((l.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + l.message), l);
                                }
                            },
                        }),
                        (_.ga.instance = new _.ga()),
                        _.b("bindingProvider", _.ga),
                        (function () {
                            function e(e) {
                                var n = (e = _.a.g.get(e, y)) && e.N;
                                n && ((e.N = null), n.Tc());
                            }
                            function n(n, t, i) {
                                (this.node = n), (this.yc = t), (this.kb = []), (this.H = !1), t.N || _.a.K.za(n, e), i && i.N && (i.N.kb.push(n), (this.Kb = i));
                            }
                            function t(e) {
                                return function () {
                                    return e;
                                };
                            }
                            function i(e) {
                                return e();
                            }
                            function a(e) {
                                return _.a.Ga(_.u.G(e), function (n, t) {
                                    return function () {
                                        return e()[t];
                                    };
                                });
                            }
                            function o(e, n, i) {
                                return "function" == typeof e ? a(e.bind(null, n, i)) : _.a.Ga(e, t);
                            }
                            function l(e, n) {
                                return a(this.getBindings.bind(this, e, n));
                            }
                            function u(e, n) {
                                var t = _.h.firstChild(n);
                                if (t) {
                                    var i,
                                        a = _.ga.instance,
                                        o = a.preprocessNode;
                                    if (o) {
                                        for (; (i = t); ) (t = _.h.nextSibling(i)), o.call(a, i);
                                        t = _.h.firstChild(n);
                                    }
                                    for (; (i = t); ) (t = _.h.nextSibling(i)), p(e, i);
                                }
                                _.i.ma(n, _.i.H);
                            }
                            function p(e, n) {
                                var t = e,
                                    i = 1 === n.nodeType;
                                i && _.h.Sc(n), (i || _.ga.instance.nodeHasBindings(n)) && (t = g(n, null, e).bindingContextForDescendants), t && !b[_.a.R(n)] && u(t, n);
                            }
                            function g(e, n, t) {
                                var a,
                                    o = _.a.g.Ub(e, y, {}),
                                    s = o.hd;
                                if (!n) {
                                    if (s) throw Error("You cannot apply bindings multiple times to the same element.");
                                    o.hd = !0;
                                }
                                if ((s || (o.context = t), o.Zb || (o.Zb = {}), n && "function" != typeof n)) a = n;
                                else {
                                    var c = _.ga.instance,
                                        d = c.getBindingAccessors || l,
                                        u = _.$(
                                            function () {
                                                return (a = n ? n(t, e) : d.call(c, e, t)) && (t[m] && t[m](), t[v] && t[v]()), a;
                                            },
                                            null,
                                            { l: e }
                                        );
                                    (a && u.ja()) || (u = null);
                                }
                                var p,
                                    g = t;
                                if (a) {
                                    var f = function () {
                                            return _.a.Ga(u ? u() : a, i);
                                        },
                                        h = u
                                            ? function (e) {
                                                  return function () {
                                                      return i(u()[e]);
                                                  };
                                              }
                                            : function (e) {
                                                  return a[e];
                                              };
                                    (f.get = function (e) {
                                        return a[e] && i(h(e));
                                    }),
                                        (f.has = function (e) {
                                            return e in a;
                                        }),
                                        _.i.H in a &&
                                            _.i.subscribe(e, _.i.H, function () {
                                                var n = (0, a[_.i.H])();
                                                if (n) {
                                                    var t = _.h.childNodes(e);
                                                    t.length && n(t, _.Ec(t[0]));
                                                }
                                            }),
                                        _.i.pa in a &&
                                            ((g = _.i.Cb(e, t)),
                                            _.i.subscribe(e, _.i.pa, function () {
                                                var n = (0, a[_.i.pa])();
                                                n && _.h.firstChild(e) && n(e);
                                            })),
                                        (o = (function (e) {
                                            var n = [],
                                                t = {},
                                                i = [];
                                            return (
                                                _.a.P(e, function a(o) {
                                                    if (!t[o]) {
                                                        var r = _.getBindingHandler(o);
                                                        r &&
                                                            (r.after &&
                                                                (i.push(o),
                                                                _.a.D(r.after, function (n) {
                                                                    if (e[n]) {
                                                                        if (-1 !== _.a.A(i, n)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                                                        a(n);
                                                                    }
                                                                }),
                                                                i.length--),
                                                            n.push({ key: o, Mc: r })),
                                                            (t[o] = !0);
                                                    }
                                                }),
                                                n
                                            );
                                        })(a)),
                                        _.a.D(o, function (n) {
                                            var t = n.Mc.init,
                                                i = n.Mc.update,
                                                o = n.key;
                                            if (8 === e.nodeType && !_.h.ea[o]) throw Error("The binding '" + o + "' cannot be used with virtual elements");
                                            try {
                                                "function" == typeof t &&
                                                    _.u.G(function () {
                                                        var n = t(e, h(o), f, g.$data, g);
                                                        if (n && n.controlsDescendantBindings) {
                                                            if (p !== r)
                                                                throw Error(
                                                                    "Multiple bindings (" + p + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."
                                                                );
                                                            p = o;
                                                        }
                                                    }),
                                                    "function" == typeof i &&
                                                        _.$(
                                                            function () {
                                                                i(e, h(o), f, g.$data, g);
                                                            },
                                                            null,
                                                            { l: e }
                                                        );
                                            } catch (s) {
                                                throw ((s.message = 'Unable to process binding "' + o + ": " + a[o] + '"\nMessage: ' + s.message), s);
                                            }
                                        });
                                }
                                return { shouldBindDescendants: (o = p === r), bindingContextForDescendants: o && g };
                            }
                            function f(e, n) {
                                return e && e instanceof _.fa ? e : new _.fa(e, r, r, n);
                            }
                            var m = _.a.Da("_subscribable"),
                                h = _.a.Da("_ancestorBindingInfo"),
                                v = _.a.Da("_dataDependency");
                            _.c = {};
                            var b = { script: !0, textarea: !0, template: !0 };
                            _.getBindingHandler = function (e) {
                                return _.c[e];
                            };
                            var S = {};
                            (_.fa = function (e, n, t, i, a) {
                                function o() {
                                    var e = u ? d() : d,
                                        a = _.a.f(e);
                                    return (
                                        n ? (_.a.extend(c, n), h in n && (c[h] = n[h])) : ((c.$parents = []), (c.$root = a), (c.ko = _)),
                                        (c[m] = s),
                                        l ? (a = c.$data) : ((c.$rawData = e), (c.$data = a)),
                                        t && (c[t] = a),
                                        i && i(c, n, a),
                                        n && n[m] && !_.S.o().Vb(n[m]) && n[m](),
                                        p && (c[v] = p),
                                        c.$data
                                    );
                                }
                                var s,
                                    c = this,
                                    l = e === S,
                                    d = l ? r : e,
                                    u = "function" == typeof d && !_.O(d),
                                    p = a && a.dataDependency;
                                a && a.exportDependencies ? o() : ((s = _.xb(o)).v(), s.ja() ? (s.equalityComparer = null) : (c[m] = r));
                            }),
                                (_.fa.prototype.createChildContext = function (e, n, t, i) {
                                    if ((!i && n && "object" == typeof n && ((n = (i = n).as), (t = i.extend)), n && i && i.noChildContext)) {
                                        var a = "function" == typeof e && !_.O(e);
                                        return new _.fa(
                                            S,
                                            this,
                                            null,
                                            function (i) {
                                                t && t(i), (i[n] = a ? e() : e);
                                            },
                                            i
                                        );
                                    }
                                    return new _.fa(
                                        e,
                                        this,
                                        n,
                                        function (e, n) {
                                            (e.$parentContext = n), (e.$parent = n.$data), (e.$parents = (n.$parents || []).slice(0)), e.$parents.unshift(e.$parent), t && t(e);
                                        },
                                        i
                                    );
                                }),
                                (_.fa.prototype.extend = function (e, n) {
                                    return new _.fa(
                                        S,
                                        this,
                                        null,
                                        function (n) {
                                            _.a.extend(n, "function" == typeof e ? e(n) : e);
                                        },
                                        n
                                    );
                                });
                            var y = _.a.g.Z();
                            (n.prototype.Tc = function () {
                                this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
                            }),
                                (n.prototype.sd = function (e) {
                                    _.a.Pa(this.kb, e), !this.kb.length && this.H && this.Cc();
                                }),
                                (n.prototype.Cc = function () {
                                    (this.H = !0), this.yc.N && !this.kb.length && ((this.yc.N = null), _.a.K.yb(this.node, e), _.i.ma(this.node, _.i.pa), this.Tc());
                                }),
                                (_.i = {
                                    H: "childrenComplete",
                                    pa: "descendantsComplete",
                                    subscribe: function (e, n, t, i, a) {
                                        var o = _.a.g.Ub(e, y, {});
                                        return o.Fa || (o.Fa = new _.T()), a && a.notifyImmediately && o.Zb[n] && _.u.G(t, i, [e]), o.Fa.subscribe(t, i, n);
                                    },
                                    ma: function (e, n) {
                                        var t = _.a.g.get(e, y);
                                        if (t && ((t.Zb[n] = !0), t.Fa && t.Fa.notifySubscribers(e, n), n == _.i.H))
                                            if (t.N) t.N.Cc();
                                            else if (t.N === r && t.Fa && t.Fa.Wa(_.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
                                    },
                                    Cb: function (e, t) {
                                        var i = _.a.g.Ub(e, y, {});
                                        return (
                                            i.N || (i.N = new n(e, i, t[h])),
                                            t[h] == i
                                                ? t
                                                : t.extend(function (e) {
                                                      e[h] = i;
                                                  })
                                        );
                                    },
                                }),
                                (_.Td = function (e) {
                                    return (e = _.a.g.get(e, y)) && e.context;
                                }),
                                (_.ib = function (e, n, t) {
                                    return 1 === e.nodeType && _.h.Sc(e), g(e, n, f(t));
                                }),
                                (_.ld = function (e, n, t) {
                                    return (t = f(t)), _.ib(e, o(n, t, e), t);
                                }),
                                (_.Oa = function (e, n) {
                                    (1 !== n.nodeType && 8 !== n.nodeType) || u(f(e), n);
                                }),
                                (_.vc = function (e, n, t) {
                                    if ((!d && s.jQuery && (d = s.jQuery), 2 > arguments.length)) {
                                        if (!(n = c.body)) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
                                    } else if (!n || (1 !== n.nodeType && 8 !== n.nodeType)) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                                    p(f(e, t), n);
                                }),
                                (_.Dc = function (e) {
                                    return !e || (1 !== e.nodeType && 8 !== e.nodeType) ? r : _.Td(e);
                                }),
                                (_.Ec = function (e) {
                                    return (e = _.Dc(e)) ? e.$data : r;
                                }),
                                _.b("bindingHandlers", _.c),
                                _.b("bindingEvent", _.i),
                                _.b("bindingEvent.subscribe", _.i.subscribe),
                                _.b("bindingEvent.startPossiblyAsyncContentBinding", _.i.Cb),
                                _.b("applyBindings", _.vc),
                                _.b("applyBindingsToDescendants", _.Oa),
                                _.b("applyBindingAccessorsToNode", _.ib),
                                _.b("applyBindingsToNode", _.ld),
                                _.b("contextFor", _.Dc),
                                _.b("dataFor", _.Ec);
                        })(),
                        (function (e) {
                            function n(n, i) {
                                var r,
                                    s = Object.prototype.hasOwnProperty.call(a, n) ? a[n] : e;
                                s
                                    ? s.subscribe(i)
                                    : ((s = a[n] = new _.T()).subscribe(i),
                                      t(n, function (e, t) {
                                          var i = !(!t || !t.synchronous);
                                          (o[n] = { definition: e, Gd: i }),
                                              delete a[n],
                                              r || i
                                                  ? s.notifySubscribers(e)
                                                  : _.na.zb(function () {
                                                        s.notifySubscribers(e);
                                                    });
                                      }),
                                      (r = !0));
                            }
                            function t(e, n) {
                                i("getConfig", [e], function (t) {
                                    t
                                        ? i("loadComponent", [e, t], function (e) {
                                              n(e, t);
                                          })
                                        : n(null, null);
                                });
                            }
                            function i(n, t, a, o) {
                                o || (o = _.j.loaders.slice(0));
                                var r = o.shift();
                                if (r) {
                                    var s = r[n];
                                    if (s) {
                                        var c = !1;
                                        if (
                                            s.apply(
                                                r,
                                                t.concat(function (e) {
                                                    c ? a(null) : null !== e ? a(e) : i(n, t, a, o);
                                                })
                                            ) !== e &&
                                            ((c = !0), !r.suppressLoaderExceptions)
                                        )
                                            throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                                    } else i(n, t, a, o);
                                } else a(null);
                            }
                            var a = {},
                                o = {};
                            (_.j = {
                                get: function (t, i) {
                                    var a = Object.prototype.hasOwnProperty.call(o, t) ? o[t] : e;
                                    a
                                        ? a.Gd
                                            ? _.u.G(function () {
                                                  i(a.definition);
                                              })
                                            : _.na.zb(function () {
                                                  i(a.definition);
                                              })
                                        : n(t, i);
                                },
                                Bc: function (e) {
                                    delete o[e];
                                },
                                oc: i,
                            }),
                                (_.j.loaders = []),
                                _.b("components", _.j),
                                _.b("components.get", _.j.get),
                                _.b("components.clearCachedDefinition", _.j.Bc);
                        })(),
                        (function () {
                            function e(e, n, t, i) {
                                function o() {
                                    0 == --s && i(r);
                                }
                                var r = {},
                                    s = 2,
                                    c = t.template;
                                (t = t.viewModel),
                                    c
                                        ? a(n, c, function (n) {
                                              _.j.oc("loadTemplate", [e, n], function (e) {
                                                  (r.template = e), o();
                                              });
                                          })
                                        : o(),
                                    t
                                        ? a(n, t, function (n) {
                                              _.j.oc("loadViewModel", [e, n], function (e) {
                                                  (r[l] = e), o();
                                              });
                                          })
                                        : o();
                            }
                            function t(e) {
                                switch (_.a.R(e)) {
                                    case "script":
                                        return _.a.ua(e.text);
                                    case "textarea":
                                        return _.a.ua(e.value);
                                    case "template":
                                        if (i(e.content)) return _.a.Ca(e.content.childNodes);
                                }
                                return _.a.Ca(e.childNodes);
                            }
                            function i(e) {
                                return s.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType;
                            }
                            function a(e, t, i) {
                                "string" == typeof t.require
                                    ? n || s.require
                                        ? (n || s.require)([t.require], function (e) {
                                              e && "object" == typeof e && e.Xd && e["default"] && (e = e["default"]), i(e);
                                          })
                                        : e("Uses require, but no AMD loader is present")
                                    : i(t);
                            }
                            function o(e) {
                                return function (n) {
                                    throw Error("Component '" + e + "': " + n);
                                };
                            }
                            var r = {};
                            (_.j.register = function (e, n) {
                                if (!n) throw Error("Invalid configuration for " + e);
                                if (_.j.tb(e)) throw Error("Component " + e + " is already registered");
                                r[e] = n;
                            }),
                                (_.j.tb = function (e) {
                                    return Object.prototype.hasOwnProperty.call(r, e);
                                }),
                                (_.j.unregister = function (e) {
                                    delete r[e], _.j.Bc(e);
                                }),
                                (_.j.Fc = {
                                    getConfig: function (e, n) {
                                        n(_.j.tb(e) ? r[e] : null);
                                    },
                                    loadComponent: function (n, t, i) {
                                        var r = o(n);
                                        a(r, t, function (t) {
                                            e(n, r, t, i);
                                        });
                                    },
                                    loadTemplate: function (e, n, a) {
                                        if (((e = o(e)), "string" == typeof n)) a(_.a.ua(n));
                                        else if (n instanceof Array) a(n);
                                        else if (i(n)) a(_.a.la(n.childNodes));
                                        else if (n.element)
                                            if (((n = n.element), s.HTMLElement ? n instanceof HTMLElement : n && n.tagName && 1 === n.nodeType)) a(t(n));
                                            else if ("string" == typeof n) {
                                                var r = c.getElementById(n);
                                                r ? a(t(r)) : e("Cannot find element with ID " + n);
                                            } else e("Unknown element type: " + n);
                                        else e("Unknown template value: " + n);
                                    },
                                    loadViewModel: function (e, n, t) {
                                        !(function i(e, n, t) {
                                            if ("function" == typeof n)
                                                t(function (e) {
                                                    return new n(e);
                                                });
                                            else if ("function" == typeof n[l]) t(n[l]);
                                            else if ("instance" in n) {
                                                var a = n.instance;
                                                t(function () {
                                                    return a;
                                                });
                                            } else "viewModel" in n ? i(e, n.viewModel, t) : e("Unknown viewModel value: " + n);
                                        })(o(e), n, t);
                                    },
                                });
                            var l = "createViewModel";
                            _.b("components.register", _.j.register), _.b("components.isRegistered", _.j.tb), _.b("components.unregister", _.j.unregister), _.b("components.defaultLoader", _.j.Fc), _.j.loaders.push(_.j.Fc), (_.j.dd = r);
                        })(),
                        (function () {
                            function e(e, t) {
                                if ((i = e.getAttribute("params"))) {
                                    var i = n.parseBindingsString(i, t, e, { valueAccessors: !0, bindingParams: !0 }),
                                        a =
                                            ((i = _.a.Ga(i, function (n) {
                                                return _.o(n, null, { l: e });
                                            })),
                                            _.a.Ga(i, function (n) {
                                                var t = n.v();
                                                return n.ja()
                                                    ? _.o({
                                                          read: function () {
                                                              return _.a.f(n());
                                                          },
                                                          write:
                                                              _.Za(t) &&
                                                              function (e) {
                                                                  n()(e);
                                                              },
                                                          l: e,
                                                      })
                                                    : t;
                                            }));
                                    return Object.prototype.hasOwnProperty.call(a, "$raw") || (a.$raw = i), a;
                                }
                                return { $raw: {} };
                            }
                            (_.j.getComponentNameForNode = function (e) {
                                var n = _.a.R(e);
                                if (_.j.tb(n) && (-1 != n.indexOf("-") || "[object HTMLUnknownElement]" == "" + e || (8 >= _.a.W && e.tagName === n))) return n;
                            }),
                                (_.j.tc = function (n, t, i, a) {
                                    if (1 === t.nodeType) {
                                        var o = _.j.getComponentNameForNode(t);
                                        if (o) {
                                            if ((n = n || {}).component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                            var r = { name: o, params: e(t, i) };
                                            n.component = a
                                                ? function () {
                                                      return r;
                                                  }
                                                : r;
                                        }
                                    }
                                    return n;
                                });
                            var n = new _.ga();
                            9 > _.a.W &&
                                ((_.j.register = (function (e) {
                                    return function (n) {
                                        return e.apply(this, arguments);
                                    };
                                })(_.j.register)),
                                (c.createDocumentFragment = (function (e) {
                                    return function () {
                                        var n,
                                            t = e(),
                                            i = _.j.dd;
                                        for (n in i);
                                        return t;
                                    };
                                })(c.createDocumentFragment)));
                        })(),
                        (function () {
                            var e = 0;
                            (_.c.component = {
                                init: function (n, t, i, a, o) {
                                    function r() {
                                        var e = s && s.dispose;
                                        "function" == typeof e && e.call(s), l && l.s(), (c = s = l = null);
                                    }
                                    var s,
                                        c,
                                        l,
                                        d = _.a.la(_.h.childNodes(n));
                                    return (
                                        _.h.Ea(n),
                                        _.a.K.za(n, r),
                                        _.o(
                                            function () {
                                                var i,
                                                    a,
                                                    u = _.a.f(t());
                                                if (("string" == typeof u ? (i = u) : ((i = _.a.f(u.name)), (a = _.a.f(u.params))), !i)) throw Error("No component name specified");
                                                var p = _.i.Cb(n, o),
                                                    g = (c = ++e);
                                                _.j.get(i, function (e) {
                                                    if (c === g) {
                                                        if ((r(), !e)) throw Error("Unknown component '" + i + "'");
                                                        !(function (e, n, t) {
                                                            if (!(n = n.template)) throw Error("Component '" + e + "' has no template");
                                                            (e = _.a.Ca(n)), _.h.va(t, e);
                                                        })(i, e, n);
                                                        var t = (function (e, n, t) {
                                                            var i = e.createViewModel;
                                                            return i ? i.call(e, n, t) : n;
                                                        })(e, a, { element: n, templateNodes: d });
                                                        (e = p.createChildContext(t, {
                                                            extend: function (e) {
                                                                (e.$component = t), (e.$componentTemplateNodes = d);
                                                            },
                                                        })),
                                                            t && t.koDescendantsComplete && (l = _.i.subscribe(n, _.i.pa, t.koDescendantsComplete, t)),
                                                            (s = t),
                                                            _.Oa(e, n);
                                                    }
                                                });
                                            },
                                            null,
                                            { l: n }
                                        ),
                                        { controlsDescendantBindings: !0 }
                                    );
                                },
                            }),
                                (_.h.ea.component = !0);
                        })();
                    var A = { class: "className", for: "htmlFor" };
                    (_.c.attr = {
                        update: function (e, n) {
                            var t = _.a.f(n()) || {};
                            _.a.P(t, function (n, t) {
                                t = _.a.f(t);
                                var i = n.indexOf(":"),
                                    a = ((i = "lookupNamespaceURI" in e && 0 < i && e.lookupNamespaceURI(n.substr(0, i))), !1 === t || null === t || t === r);
                                a ? (i ? e.removeAttributeNS(i, n) : e.removeAttribute(n)) : (t = t.toString()),
                                    8 >= _.a.W && n in A ? ((n = A[n]), a ? e.removeAttribute(n) : (e[n] = t)) : a || (i ? e.setAttributeNS(i, n, t) : e.setAttribute(n, t)),
                                    "name" === n && _.a.Yc(e, a ? "" : t);
                            });
                        },
                    }),
                        (_.c.checked = {
                            after: ["value", "attr"],
                            init: function (e, n, t) {
                                function i() {
                                    var i = e.checked,
                                        c = a();
                                    if (!_.S.Ya() && (i || (!s && !_.S.qa()))) {
                                        var u = _.u.G(n);
                                        if (l) {
                                            var g = d ? u.v() : u,
                                                f = p;
                                            (p = c), f !== c ? i && (_.a.Na(g, c, !0), _.a.Na(g, f, !1)) : _.a.Na(g, c, i), d && _.Za(u) && u(g);
                                        } else o && (c === r ? (c = i) : i || (c = r)), _.m.eb(u, t, "checked", c, !0);
                                    }
                                }
                                var a = _.xb(function () {
                                        return t.has("checkedValue") ? _.a.f(t.get("checkedValue")) : u ? (t.has("value") ? _.a.f(t.get("value")) : e.value) : void 0;
                                    }),
                                    o = "checkbox" == e.type,
                                    s = "radio" == e.type;
                                if (o || s) {
                                    var c = n(),
                                        l = o && _.a.f(c) instanceof Array,
                                        d = !(l && c.push && c.splice),
                                        u = s || l,
                                        p = l ? a() : r;
                                    s &&
                                        !e.name &&
                                        _.c.uniqueName.init(e, function () {
                                            return !0;
                                        }),
                                        _.o(i, null, { l: e }),
                                        _.a.B(e, "click", i),
                                        _.o(
                                            function () {
                                                var t = _.a.f(n()),
                                                    i = a();
                                                l ? ((e.checked = 0 <= _.a.A(t, i)), (p = i)) : (e.checked = o && i === r ? !!t : a() === t);
                                            },
                                            null,
                                            { l: e }
                                        ),
                                        (c = r);
                                }
                            },
                        }),
                        (_.m.wa.checked = !0),
                        (_.c.checkedValue = {
                            update: function (e, n) {
                                e.value = _.a.f(n());
                            },
                        }),
                        (_.c["class"] = {
                            update: function (e, n) {
                                var t = _.a.Db(_.a.f(n()));
                                _.a.Eb(e, e.__ko__cssValue, !1), (e.__ko__cssValue = t), _.a.Eb(e, t, !0);
                            },
                        }),
                        (_.c.css = {
                            update: function (e, n) {
                                var t = _.a.f(n());
                                null !== t && "object" == typeof t
                                    ? _.a.P(t, function (n, t) {
                                          (t = _.a.f(t)), _.a.Eb(e, n, t);
                                      })
                                    : _.c["class"].update(e, n);
                            },
                        }),
                        (_.c.enable = {
                            update: function (e, n) {
                                var t = _.a.f(n());
                                t && e.disabled ? e.removeAttribute("disabled") : t || e.disabled || (e.disabled = !0);
                            },
                        }),
                        (_.c.disable = {
                            update: function (e, n) {
                                _.c.enable.update(e, function () {
                                    return !_.a.f(n());
                                });
                            },
                        }),
                        (_.c.event = {
                            init: function (e, n, t, i, a) {
                                var o = n() || {};
                                _.a.P(o, function (o) {
                                    "string" == typeof o &&
                                        _.a.B(e, o, function (e) {
                                            var r,
                                                s = n()[o];
                                            if (s) {
                                                try {
                                                    var c = _.a.la(arguments);
                                                    (i = a.$data), c.unshift(i), (r = s.apply(i, c));
                                                } finally {
                                                    !0 !== r && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
                                                }
                                                !1 === t.get(o + "Bubble") && ((e.cancelBubble = !0), e.stopPropagation && e.stopPropagation());
                                            }
                                        });
                                });
                            },
                        }),
                        (_.c.foreach = {
                            Rc: function (e) {
                                return function () {
                                    var n = e(),
                                        t = _.a.bc(n);
                                    return t && "number" != typeof t.length
                                        ? (_.a.f(n),
                                          {
                                              foreach: t.data,
                                              as: t.as,
                                              noChildContext: t.noChildContext,
                                              includeDestroyed: t.includeDestroyed,
                                              afterAdd: t.afterAdd,
                                              beforeRemove: t.beforeRemove,
                                              afterRender: t.afterRender,
                                              beforeMove: t.beforeMove,
                                              afterMove: t.afterMove,
                                              templateEngine: _.ba.Ma,
                                          })
                                        : { foreach: n, templateEngine: _.ba.Ma };
                                };
                            },
                            init: function (e, n) {
                                return _.c.template.init(e, _.c.foreach.Rc(n));
                            },
                            update: function (e, n, t, i, a) {
                                return _.c.template.update(e, _.c.foreach.Rc(n), t, i, a);
                            },
                        }),
                        (_.m.Ra.foreach = !1),
                        (_.h.ea.foreach = !0),
                        (_.c.hasfocus = {
                            init: function (e, n, t) {
                                function i(i) {
                                    e.__ko_hasfocusUpdating = !0;
                                    var a = e.ownerDocument;
                                    if ("activeElement" in a) {
                                        var o;
                                        try {
                                            o = a.activeElement;
                                        } catch (r) {
                                            o = a.body;
                                        }
                                        i = o === e;
                                    }
                                    (a = n()), _.m.eb(a, t, "hasfocus", i, !0), (e.__ko_hasfocusLastValue = i), (e.__ko_hasfocusUpdating = !1);
                                }
                                var a = i.bind(null, !0),
                                    o = i.bind(null, !1);
                                _.a.B(e, "focus", a), _.a.B(e, "focusin", a), _.a.B(e, "blur", o), _.a.B(e, "focusout", o), (e.__ko_hasfocusLastValue = !1);
                            },
                            update: function (e, n) {
                                var t = !!_.a.f(n());
                                e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === t || (t ? e.focus() : e.blur(), !t && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), _.u.G(_.a.Fb, null, [e, t ? "focusin" : "focusout"]));
                            },
                        }),
                        (_.m.wa.hasfocus = !0),
                        (_.c.hasFocus = _.c.hasfocus),
                        (_.m.wa.hasFocus = "hasfocus"),
                        (_.c.html = {
                            init: function () {
                                return { controlsDescendantBindings: !0 };
                            },
                            update: function (e, n) {
                                _.a.fc(e, n());
                            },
                        }),
                        (function () {
                            function e(e, n, t) {
                                (_.c[e] = {
                                    init: function (e, i, a, o, r) {
                                        var s,
                                            c,
                                            l,
                                            d,
                                            u,
                                            p = {};
                                        if (n) {
                                            o = a.get("as");
                                            var g = a.get("noChildContext");
                                            p = { as: o, noChildContext: g, exportDependencies: (u = !(o && g)) };
                                        }
                                        return (
                                            (d = (l = "render" == a.get("completeOn")) || a.has(_.i.pa)),
                                            _.o(
                                                function () {
                                                    var a,
                                                        o = _.a.f(i()),
                                                        g = !t != !o,
                                                        f = !c;
                                                    (u || g !== s) &&
                                                        (d && (r = _.i.Cb(e, r)),
                                                        g && ((n && !u) || (p.dataDependency = _.S.o()), (a = n ? r.createChildContext("function" == typeof o ? o : i, p) : _.S.qa() ? r.extend(null, p) : r)),
                                                        f && _.S.qa() && (c = _.a.Ca(_.h.childNodes(e), !0)),
                                                        g ? (f || _.h.va(e, _.a.Ca(c)), _.Oa(a, e)) : (_.h.Ea(e), l || _.i.ma(e, _.i.H)),
                                                        (s = g));
                                                },
                                                null,
                                                { l: e }
                                            ),
                                            { controlsDescendantBindings: !0 }
                                        );
                                    },
                                }),
                                    (_.m.Ra[e] = !1),
                                    (_.h.ea[e] = !0);
                            }
                            e("if"), e("ifnot", !1, !0), e("with", !0);
                        })(),
                        (_.c["let"] = {
                            init: function (e, n, t, i, a) {
                                return (n = a.extend(n)), _.Oa(n, e), { controlsDescendantBindings: !0 };
                            },
                        }),
                        (_.h.ea["let"] = !0);
                    var R = {};
                    (_.c.options = {
                        init: function (e) {
                            if ("select" !== _.a.R(e)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < e.length; ) e.remove(0);
                            return { controlsDescendantBindings: !0 };
                        },
                        update: function (e, n, t) {
                            function i() {
                                return _.a.jb(e.options, function (e) {
                                    return e.selected;
                                });
                            }
                            function a(e, n, t) {
                                var i = typeof n;
                                return "function" == i ? n(e) : "string" == i ? e[n] : t;
                            }
                            function o(n, t) {
                                if (f && d) _.i.ma(e, _.i.H);
                                else if (g.length) {
                                    var i = 0 <= _.a.A(g, _.w.M(t[0]));
                                    _.a.Zc(t[0], i), f && !i && _.u.G(_.a.Fb, null, [e, "change"]);
                                }
                            }
                            var s = e.multiple,
                                c = 0 != e.length && s ? e.scrollTop : null,
                                l = _.a.f(n()),
                                d = t.get("valueAllowUnset") && t.has("value"),
                                u = t.get("optionsIncludeDestroyed");
                            n = {};
                            var p,
                                g = [];
                            d || (s ? (g = _.a.Mb(i(), _.w.M)) : 0 <= e.selectedIndex && g.push(_.w.M(e.options[e.selectedIndex]))),
                                l &&
                                    ("undefined" == typeof l.length && (l = [l]),
                                    (p = _.a.jb(l, function (e) {
                                        return u || e === r || null === e || !_.a.f(e._destroy);
                                    })),
                                    t.has("optionsCaption") && null !== (l = _.a.f(t.get("optionsCaption"))) && l !== r && p.unshift(R));
                            var f = !1;
                            (n.beforeRemove = function (n) {
                                e.removeChild(n);
                            }),
                                (l = o),
                                t.has("optionsAfterRender") &&
                                    "function" == typeof t.get("optionsAfterRender") &&
                                    (l = function (e, n) {
                                        o(0, n), _.u.G(t.get("optionsAfterRender"), null, [n[0], e !== R ? e : r]);
                                    }),
                                _.a.ec(
                                    e,
                                    p,
                                    function (n, i, o) {
                                        return (
                                            o.length && ((g = !d && o[0].selected ? [_.w.M(o[0])] : []), (f = !0)),
                                            (i = e.ownerDocument.createElement("option")),
                                            n === R ? (_.a.Bb(i, t.get("optionsCaption")), _.w.cb(i, r)) : ((o = a(n, t.get("optionsValue"), n)), _.w.cb(i, _.a.f(o)), (n = a(n, t.get("optionsText"), o)), _.a.Bb(i, n)),
                                            [i]
                                        );
                                    },
                                    n,
                                    l
                                ),
                                d || ((s ? g.length && i().length < g.length : g.length && 0 <= e.selectedIndex ? _.w.M(e.options[e.selectedIndex]) !== g[0] : g.length || 0 <= e.selectedIndex) && _.u.G(_.a.Fb, null, [e, "change"])),
                                (d || _.S.Ya()) && _.i.ma(e, _.i.H),
                                _.a.wd(e),
                                c && 20 < Math.abs(c - e.scrollTop) && (e.scrollTop = c);
                        },
                    }),
                        (_.c.options.$b = _.a.g.Z()),
                        (_.c.selectedOptions = {
                            init: function (e, n, t) {
                                function i() {
                                    var i = n(),
                                        a = [];
                                    _.a.D(e.getElementsByTagName("option"), function (e) {
                                        e.selected && a.push(_.w.M(e));
                                    }),
                                        _.m.eb(i, t, "selectedOptions", a);
                                }
                                function a() {
                                    var t = _.a.f(n()),
                                        i = e.scrollTop;
                                    t &&
                                        "number" == typeof t.length &&
                                        _.a.D(e.getElementsByTagName("option"), function (e) {
                                            var n = 0 <= _.a.A(t, _.w.M(e));
                                            e.selected != n && _.a.Zc(e, n);
                                        }),
                                        (e.scrollTop = i);
                                }
                                if ("select" != _.a.R(e)) throw Error("selectedOptions binding applies only to SELECT elements");
                                var o;
                                _.i.subscribe(
                                    e,
                                    _.i.H,
                                    function () {
                                        o ? i() : (_.a.B(e, "change", i), (o = _.o(a, null, { l: e })));
                                    },
                                    null,
                                    { notifyImmediately: !0 }
                                );
                            },
                            update: function () {},
                        }),
                        (_.m.wa.selectedOptions = !0),
                        (_.c.style = {
                            update: function (e, n) {
                                var t = _.a.f(n() || {});
                                _.a.P(t, function (n, t) {
                                    if (((null !== (t = _.a.f(t)) && t !== r && !1 !== t) || (t = ""), d)) d(e).css(n, t);
                                    else if (/^--/.test(n)) e.style.setProperty(n, t);
                                    else {
                                        n = n.replace(/-(\w)/g, function (e, n) {
                                            return n.toUpperCase();
                                        });
                                        var i = e.style[n];
                                        (e.style[n] = t), t === i || e.style[n] != i || isNaN(t) || (e.style[n] = t + "px");
                                    }
                                });
                            },
                        }),
                        (_.c.submit = {
                            init: function (e, n, t, i, a) {
                                if ("function" != typeof n()) throw Error("The value for a submit binding must be a function");
                                _.a.B(e, "submit", function (t) {
                                    var i,
                                        o = n();
                                    try {
                                        i = o.call(a.$data, e);
                                    } finally {
                                        !0 !== i && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
                                    }
                                });
                            },
                        }),
                        (_.c.text = {
                            init: function () {
                                return { controlsDescendantBindings: !0 };
                            },
                            update: function (e, n) {
                                _.a.Bb(e, n());
                            },
                        }),
                        (_.h.ea.text = !0),
                        (function () {
                            if (s && s.navigator) {
                                var e,
                                    n,
                                    t,
                                    i,
                                    a,
                                    o = function (e) {
                                        if (e) return parseFloat(e[1]);
                                    },
                                    c = s.navigator.userAgent;
                                (e = s.opera && s.opera.version && parseInt(s.opera.version())) ||
                                    (a = o(c.match(/Edge\/([^ ]+)$/))) ||
                                    o(c.match(/Chrome\/([^ ]+)/)) ||
                                    (n = o(c.match(/Version\/([^ ]+) Safari/))) ||
                                    (t = o(c.match(/Firefox\/([^ ]+)/))) ||
                                    (i = _.a.W || o(c.match(/MSIE ([^ ]+)/))) ||
                                    (i = o(c.match(/rv:([^ )]+)/)));
                            }
                            if (8 <= i && 10 > i)
                                var l = _.a.g.Z(),
                                    d = _.a.g.Z(),
                                    u = function (e) {
                                        var n = this.activeElement;
                                        (n = n && _.a.g.get(n, d)) && n(e);
                                    },
                                    p = function (e, n) {
                                        var t = e.ownerDocument;
                                        _.a.g.get(t, l) || (_.a.g.set(t, l, !0), _.a.B(t, "selectionchange", u)), _.a.g.set(e, d, n);
                                    };
                            (_.c.textInput = {
                                init: function (o, s, c) {
                                    function l(e, n) {
                                        _.a.B(o, e, n);
                                    }
                                    function d() {
                                        g || ((f = o.value), (g = _.a.setTimeout(u, 4)));
                                    }
                                    function u() {
                                        clearTimeout(g), (f = g = r);
                                        var e = o.value;
                                        m !== e && ((m = e), _.m.eb(s(), c, "textInput", e));
                                    }
                                    var g,
                                        f,
                                        m = o.value,
                                        h = 9 == _.a.W ? d : u,
                                        v = !1;
                                    i && l("keypress", u),
                                        11 > i &&
                                            l("propertychange", function (e) {
                                                v || "value" !== e.propertyName || h(e);
                                            }),
                                        8 == i && (l("keyup", u), l("keydown", u)),
                                        p && (p(o, h), l("dragend", d)),
                                        (!i || 9 <= i) && l("input", h),
                                        5 > n && "textarea" === _.a.R(o)
                                            ? (l("keydown", d), l("paste", d), l("cut", d))
                                            : 11 > e
                                            ? l("keydown", d)
                                            : 4 > t
                                            ? (l("DOMAutoComplete", u), l("dragdrop", u), l("drop", u))
                                            : a && "number" === o.type && l("keydown", d),
                                        l("change", u),
                                        l("blur", u),
                                        _.o(
                                            function b() {
                                                var e = _.a.f(s());
                                                (null !== e && e !== r) || (e = ""), f !== r && e === f ? _.a.setTimeout(b, 4) : o.value !== e && ((v = !0), (o.value = e), (v = !1), (m = o.value));
                                            },
                                            null,
                                            { l: o }
                                        );
                                },
                            }),
                                (_.m.wa.textInput = !0),
                                (_.c.textinput = {
                                    preprocess: function (e, n, t) {
                                        t("textInput", e);
                                    },
                                });
                        })(),
                        (_.c.uniqueName = {
                            init: function (e, n) {
                                if (n()) {
                                    var t = "ko_unique_" + ++_.c.uniqueName.rd;
                                    _.a.Yc(e, t);
                                }
                            },
                        }),
                        (_.c.uniqueName.rd = 0),
                        (_.c.using = {
                            init: function (e, n, t, i, a) {
                                var o;
                                return t.has("as") && (o = { as: t.get("as"), noChildContext: t.get("noChildContext") }), (n = a.createChildContext(n, o)), _.Oa(n, e), { controlsDescendantBindings: !0 };
                            },
                        }),
                        (_.h.ea.using = !0),
                        (_.c.value = {
                            init: function (e, n, t) {
                                var i = _.a.R(e),
                                    a = "input" == i;
                                if (!a || ("checkbox" != e.type && "radio" != e.type)) {
                                    var o = [],
                                        s = t.get("valueUpdate"),
                                        c = !1,
                                        l = null;
                                    s && ((o = "string" == typeof s ? [s] : _.a.wc(s)), _.a.Pa(o, "change"));
                                    var d,
                                        u,
                                        p = function () {
                                            (l = null), (c = !1);
                                            var i = n(),
                                                a = _.w.M(e);
                                            _.m.eb(i, t, "value", a);
                                        };
                                    !_.a.W ||
                                        !a ||
                                        "text" != e.type ||
                                        "off" == e.autocomplete ||
                                        (e.form && "off" == e.form.autocomplete) ||
                                        -1 != _.a.A(o, "propertychange") ||
                                        (_.a.B(e, "propertychange", function () {
                                            c = !0;
                                        }),
                                        _.a.B(e, "focus", function () {
                                            c = !1;
                                        }),
                                        _.a.B(e, "blur", function () {
                                            c && p();
                                        })),
                                        _.a.D(o, function (n) {
                                            var t = p;
                                            _.a.Ud(n, "after") &&
                                                ((t = function () {
                                                    (l = _.w.M(e)), _.a.setTimeout(p, 0);
                                                }),
                                                (n = n.substring(5))),
                                                _.a.B(e, n, t);
                                        }),
                                        (d =
                                            a && "file" == e.type
                                                ? function () {
                                                      var t = _.a.f(n());
                                                      null === t || t === r || "" === t ? (e.value = "") : _.u.G(p);
                                                  }
                                                : function () {
                                                      var a = _.a.f(n()),
                                                          o = _.w.M(e);
                                                      null !== l && a === l
                                                          ? _.a.setTimeout(d, 0)
                                                          : (a === o && o !== r) || ("select" === i ? ((o = t.get("valueAllowUnset")), _.w.cb(e, a, o), o || a === _.w.M(e) || _.u.G(p)) : _.w.cb(e, a));
                                                  }),
                                        "select" === i
                                            ? _.i.subscribe(
                                                  e,
                                                  _.i.H,
                                                  function () {
                                                      u ? (t.get("valueAllowUnset") ? d() : p()) : (_.a.B(e, "change", p), (u = _.o(d, null, { l: e })));
                                                  },
                                                  null,
                                                  { notifyImmediately: !0 }
                                              )
                                            : (_.a.B(e, "change", p), _.o(d, null, { l: e }));
                                } else _.ib(e, { checkedValue: n });
                            },
                            update: function () {},
                        }),
                        (_.m.wa.value = !0),
                        (_.c.visible = {
                            update: function (e, n) {
                                var t = _.a.f(n()),
                                    i = "none" != e.style.display;
                                t && !i ? (e.style.display = "") : !t && i && (e.style.display = "none");
                            },
                        }),
                        (_.c.hidden = {
                            update: function (e, n) {
                                _.c.visible.update(e, function () {
                                    return !_.a.f(n());
                                });
                            },
                        }),
                        (function (e) {
                            _.c[e] = {
                                init: function (n, t, i, a, o) {
                                    return _.c.event.init.call(
                                        this,
                                        n,
                                        function () {
                                            var n = {};
                                            return (n[e] = t()), n;
                                        },
                                        i,
                                        a,
                                        o
                                    );
                                },
                            };
                        })("click"),
                        (_.ca = function () {}),
                        (_.ca.prototype.renderTemplateSource = function () {
                            throw Error("Override renderTemplateSource");
                        }),
                        (_.ca.prototype.createJavaScriptEvaluatorBlock = function () {
                            throw Error("Override createJavaScriptEvaluatorBlock");
                        }),
                        (_.ca.prototype.makeTemplateSource = function (e, n) {
                            if ("string" == typeof e) {
                                var t = (n = n || c).getElementById(e);
                                if (!t) throw Error("Cannot find template with ID " + e);
                                return new _.C.F(t);
                            }
                            if (1 == e.nodeType || 8 == e.nodeType) return new _.C.ia(e);
                            throw Error("Unknown template type: " + e);
                        }),
                        (_.ca.prototype.renderTemplate = function (e, n, t, i) {
                            return (e = this.makeTemplateSource(e, i)), this.renderTemplateSource(e, n, t, i);
                        }),
                        (_.ca.prototype.isTemplateRewritten = function (e, n) {
                            return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, n).data("isRewritten");
                        }),
                        (_.ca.prototype.rewriteTemplate = function (e, n, t) {
                            (n = n((e = this.makeTemplateSource(e, t)).text())), e.text(n), e.data("isRewritten", !0);
                        }),
                        _.b("templateEngine", _.ca),
                        (_.kc = (function () {
                            function e(e, n, t, i) {
                                e = _.m.ac(e);
                                for (var a = _.m.Ra, o = 0; o < e.length; o++) {
                                    var r = e[o].key;
                                    if (Object.prototype.hasOwnProperty.call(a, r)) {
                                        var s = a[r];
                                        if ("function" == typeof s) {
                                            if ((r = s(e[o].value))) throw Error(r);
                                        } else if (!s) throw Error("This template engine does not support the '" + r + "' binding within its templates");
                                    }
                                }
                                return (t = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + _.m.vb(e, { valueAccessors: !0 }) + " } })()},'" + t.toLowerCase() + "')"), i.createJavaScriptEvaluatorBlock(t) + n;
                            }
                            var n = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                                t = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                            return {
                                xd: function (e, n, t) {
                                    n.isTemplateRewritten(e, t) ||
                                        n.rewriteTemplate(
                                            e,
                                            function (e) {
                                                return _.kc.Ld(e, n);
                                            },
                                            t
                                        );
                                },
                                Ld: function (i, a) {
                                    return i
                                        .replace(n, function (n, t, i, o, r) {
                                            return e(r, t, i, a);
                                        })
                                        .replace(t, function (n, t) {
                                            return e(t, "\x3c!-- ko --\x3e", "#comment", a);
                                        });
                                },
                                md: function (e, n) {
                                    return _.aa.Xb(function (t, i) {
                                        var a = t.nextSibling;
                                        a && a.nodeName.toLowerCase() === n && _.ib(a, e, i);
                                    });
                                },
                            };
                        })()),
                        _.b("__tr_ambtns", _.kc.md),
                        (function () {
                            (_.C = {}),
                                (_.C.F = function (e) {
                                    if ((this.F = e)) {
                                        var n = _.a.R(e);
                                        this.ab = "script" === n ? 1 : "textarea" === n ? 2 : "template" == n && e.content && 11 === e.content.nodeType ? 3 : 4;
                                    }
                                }),
                                (_.C.F.prototype.text = function () {
                                    var e = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                                    if (0 == arguments.length) return this.F[e];
                                    var n = arguments[0];
                                    "innerHTML" === e ? _.a.fc(this.F, n) : (this.F[e] = n);
                                });
                            var e = _.a.g.Z() + "_";
                            _.C.F.prototype.data = function (n) {
                                if (1 === arguments.length) return _.a.g.get(this.F, e + n);
                                _.a.g.set(this.F, e + n, arguments[1]);
                            };
                            var n = _.a.g.Z();
                            (_.C.F.prototype.nodes = function () {
                                var e = this.F;
                                if (0 == arguments.length) {
                                    var t = _.a.g.get(e, n) || {},
                                        i = t.lb || (3 === this.ab ? e.content : 4 === this.ab ? e : r);
                                    if (!i || t.jd) {
                                        var a = this.text();
                                        a && a !== t.bb && ((i = _.a.Md(a, e.ownerDocument)), _.a.g.set(e, n, { lb: i, bb: a, jd: !0 }));
                                    }
                                    return i;
                                }
                                (t = arguments[0]), this.ab !== r && this.text(""), _.a.g.set(e, n, { lb: t });
                            }),
                                (_.C.ia = function (e) {
                                    this.F = e;
                                }),
                                (_.C.ia.prototype = new _.C.F()),
                                (_.C.ia.prototype.constructor = _.C.ia),
                                (_.C.ia.prototype.text = function () {
                                    if (0 == arguments.length) {
                                        var e = _.a.g.get(this.F, n) || {};
                                        return e.bb === r && e.lb && (e.bb = e.lb.innerHTML), e.bb;
                                    }
                                    _.a.g.set(this.F, n, { bb: arguments[0] });
                                }),
                                _.b("templateSources", _.C),
                                _.b("templateSources.domElement", _.C.F),
                                _.b("templateSources.anonymousTemplate", _.C.ia);
                        })(),
                        (function () {
                            function e(e, n, t) {
                                var i;
                                for (n = _.h.nextSibling(n); e && (i = e) !== n; ) t(i, (e = _.h.nextSibling(i)));
                            }
                            function n(n, t) {
                                if (n.length) {
                                    var i = n[0],
                                        a = n[n.length - 1],
                                        o = i.parentNode,
                                        r = _.ga.instance,
                                        s = r.preprocessNode;
                                    if (s) {
                                        if (
                                            (e(i, a, function (e, n) {
                                                var t = e.previousSibling,
                                                    o = s.call(r, e);
                                                o && (e === i && (i = o[0] || n), e === a && (a = o[o.length - 1] || t));
                                            }),
                                            (n.length = 0),
                                            !i)
                                        )
                                            return;
                                        i === a ? n.push(i) : (n.push(i, a), _.a.Ua(n, o));
                                    }
                                    e(i, a, function (e) {
                                        (1 !== e.nodeType && 8 !== e.nodeType) || _.vc(t, e);
                                    }),
                                        e(i, a, function (e) {
                                            (1 !== e.nodeType && 8 !== e.nodeType) || _.aa.cd(e, [t]);
                                        }),
                                        _.a.Ua(n, o);
                                }
                            }
                            function t(e) {
                                return e.nodeType ? e : 0 < e.length ? e[0] : null;
                            }
                            function i(e, i, a, r, s) {
                                s = s || {};
                                var c = ((e && t(e)) || a || {}).ownerDocument,
                                    l = s.templateEngine || o;
                                if ((_.kc.xd(a, l, c), "number" != typeof (a = l.renderTemplate(a, r, s, c)).length || (0 < a.length && "number" != typeof a[0].nodeType))) throw Error("Template engine must return an array of DOM nodes");
                                switch (((c = !1), i)) {
                                    case "replaceChildren":
                                        _.h.va(e, a), (c = !0);
                                        break;
                                    case "replaceNode":
                                        _.a.Xc(e, a), (c = !0);
                                        break;
                                    case "ignoreTargetNode":
                                        break;
                                    default:
                                        throw Error("Unknown renderMode: " + i);
                                }
                                return c && (n(a, r), s.afterRender && _.u.G(s.afterRender, null, [a, r[s.as || "$data"]]), "replaceChildren" == i && _.i.ma(e, _.i.H)), a;
                            }
                            function a(e, n, t) {
                                return _.O(e) ? e() : "function" == typeof e ? e(n, t) : e;
                            }
                            var o;
                            (_.gc = function (e) {
                                if (e != r && !(e instanceof _.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                                o = e;
                            }),
                                (_.dc = function (e, n, s, c, l) {
                                    if (((s = s || {}).templateEngine || o) == r) throw Error("Set a template engine before calling renderTemplate");
                                    if (((l = l || "replaceChildren"), c)) {
                                        var d = t(c);
                                        return _.$(
                                            function () {
                                                var o = n && n instanceof _.fa ? n : new _.fa(n, null, null, null, { exportDependencies: !0 }),
                                                    r = a(e, o.$data, o);
                                                (o = i(c, l, r, o, s)), "replaceNode" == l && (d = t((c = o)));
                                            },
                                            null,
                                            {
                                                Sa: function () {
                                                    return !d || !_.a.Sb(d);
                                                },
                                                l: d && "replaceNode" == l ? d.parentNode : d,
                                            }
                                        );
                                    }
                                    return _.aa.Xb(function (t) {
                                        _.dc(e, n, s, t, "replaceNode");
                                    });
                                }),
                                (_.Qd = function (e, t, o, s, c) {
                                    function l(e, n) {
                                        _.u.G(_.a.ec, null, [s, e, u, o, d, n]), _.i.ma(s, _.i.H);
                                    }
                                    function d(e, t) {
                                        n(t, p), o.afterRender && o.afterRender(t, e), (p = null);
                                    }
                                    function u(n, t) {
                                        p = c.createChildContext(n, {
                                            as: g,
                                            noChildContext: o.noChildContext,
                                            extend: function (e) {
                                                (e.$index = t), g && (e[g + "Index"] = t);
                                            },
                                        });
                                        var r = a(e, n, p);
                                        return i(s, "ignoreTargetNode", r, p, o);
                                    }
                                    var p,
                                        g = o.as,
                                        f = !1 === o.includeDestroyed || (_.options.foreachHidesDestroyed && !o.includeDestroyed);
                                    if (f || o.beforeRemove || !_.Pc(t))
                                        return _.$(
                                            function () {
                                                var e = _.a.f(t) || [];
                                                "undefined" == typeof e.length && (e = [e]),
                                                    f &&
                                                        (e = _.a.jb(e, function (e) {
                                                            return e === r || null === e || !_.a.f(e._destroy);
                                                        })),
                                                    l(e);
                                            },
                                            null,
                                            { l: s }
                                        );
                                    l(t.v());
                                    var m = t.subscribe(
                                        function (e) {
                                            l(t(), e);
                                        },
                                        null,
                                        "arrayChange"
                                    );
                                    return m.l(s), m;
                                });
                            var s = _.a.g.Z(),
                                c = _.a.g.Z();
                            (_.c.template = {
                                init: function (e, n) {
                                    var t = _.a.f(n());
                                    if ("string" == typeof t || "name" in t) _.h.Ea(e);
                                    else if ("nodes" in t) {
                                        if (((t = t.nodes || []), _.O(t))) throw Error('The "nodes" option must be a plain, non-observable array.');
                                        var i = t[0] && t[0].parentNode;
                                        (i && _.a.g.get(i, c)) || ((i = _.a.Yb(t)), _.a.g.set(i, c, !0)), new _.C.ia(e).nodes(i);
                                    } else {
                                        if (!(0 < (t = _.h.childNodes(e)).length)) throw Error("Anonymous template defined, but no template content was provided");
                                        (i = _.a.Yb(t)), new _.C.ia(e).nodes(i);
                                    }
                                    return { controlsDescendantBindings: !0 };
                                },
                                update: function (e, n, t, i, a) {
                                    var o = n();
                                    (t = !0),
                                        (i = null),
                                        "string" == typeof (n = _.a.f(o)) ? (n = {}) : ((o = "name" in n ? n.name : e), "if" in n && (t = _.a.f(n["if"])), t && "ifnot" in n && (t = !_.a.f(n.ifnot)), t && !o && (t = !1)),
                                        "foreach" in n
                                            ? (i = _.Qd(o, (t && n.foreach) || [], n, e, a))
                                            : t
                                            ? ((t = a), "data" in n && (t = a.createChildContext(n.data, { as: n.as, noChildContext: n.noChildContext, exportDependencies: !0 })), (i = _.dc(o, t, n, e)))
                                            : _.h.Ea(e),
                                        (a = i),
                                        (n = _.a.g.get(e, s)) && "function" == typeof n.s && n.s(),
                                        _.a.g.set(e, s, !a || (a.ja && !a.ja()) ? r : a);
                                },
                            }),
                                (_.m.Ra.template = function (e) {
                                    return (1 == (e = _.m.ac(e)).length && e[0].unknown) || _.m.Id(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
                                }),
                                (_.h.ea.template = !0);
                        })(),
                        _.b("setTemplateEngine", _.gc),
                        _.b("renderTemplate", _.dc),
                        (_.a.Kc = function (e, n, t) {
                            var i, a, o, r, s;
                            if (e.length && n.length)
                                for (i = a = 0; (!t || i < t) && (r = e[a]); ++a) {
                                    for (o = 0; (s = n[o]); ++o)
                                        if (r.value === s.value) {
                                            (r.moved = s.index), (s.moved = r.index), n.splice(o, 1), (i = o = 0);
                                            break;
                                        }
                                    i += o;
                                }
                        }),
                        (_.a.Pb = (function () {
                            function e(e, n, t, i, a) {
                                var o,
                                    r,
                                    s,
                                    c,
                                    l,
                                    d = Math.min,
                                    u = Math.max,
                                    p = [],
                                    g = e.length,
                                    f = n.length,
                                    m = f - g || 1,
                                    h = g + f + 1;
                                for (o = 0; o <= g; o++) for (c = s, p.push((s = [])), l = d(f, o + m), r = u(0, o - 1); r <= l; r++) s[r] = r ? (o ? (e[o - 1] === n[r - 1] ? c[r - 1] : d(c[r] || h, s[r - 1] || h) + 1) : r + 1) : o + 1;
                                for (d = [], u = [], m = [], o = g, r = f; o || r; )
                                    (f = p[o][r] - 1),
                                        r && f === p[o][r - 1]
                                            ? u.push((d[d.length] = { status: t, value: n[--r], index: r }))
                                            : o && f === p[o - 1][r]
                                            ? m.push((d[d.length] = { status: i, value: e[--o], index: o }))
                                            : (--r, --o, a.sparse || d.push({ status: "retained", value: n[r] }));
                                return _.a.Kc(m, u, !a.dontLimitMoves && 10 * g), d.reverse();
                            }
                            return function (n, t, i) {
                                return (i = "boolean" == typeof i ? { dontLimitMoves: i } : i || {}), (t = t || []), (n = n || []).length < t.length ? e(n, t, "added", "deleted", i) : e(t, n, "deleted", "added", i);
                            };
                        })()),
                        _.b("utils.compareArrays", _.a.Pb),
                        (function () {
                            function e(e, n, t, i, a) {
                                var o = [],
                                    s = _.$(
                                        function () {
                                            var r = n(t, a, _.a.Ua(o, e)) || [];
                                            0 < o.length && (_.a.Xc(o, r), i && _.u.G(i, null, [t, r, a])), (o.length = 0), _.a.Nb(o, r);
                                        },
                                        null,
                                        {
                                            l: e,
                                            Sa: function () {
                                                return !_.a.kd(o);
                                            },
                                        }
                                    );
                                return { Y: o, $: s.ja() ? s : r };
                            }
                            var n = _.a.g.Z(),
                                t = _.a.g.Z();
                            _.a.ec = function (i, a, o, s, c, l) {
                                function d(e) {
                                    (g = { Aa: e, pb: _.ta(w++) }), S.push(g), b || k.push(g);
                                }
                                function u(e) {
                                    (g = v[e]), w !== g.pb.v() && I.push(g), g.pb(w++), _.a.Ua(g.Y, i), S.push(g);
                                }
                                function p(e, n) {
                                    if (e)
                                        for (var t = 0, i = n.length; t < i; t++)
                                            _.a.D(n[t].Y, function (i) {
                                                e(i, t, n[t].Aa);
                                            });
                                }
                                "undefined" == typeof (a = a || []).length && (a = [a]), (s = s || {});
                                var g,
                                    f,
                                    m,
                                    h,
                                    v = _.a.g.get(i, n),
                                    b = !v,
                                    S = [],
                                    y = 0,
                                    w = 0,
                                    C = [],
                                    T = [],
                                    x = [],
                                    I = [],
                                    k = [],
                                    P = 0;
                                if (b) _.a.D(a, d);
                                else {
                                    if (!l || (v && v._countWaitingForRemove)) {
                                        var D = _.a.Mb(v, function (e) {
                                            return e.Aa;
                                        });
                                        l = _.a.Pb(D, a, { dontLimitMoves: s.dontLimitMoves, sparse: !0 });
                                    }
                                    var A, R, L;
                                    for (D = 0; (A = l[D]); D++)
                                        switch (((R = A.moved), (L = A.index), A.status)) {
                                            case "deleted":
                                                for (; y < L; ) u(y++);
                                                R === r && ((g = v[y]).$ && (g.$.s(), (g.$ = r)), _.a.Ua(g.Y, i).length && (s.beforeRemove && (S.push(g), P++, g.Aa === t ? (g = null) : x.push(g)), g && C.push.apply(C, g.Y))), y++;
                                                break;
                                            case "added":
                                                for (; w < L; ) u(y++);
                                                R !== r ? (T.push(S.length), u(R)) : d(A.value);
                                        }
                                    for (; w < a.length; ) u(y++);
                                    S._countWaitingForRemove = P;
                                }
                                _.a.g.set(i, n, S), p(s.beforeMove, I), _.a.D(C, s.beforeRemove ? _.oa : _.removeNode);
                                try {
                                    h = i.ownerDocument.activeElement;
                                } catch (E) {}
                                if (T.length)
                                    for (; (D = T.shift()) != r; ) {
                                        for (g = S[D], f = r; D; )
                                            if ((m = S[--D].Y) && m.length) {
                                                f = m[m.length - 1];
                                                break;
                                            }
                                        for (a = 0; (y = g.Y[a]); f = y, a++) _.h.Wb(i, y, f);
                                    }
                                for (D = 0; (g = S[D]); D++) {
                                    for (g.Y || _.a.extend(g, e(i, o, g.Aa, c, g.pb)), a = 0; (y = g.Y[a]); f = y, a++) _.h.Wb(i, y, f);
                                    !g.Ed && c && (c(g.Aa, g.Y, g.pb), (g.Ed = !0), (f = g.Y[g.Y.length - 1]));
                                }
                                for (h && i.ownerDocument.activeElement != h && h.focus(), p(s.beforeRemove, x), D = 0; D < x.length; ++D) x[D].Aa = t;
                                p(s.afterMove, I), p(s.afterAdd, k);
                            };
                        })(),
                        _.b("utils.setDomNodeChildrenFromArrayMapping", _.a.ec),
                        (_.ba = function () {
                            this.allowTemplateRewriting = !1;
                        }),
                        (_.ba.prototype = new _.ca()),
                        (_.ba.prototype.constructor = _.ba),
                        (_.ba.prototype.renderTemplateSource = function (e, n, t, i) {
                            return (n = 9 > _.a.W || !e.nodes ? null : e.nodes()) ? _.a.la(n.cloneNode(!0).childNodes) : ((e = e.text()), _.a.ua(e, i));
                        }),
                        (_.ba.Ma = new _.ba()),
                        _.gc(_.ba.Ma),
                        _.b("nativeTemplateEngine", _.ba),
                        (function () {
                            (_.$a = function () {
                                var e = (this.Hd = (function () {
                                    if (!d || !d.tmpl) return 0;
                                    try {
                                        if (0 <= d.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                                    } catch (e) {}
                                    return 1;
                                })());
                                (this.renderTemplateSource = function (n, t, i, a) {
                                    if (((a = a || c), (i = i || {}), 2 > e)) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                    var o = n.data("precompiled");
                                    return (
                                        o || ((o = n.text() || ""), (o = d.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}")), n.data("precompiled", o)),
                                        (n = [t.$data]),
                                        (t = d.extend({ koBindingContext: t }, i.templateOptions)),
                                        (t = d.tmpl(o, n, t)).appendTo(a.createElement("div")),
                                        (d.fragments = {}),
                                        t
                                    );
                                }),
                                    (this.createJavaScriptEvaluatorBlock = function (e) {
                                        return "{{ko_code ((function() { return " + e + " })()) }}";
                                    }),
                                    (this.addTemplate = function (e, n) {
                                        c.write("<script type='text/html' id='" + e + "'>" + n + "</script>");
                                    }),
                                    0 < e && ((d.tmpl.tag.ko_code = { open: "__.push($1 || '');" }), (d.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }));
                            }),
                                (_.$a.prototype = new _.ca()),
                                (_.$a.prototype.constructor = _.$a);
                            var e = new _.$a();
                            0 < e.Hd && _.gc(e), _.b("jqueryTmplTemplateEngine", _.$a);
                        })();
                });
        })();
    },
    function (e, n, t) {
        var i = t(0),
            a = t(3),
            o = t(1),
            r = t(4),
            s = t(13).getInstance(window.ServerData),
            c = a.String,
            l = o.Helper,
            d = i.KeyCode;
        function u(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        n.applyExtensions = function (e) {
            var n,
                i = 1,
                a = {};
            e.components.loaders.unshift({
                loadComponent: function (n, t, i) {
                    e.components.defaultLoader.loadComponent(n, t, function (n) {
                        var o;
                        t.enableExtensions &&
                            ((o = n.createViewModel),
                            (n.createViewModel = function (n, t) {
                                var i = o(n, t);
                                return (
                                    (function (n, t) {
                                        var i = t.componentId;
                                        if (i && a[i]) {
                                            var o = a[i],
                                                c = o.parentViewModel,
                                                l = o.alias,
                                                d = e.unwrap(o.events) || {};
                                            l &&
                                                ("string" == typeof l && (l = c[l]),
                                                e.isWritableObservable(l) &&
                                                    (l(n),
                                                    e.utils.domNodeDisposal.addDisposeCallback(t, function () {
                                                        l(null);
                                                    }))),
                                                e.utils.objectForEach(d, function (e, t) {
                                                    e &&
                                                        t &&
                                                        ("load" === e
                                                            ? t.call(c, n)
                                                            : ((e = "on" + e.charAt(0).toUpperCase() + e.substr(1)),
                                                              r.isComponentEvent(n[e]) &&
                                                                  n[e].subscribe(function (i) {
                                                                      return n[e].tracingOptions && s.logComponentEvent(n, n[e].tracingOptions, e, i), t.apply(c, i);
                                                                  })));
                                                });
                                        }
                                    })(i, t.element),
                                    i
                                );
                            })),
                            i(n);
                    });
                },
            }),
                (n = e.bindingHandlers.component.init),
                (e.bindingHandlers.component.init = function (t, o, r, s, c) {
                    var l = e.unwrap(o());
                    if ("string" != typeof l) {
                        var d = l.publicMethods,
                            u = l.event;
                        if (l.disabled) return;
                        if (d || u) {
                            var p = (t.componentId = i++);
                            (a[p] = { parentViewModel: s, alias: d, events: u }),
                                e.utils.domNodeDisposal.addDisposeCallback(t, function () {
                                    delete a[p];
                                });
                        }
                    }
                    return n(t, o, r, s, c);
                }),
                (e.bindingHandlers.pageViewComponent = {
                    init: function (n, t, i, a, o) {
                        var r = e.unwrap(t());
                        (r.publicMethods = a.viewInterfaces[o.$index()]), (r.event = r.event || {}), (r.event.load = a.view_onLoad), (r.event.switchView = a.view_onSwitchView);
                        return e.bindingHandlers.component.init(
                            n,
                            function () {
                                return r;
                            },
                            i,
                            a,
                            o
                        );
                    },
                }),
                (e.bindingHandlers.component.preprocess = function (e) {
                    return !e || ('"' !== e.charAt(0) && "'" !== e.charAt(0)) ? e : c.format("{ name: {0}, params: { } }", e);
                }),
                (e.bindingHandlers.defineGlobals = {
                    init: function (n, t, i, a, o) {
                        function r(e) {
                            var n = "";
                            try {
                                var t = document.createElement("div");
                                (t.innerHTML = e), t.childNodes.length > 0 && t.childNodes[0].value && (n = t.childNodes[0].value);
                            } catch (i) {}
                            return n;
                        }
                        var s = e.unwrap(t());
                        s.sFT = r(s.sFT) || s.sFT || r(s.sFTTag);
                        var c = o.extend({ svr: s, str: s.str, html: s.html, $location: e.observable() });
                        if (
                            (c.$location.subscribe(function (e) {
                                e && document.location.replace(e);
                            }),
                            i.has("bodyCssClass"))
                        ) {
                            var d = l.getIEVersion();
                            if (d) {
                                var u = { css: {} };
                                (u.css["IE_M" + d] = !0), e.applyBindingsToNode(n, u);
                            }
                            if (l.isHighContrast()) {
                                var p = l.getHighContrastTheme(),
                                    g = "black" === p;
                                if (g || "white" === p) {
                                    var f = g ? "theme-dark" : "theme-light",
                                        m = { css: {} };
                                    (m.css[f] = !0), e.applyBindingsToNode(n, m);
                                }
                            }
                        }
                        return e.applyBindingsToDescendants(c, n), { controlsDescendantBindings: !0 };
                    },
                }),
                (e.bindingHandlers.autoSubmit = {
                    update: function (n, t) {
                        var i = t();
                        e.unwrap(i) && (e.isWritableObservable(i) && i(!1), n.submit());
                    },
                }),
                (e.bindingHandlers.postRedirectForm = {
                    init: function (e) {
                        e.setAttribute("method", "POST"), e.setAttribute("aria-hidden", "true"), e.setAttribute("target", "_top");
                    },
                    update: function (n, t) {
                        var i = e.unwrap(t());
                        i &&
                            i.url &&
                            (n.setAttribute("action", i.url),
                            i.target && n.setAttribute("target", i.target),
                            i.postParams &&
                                e.utils.objectForEach(i.postParams, function (e, t) {
                                    "unsafe_" === e.substr(0, 7) && (e = e.substr(7)), (null !== t && t !== undefined) || (t = "");
                                    var i = document.createElement("input");
                                    i.setAttribute("type", "hidden"), i.setAttribute("name", e), i.setAttribute("value", t), n.appendChild(i);
                                }),
                            n.submit());
                    },
                }),
                (e.bindingHandlers.href = {
                    update: function (n, t) {
                        e.bindingHandlers.attr.update(n, function () {
                            return { href: t() };
                        });
                    },
                }),
                (e.bindingHandlers.placeholder = {
                    update: function (n, t) {
                        e.bindingHandlers.attr.update(n, function () {
                            return { placeholder: t() };
                        });
                    },
                }),
                (e.bindingHandlers.ariaLabel = {
                    update: function (n, t) {
                        e.bindingHandlers.attr.update(n, function () {
                            return { "aria-label": t() };
                        });
                    },
                }),
                (e.bindingHandlers.ariaDescribedBy = {
                    update: function (n, t) {
                        e.bindingHandlers.attr.update(n, function () {
                            return { "aria-describedby": t() };
                        });
                    },
                }),
                (e.bindingHandlers.htmlWithBindings = {
                    init: function () {
                        return { controlsDescendantBindings: !0 };
                    },
                    update: function (n, t, i, a, o) {
                        e.utils.setHtml(n, t());
                        var r = i.get("childBindings");
                        if (r)
                            for (var s in r)
                                if (r.hasOwnProperty(s)) {
                                    var c = document.getElementById(s);
                                    c && e.applyBindingsToNode(c, r[s], o);
                                }
                        e.applyBindingsToDescendants(o, n);
                    },
                }),
                (e.bindingHandlers.backgroundImage = {
                    update: function (e, n) {
                        var t = n();
                        function i(n) {
                            e.style.backgroundImage = n ? c.format("url('{0}')", n) : "";
                        }
                        var a = window.$Loader,
                            o = new Image();
                        (o.onerror = function () {
                            a && a.On && a.On(o, !0, i);
                        }),
                            (o.src = t),
                            i(t);
                    },
                }),
                (e.bindingHandlers.wizardCssCheck = {
                    update: function (e, n, t, i, a) {
                        if (CSSLoadFail()) {
                            var o = document.getElementById("mainDiv");
                            o && (o.style.display = "none");
                        }
                    },
                }),
                (e.bindingHandlers.withProperties = {
                    init: function (n, t, i, a, o) {
                        var r = o.extend(t);
                        return e.applyBindingsToDescendants(r, n), { controlsDescendantBindings: !0 };
                    },
                }),
                (e.bindingHandlers.clickExpr = {
                    preprocess: function (e) {
                        return "function ($data, $event) { " + e + " }";
                    },
                    init: function (n, t, i, a, o) {
                        return e.bindingHandlers.click.init.call(this, n, t, i, a, o);
                    },
                }),
                (e.bindingHandlers.imgSrc = {
                    init: function (e) {
                        var n = window.$Loader;
                        (e.onerror = function () {
                            if (n && n.On)
                                return n.On(e, !0, function (n) {
                                    e.src = n;
                                });
                        }),
                            l.isSvgImgSupported() ? (e.src = e.getAttribute("svgSrc")) : (e.src = e.getAttribute("pngSrc"));
                    },
                }),
                (e.bindingHandlers.svgSrc = {
                    update: function (n, t, i) {
                        var a = e.unwrap(t());
                        e.bindingHandlers.attr.update(n, function () {
                            a && l.isSvgImgSupported() && (a = a.replace(new RegExp(".png$"), ".svg"));
                            var e = i.get("format");
                            if (e) for (var n in e) e.hasOwnProperty(n) && !e[n] && (a = a.replace(n, ""));
                            return { src: a };
                        });
                    },
                }),
                (e.bindingHandlers.injectScript = {
                    init: function (n, t) {
                        var i = e.unwrap(t()),
                            a = document.createElement("script");
                        return (a.type = "text/javascript"), (a.src = i), n.appendChild(a), { controlsDescendantBindings: !0 };
                    },
                }),
                (e.bindingHandlers.injectIframe = {
                    init: function (n, t) {
                        var i = e.unwrap(t());
                        if (i && i.url) {
                            var a = document.createElement("iframe");
                            (a.height = "0"),
                                (a.width = "0"),
                                (a.style.display = "none"),
                                (a.src = e.unwrap(i.url)),
                                i.onload &&
                                    (a.onload = function () {
                                        i.onload(a);
                                    }),
                                n.appendChild(a);
                        }
                        return { controlsDescendantBindings: !0 };
                    },
                }),
                (e.bindingHandlers.hasFocusEx = {
                    init: e.bindingHandlers.hasFocus.init,
                    update: function (n, t, i, a, o) {
                        if ((e.bindingHandlers.hasFocus.update(n, t, i, a, o), e.unwrap(t()))) {
                            if (n.value) {
                                var r = n.value.length;
                                if ("selectionStart" in n)
                                    setTimeout(function () {
                                        try {
                                            (n.selectionStart = r), (n.selectionEnd = r);
                                        } catch (e) {}
                                    }, 0);
                                else if ("createTextRange" in n) {
                                    var s = n.createTextRange();
                                    s.moveStart("character", r), s.collapse(), s.moveEnd("character", r), s.select();
                                }
                            }
                            n.focus();
                        } else n.blur();
                    },
                }),
                (e.bindingHandlers.preventTabbing = {
                    init: function (n, t) {
                        var i = e.unwrap(t()) || {};
                        "none" !== i.direction &&
                            e.utils.registerEventHandler(n, "keydown", function (e) {
                                return (
                                    ("Tab" !== (e = e || window.event).code && e.keyCode !== d.Tab) ||
                                    !(!i.direction || "both" === i.direction || ("up" === i.direction && e.shiftKey) || ("down" === i.direction && !e.shiftKey)) ||
                                    (u(e), !1)
                                );
                            });
                    },
                }),
                (e.bindingHandlers.ariaHidden = {
                    update: function (n, t) {
                        e.bindingHandlers.attr.update(n, function () {
                            return { "aria-hidden": e.unwrap(t()) };
                        });
                    },
                }),
                (e.bindingHandlers.moveOffScreen = {
                    update: function (n, t) {
                        var i = e.unwrap(t());
                        if ("object" != typeof i) {
                            var a = !1 !== i;
                            i = { setClass: a, setTabIndex: a, setAriaHidden: a };
                        }
                        e.bindingHandlers.css.update(n, function () {
                            return { moveOffScreen: !1 !== i.setClass };
                        }),
                            e.bindingHandlers.attr.update(n, function () {
                                return { tabindex: !1 !== i.setTabIndex ? -1 : 0 };
                            }),
                            e.bindingHandlers.ariaHidden.update(n, function () {
                                return !1 !== i.setAriaHidden;
                            });
                    },
                }),
                (e.bindingHandlers.pressEnter = {
                    init: function (n, t, i, a, o) {
                        var r = e.unwrap(t()),
                            s = o.$data;
                        e.utils.registerEventHandler(n, "keydown", function (e) {
                            return ("Enter" !== (e = e || window.event).code && e.keyCode !== d.Enter) || (u(e), r(s, e), !1);
                        });
                    },
                }),
                (e.bindingHandlers.isScrolledToBottom = {
                    init: function (n, t) {
                        var i = e.unwrap(t()),
                            a = i.disabled,
                            o = i.value,
                            r = i.sticky;
                        function s() {
                            var e = n.scrollTop + n.offsetHeight >= n.scrollHeight;
                            return o(e), r && e && c(), e;
                        }
                        function c() {
                            l.removeEventListener(n, "scroll", s), l.removeEventListener(window, "resize", s);
                        }
                        !a && e.isWritableObservable(o) && ((r && s()) || (l.addEventListener(n, "scroll", s), l.addEventListener(window, "resize", s), e.utils.domNodeDisposal.addDisposeCallback(n, c)));
                    },
                    update: function (n, t) {
                        e.unwrap(t()).value() && (n.scrollTop = n.scrollHeight);
                    },
                }),
                (e.bindingHandlers.animationEnd = {
                    init: function (n, t, i, a, o) {
                        var r = l.getAnimationEndEventName();
                        r &&
                            e.bindingHandlers.event.init(
                                n,
                                function () {
                                    var e = {};
                                    return (e[r] = t()), e;
                                },
                                i,
                                a,
                                o
                            );
                    },
                }),
                (e.bindingHandlers.htmlWithMods = {
                    init: function (n, t, i) {
                        var a = e.unwrap(t());
                        if (a) {
                            var o = i.get("htmlMods");
                            if (o && o.filterLinks) {
                                var r = document.createElement("div");
                                r.innerHTML = a;
                                for (var s = r.getElementsByTagName("a"), c = s.length - 1; c >= 0; c--) {
                                    var l = s[c],
                                        d = l.innerText,
                                        u = l.protocol;
                                    if ("mailto:" === u || "tel:" === u) {
                                        if (!1 !== o.allowContactProtocols) continue;
                                        d = g(d, l.pathname);
                                    } else d = g(d, l.getAttribute("href"));
                                    var p = document.createElement("span");
                                    (p.innerText = d), l.parentNode.replaceChild(p, l);
                                }
                                a = r.innerHTML;
                            }
                            e.utils.setHtml(n, a);
                        }
                        function g(e, n) {
                            return e !== n ? e + " (" + n + ")" : e;
                        }
                    },
                }),
                (e.bindingHandlers.externalCss = {
                    update: function (n, t) {
                        e.utils.objectForEach(e.unwrap(t()), function (t, i) {
                            var a = e.unwrap(i);
                            e.utils.toggleDomNodeCssClass(n, t, a), e.utils.toggleDomNodeCssClass(n, "ext-" + t, a);
                        });
                    },
                }),
                (e.virtualElements.allowedBindings.withProperties = !0),
                ((e.options = e.options || {}).createChildContextWithAs = !0),
                t(61).applyExtensions(e);
        };
    },
    function (e, n) {
        e.exports = {
            format: function (e) {
                if (e) for (var n = 1; n < arguments.length; n++) e = e.replace(new RegExp("\\{" + (n - 1) + "\\}", "g"), arguments[n]);
                return e;
            },
        };
    },
    function (e, n, t) {
        var i = t(3),
            a = t(1),
            o = i.String;
        n.applyExtensions = function (e) {
            var n;
            (n = e.bindingProvider.instance.preprocessNode),
                (e.bindingProvider.instance.preprocessNode = function (t) {
                    if (1 === t.nodeType && t.tagName && "select" === t.tagName.toLowerCase() && a.Helper.isIEOlderThan(8)) {
                        var i = t.getAttribute("data-bind");
                        if (i) {
                            var r = [],
                                s = o.doubleSplit(i, ",", ":", !1, o.trim),
                                c = { hasFocus: "hasFocusBasic" };
                            e.utils.objectForEach(s, function (e) {
                                var n = c[e] || e + "Ex";
                                r.push(n + ":" + s[e]);
                            }),
                                t.setAttribute("data-bind", r.join());
                        }
                    }
                    n && n(t);
                }),
                (e.bindingHandlers.optionsEx = {
                    init: function (n, t, i, a, o) {
                        var r = e.unwrap(t()),
                            s = i.get("optionsValueEx"),
                            c = i.get("optionsTextEx"),
                            l = i.get("valueEx");
                        function d(n, t) {
                            var i = typeof t;
                            return "function" === i ? e.unwrap(t(n)) : "string" === i && n[t] ? ("function" == typeof n[t] ? e.unwrap(n[t]()) : e.unwrap(n[t])) : void 0;
                        }
                        e.utils.arrayForEach(r, function (e) {
                            var t = document.createElement("option");
                            (t.$data = e), s && (t.value = d(e, s));
                            var i = d(e, c),
                                a = document.createTextNode(i);
                            t.appendChild(a), n.appendChild(t);
                        }),
                            e.applyBindingsToNode(n, {
                                event: {
                                    change: function () {
                                        var e = n.options[n.selectedIndex].$data;
                                        n.$data = e;
                                        var t = l.peek();
                                        l("object" == typeof t ? e : n.value);
                                    },
                                },
                            });
                        var u,
                            p = l.subscribe(function (e) {
                                if (e) {
                                    var t = typeof e,
                                        i = "object" === t,
                                        a = "string" === t;
                                    if ((i && n.$data !== e) || (a && n.value !== e))
                                        for (var o = 0; o < n.options.length; o++) {
                                            var r = n.options[o];
                                            if ((i && r.$data === e) || (a && r.value === e)) return (r.selected = !0), void (n.$data = r.$data);
                                        }
                                }
                            });
                        (u = p),
                            e.utils.domNodeDisposal.addDisposeCallback(n, function () {
                                u.dispose();
                            }),
                            l.peek() ? l.valueHasMutated() : (l(n.options[0].value), (n.$data = n.options[0].$data));
                    },
                }),
                (e.bindingHandlers.hasFocusBasic = {
                    init: e.bindingHandlers.hasFocus.init,
                    update: function (n, t) {
                        e.unwrap(t()) ? n.focus() : n.blur();
                    },
                });
        };
    },
    function (e, n) {
        var t = window;
        t.StringRepository = e.exports =
            t.StringRepository ||
            new (function () {
                var e = {};
                (this.registerSource = function (n, t) {
                    (e[n] = e[n] || []), e[n].push(t);
                }),
                    (this.getStrings = function (n, t) {
                        for (var i = {}, a = e[n] || [], o = 0, r = a.length; o < r; o++) a[o](i, t);
                        return i;
                    });
            })();
    },
    function (e, n, t) {
        var i = t(2),
            a = t(3),
            o = t(11),
            r = t(42),
            s = t(0),
            c = t(1),
            l = t(250),
            d = t(43),
            u = t(5),
            p = t(20),
            g = t(44),
            f = (t(15), t(10)),
            m = t(13).getInstance(window.ServerData),
            h = t(6),
            v = t(253);
        var b = window,
            S = s.Error,
            _ = s.EstsError,
            y = a.String,
            w = a.Object,
            C = a.ErrorData,
            T = s.LoginMode,
            x = s.PaginatedState,
            I = s.CredentialType,
            k = s.AnimationState,
            P = s.AnimationName,
            D = c.Helper,
            E = c.QueryString,
            A = c.Cookies,
            R = p.GctResultAction,
            L = p.GctRequestHelperFlags,
            N = r.CanaryValidationSuccessAction;
        e.exports = function (e) {
            var n = this,
                a = e,
                s = [],
                c = null,
                U = {},
                F = [],
                O = null,
                B = !1,
                M = null,
                V = null,
                j = !1,
                H = i.observable(),
                W = i.observable(!1),
                G = i.observable(!1),
                q = a.str,
                z = a.html,
                $ = a.iLoginMode,
                K = a.iLBodyDefault,
                X = a.fPOST_ForceSignin,
                J = a.sFTTag,
                Q = a.sFTCookieName,
                Y = a.sCtx,
                Z = a.fIsCloudBuild,
                ee = a.fAllowCancel,
                ne = a.urlPost,
                te = a.urlCancel,
                ie = a.urlBack,
                ae = a.urlResetPassword,
                oe = a.urlHIPScript,
                re = a.sPrefillUsername,
                se = a.sSignInUsername,
                ce = a.sPOST_Username,
                le = a.sZtdUpnHint,
                de = a.sFoundMSAs || "",
                ue = a.fLockUsername,
                pe = a.sErrTxt,
                ge = a.arrValErrs,
                fe = a.fPrefixCookieDomainEnabled,
                me = a.staticTenantBranding,
                he = a.oAppCobranding,
                ve = a.iBackgroundImage,
                be = a.sResetPasswordPrefillParam || "mn",
                Se = a.sRawQueryString,
                _e = a.arrSessions,
                ye = a.urlGoToAADError,
                we = a.oUrlOtherIdpPostParams,
                Ce = a.oCancelPostParams,
                Te = a.desktopSsoConfig,
                xe = a.oGetCredTypeResult,
                Ie = a.sPOST_PaginatedLoginState,
                ke = a.sPOST_PaginatedLoginStateRNGCSLK,
                Pe = a.sPOST_PaginatedLoginStateRNGCEntropy,
                De = a.sPOST_PaginatedLoginStateRNGCDefaultType,
                Ee = a.fPOST_IsSignupPost,
                Ae = a.arrFidoAllowList,
                Re = a.iPromotedFedCredType,
                Le = a.urlLinkedInFed,
                Ne = a.urlGitHubFed,
                Ue = a.fEnableCssAnimation,
                Fe = a.sProofConfirm,
                Oe = !!a.fIsFidoSupported,
                Be = !!a.sExternalCanary,
                Me = a.iSessionPullType,
                Ve = a.fIsDebugTracingEnabled,
                je = a.fDetectBrowserCapabilities,
                He = a.fIsWriteWloptCookieDisallowed,
                We = a.urlOtherIdpSignup,
                Ge = a.urlGoogleFedSignup,
                qe = a.urlFacebookFedSignup,
                ze = a.isGlobalTenant,
                $e = (a.fAutopilotProvisioningNavigation, a.fShowTilesAfterSessionPull),
                Ke = a.fCBShowSignUp,
                Xe = a.urlSignUp,
                Je = a.fShowSignInOptionsAsButton,
                Qe = a.fShowForgotUsernameLink;
            function Ye(e, t) {
                var i = n.paginationControlMethods(),
                    a = i.getCurrentView(),
                    o = i.getSharedDataItem("otherIdpRedirectUrl");
                (o = E.add(o, t)),
                    i.setSharedDataItem("otherIdpRedirectUrl", o),
                    (s = s.concat(g.mergeSessions(i.getSharedDataItem("sessions"), e))),
                    a && n.asyncTileRequestCount <= 0 && (a.viewId === x.Tiles ? (a.viewInterface.addNewSessions(s), (s = [])) : a.viewId === x.Username && (!n.newSession() && s.length > 0 && n.newSession(s[0]), (s = [])));
            }
            function Ze(e, i) {
                e
                    ? u
                          .resolve()
                          .then(
                              function () {
                                  t(24), n.showDebugDetails(!0), i && n.debugDetailsMethods() && n.debugDetailsMethods().activateFocus();
                              }.bind(null, t)
                          )
                          ["catch"](t.oe)
                    : n.showDebugDetails(!1),
                    !e && n.footerMethods() && n.footerMethods().focusMoreInfoLink();
            }
            function en(e) {
                if (!e || !e.confirmationViewId) throw "No view ID was specified to handle the canary validation failure.";
                (O = e.confirmationViewId), (n.postCanaryValidationAction = e.postConfirmationAction);
            }
            function nn(e) {
                n.postCanaryValidationAction = e;
            }
            function tn(e) {
                var n = "";
                try {
                    var t = document.createElement("div");
                    (t.innerHTML = e), t.childNodes.length > 0 && t.childNodes[0].value && (n = t.childNodes[0].value);
                } catch (i) {}
                return n;
            }
            function an() {
                return n.paginationControlMethods() && n.paginationControlMethods().currentViewHasMetadata("showFedCredButton");
            }
            function on() {
                return an() && n.otherSigninOptions() && n.otherSigninOptions().length > 0;
            }
            function rn(e, t) {
                var i = o.loadTenantBranding(xe && xe.EstsProperties && xe.EstsProperties.UserTenantBranding),
                    r = o.loadTenantBranding(me),
                    s = o.getMergedBranding(r, i, ze);
                if (
                    ((n.initialSharedData = {
                        username: y.cleanseUsername(e),
                        displayName: e,
                        remoteNgcParams: { sessionIdentifier: ke, entropy: Pe, defaultType: De },
                        otcParams: {},
                        fidoParams: { allowList: Ae },
                        hipRequiredForUsername: oe ? y.cleanseUsername(e) : "",
                        sessions: _e || [],
                        flowToken: tn(a.sFT) || a.sFT || tn(J),
                        userTenantBranding: s || {},
                        callMetadata: {},
                        availableCreds: [],
                        evictedCreds: [],
                        otcCredential: {},
                        showCredViewBrandingDesc: !(!he || !he.showDescOnCredViews),
                        unsafe_desktopSsoDomainToUse: Te && Te.startDesktopSsoOnPageLoad ? Te.hintedDomainName : null,
                        isSignupPost: Ee,
                        otherIdpRedirectUrl: ye,
                    }),
                    xe)
                ) {
                    (parseInt(Ie) || x.Unknown) === x.OneTimeCode &&
                        (xe.Credentials && xe.Credentials.PrefCredential !== I.PublicIdentifierCode && xe.Credentials.PrefCredential !== I.NoPreferredCredential && (xe.Credentials.PrefCredential = I.OneTimeCode),
                        Fe && (n.initialSharedData.proofConfirmation = Fe));
                    var l = c.getGctSharedData(xe, t, !1);
                    (n.initialSharedData.preferredCredential = l.preferredCredential),
                        (n.initialSharedData.availableCreds = l.availableCreds || []),
                        (n.initialSharedData.evictedCreds = l.evictedCreds || []),
                        (n.initialSharedData.otcCredential = l.otcCredential),
                        (n.initialSharedData.otcParams = l.otcParams),
                        (n.initialSharedData.idpRedirectUrl = l.fedRedirectParams.idpRedirectUrl),
                        (n.initialSharedData.idpRedirectPostParams = l.fedRedirectParams.idpRedirectPostParams),
                        (n.initialSharedData.idpRedirectProvider = l.fedRedirectParams.idpRedirectProvider);
                }
                ($ === T.Signup || (Ke && !Xe)) &&
                    (n.initialSharedData.availableSignupCreds = [].concat(
                        We ? { credType: I.OtherMicrosoftIdpFederation, redirectUrl: We } : [],
                        Ge ? { credType: I.Google, redirectUrl: Ge } : [],
                        qe ? { credType: I.Facebook, redirectUrl: qe } : []
                    ));
            }
            function sn(e, t) {
                n.isFidoSupported(e),
                    rn(t, e),
                    (function (e, t) {
                        var a = [T.ForceSignin, T.ForceSigninMobile, T.ForceSigninHost],
                            o = -1 !== i.utils.arrayIndexOf(a, $) || X,
                            r = !o && _e && _e.length ? x.Tiles : x.Username,
                            s = r;
                        switch ($) {
                            case T.LWAConsent:
                                r = s = x.LwaConsent;
                                break;
                            case T.Tiles:
                                r = s = x.Tiles;
                                break;
                            case T.FedConflict:
                                r = s = x.FedConflict;
                                break;
                            case T.ProofFedConflict:
                                r = s = x.ProofFedConflict;
                                break;
                            case T.AadFedConflict:
                                r = s = x.AadFedConflict;
                                break;
                            case T.FedLink:
                                r = s = x.FedLink;
                                break;
                            case T.Win10Host_HIP_Login:
                            case T.Win10Host_HIP_Login_PhoneSignIn:
                                r = s = x.Password;
                                break;
                            case T.Fido:
                                r = s = x.Fido;
                                break;
                            case T.UserCredentialPolicyBlocked:
                                r = s = x.CredentialPicker;
                                break;
                            case T.FedBoundLink:
                                s = x.FedLink;
                                break;
                            case T.Signup:
                                s = n.initialSharedData.availableSignupCreds.length > 0 ? x.SignupCredentialPicker : x.SignupUsername;
                                break;
                            case T.RemoteConnectLocation:
                                r = s = x.RemoteConnectLocation;
                                break;
                            default:
                                var l = parseInt(Ie) || x.Unknown;
                                if (l !== x.Unknown && l !== x.FetchSessionsProgress) s = l;
                                else if (xe) {
                                    var d = c.getResult(n.initialSharedData.otherIdpRedirectUrl, e, xe, t);
                                    switch (d.action) {
                                        case R.ShowError:
                                            s = $ === T.FetchSessionsProgress ? x.FetchSessionsProgress : r;
                                            break;
                                        case R.SwitchView:
                                            i.utils.extend(n.initialSharedData, i.utils.extend(d.sharedData, d.viewParams || {})), (s = $ === T.FetchSessionsProgress ? x.FetchSessionsProgress : d.viewId);
                                            break;
                                        case R.Redirect:
                                            if ($ !== T.FetchSessionsProgress || !$e) {
                                                n.view_onRedirect({ url: d.redirectUrl, eventOptions: { eventId: d.eventId } }, d.redirectPostParams, d.isIdpRedirect);
                                                break;
                                            }
                                    }
                                } else $ === T.FetchSessionsProgress ? (s = x.FetchSessionsProgress) : ce && n.getServerError() && (s = x.Username);
                                (re || o || ue || le) && (r = s);
                        }
                        (n.initialViewId = r), (n.currentViewId = s);
                    })(t, e);
            }
            function cn(e, n) {
                return y.format("./signin-{0}{1}.{2}", e, n ? "-white" : "", B ? "svg" : "png");
            }
            function ln(e, n) {
                n ? document.location.replace(e) : document.location.assign(e);
            }
            (n.learnMore = null),
                (n.initialViewId = null),
                (n.currentViewId = null),
                (n.postCanaryValidationAction = null),
                (n.initialSharedData = {}),
                (n.prefillNames = []),
                (n.agreementType = null),
                (n.asyncTileRequestCount = 0),
                (n.useCssAnimations = !1),
                (n.sessionPullType = Me),
                (n.isDebugTracingEnabled = Ve),
                (n.paginationControlMethods = i.observable()),
                (n.backgroundControlMethods = i.observable()),
                (n.learnMoreMethods = i.observable()),
                (n.instrumentationMethods = i.observable()),
                (n.footerMethods = i.observable()),
                (n.debugDetailsMethods = i.observable()),
                (n.asyncInitReady = i.observable(!1)),
                (n.ctx = i.observable()),
                (n.postUrl = i.observable()),
                (n.userClickedCentipede = i.observable(!1)),
                (n.pageSubmitted = i.observable(!1)),
                (n.forceSubmit = i.observable(!1)),
                (n.ariaHidden = i.observable(!1)),
                (n.wasLearnMoreShown = i.observable(!1)),
                (n.postRedirect = i.observable()),
                (n.postedLoginStateViewId = i.observable()),
                (n.postedLoginStateViewRNGCEntropy = i.observable()),
                (n.postedLoginStateViewRNGCDefaultType = i.observable()),
                (n.postedLoginStateViewRNGCSLK = i.observable()),
                (n.password = i.observable()),
                (n.isRequestPending = i.observable(!1)),
                (n.showLightboxProgress = i.observable(!1)),
                (n.bannerLogoUrl = i.observable()),
                (n.backgroundLogoUrl = i.observable()),
                (n.useDefaultBackground = i.observable(!1)),
                (n.newSession = i.observable()),
                (n.fadeInLightBox = i.observable(!1)),
                (n.activeDialog = i.observable()),
                (n.isFidoSupported = i.observable(!1).extend({ logValue: m.getPropertyLogOption(n, { eventId: h.ClientTracingEventIds.PropertyValue_LoginPaginatedPageView_IsFidoSupported, tracingChange: !1 }) })),
                (n.showDebugDetails = i.observable(!1)),
                (n.isSignupPost = i.observable(!1)),
                (n.availableCredsWithoutUsername = i.observableArray([])),
                (n.animate = i.utils.extend(i.observable(P.None), {
                    isSlideOutNext: i.pureComputed(function () {
                        return n.animate() === P.SlideOutNext;
                    }),
                    isSlideInNext: i.pureComputed(function () {
                        return n.animate() === P.SlideInNext;
                    }),
                    isSlideOutBack: i.pureComputed(function () {
                        return n.animate() === P.SlideOutBack;
                    }),
                    isSlideInBack: i.pureComputed(function () {
                        return n.animate() === P.SlideInBack;
                    }),
                })),
                (n.flowToken = i.pureComputed(function () {
                    return H() || a.sFT;
                })),
                (n.newSessionInfo = i.pureComputed(function () {
                    if (n.newSession()) {
                        var e = {},
                            t = n.newSession(),
                            i = D.htmlUnescape(t.displayName),
                            a = D.htmlUnescape(t.fullName),
                            o = t.isSignedIn && a;
                        return o ? ((e.unsafe_newSessionFullName = o), (e.unsafe_newSessionDisplayName = i)) : (e.unsafe_newSessionFullName = i), e;
                    }
                    return null;
                })),
                (n.showFedCredButtons = i.pureComputed(function () {
                    return n.useCssAnimations ? (n.animate(P.None), W()) : on();
                })),
                (n.otherSigninOptions = i.pureComputed(function () {
                    var e = [],
                        t = [];
                    if (!an()) return null;
                    Re && e.push(Re),
                        i.utils.arrayForEach(e, function (e) {
                            t.push(
                                (function (e) {
                                    var n = null,
                                        t = null,
                                        i = null,
                                        a = null;
                                    switch (e) {
                                        case I.LinkedIn:
                                            (n = q.CT_PWD_STR_UseLinkedIn_Link), (t = Le), (i = v(cn("linkedin", !0))), (a = v(cn("linkedin", !1)));
                                            break;
                                        case I.GitHub:
                                            (n = q.CT_PWD_STR_UseGitHub_Link), (t = Ne), (i = v(cn("github", !0))), (a = v(cn("github", !1)));
                                    }
                                    return { text: n, signInUrl: t, lightIconUrl: i, darkIconUrl: a, credType: e, testId: "fedCredButton" + e };
                                })(e)
                            );
                        });
                    var a = n.availableCredsWithoutUsername().length > 0 || Qe,
                        o = 1 === n.availableCredsWithoutUsername().length && G();
                    return Je && ((!j && a) || o) && t.push({ text: q.CT_PWD_STR_SwitchToCredPicker_Link_NoUser, lightIconUrl: v(cn("options", !0)), darkIconUrl: v(cn("options", !1)), testId: "signinOptions" }), t;
                })),
                (n.getServerError = function () {
                    var e = null,
                        t = null;
                    if (pe) e = pe;
                    else if (ge && ge.length)
                        switch (ge[0]) {
                            case S.EmptyFields:
                            case S.UsernameInvalid:
                            case S.PP_E_MISSING_MEMBERNAME:
                            case S.PP_E_NAME_INVALID:
                            case S.PP_E_EMAIL_RIGHT_TOO_LONG:
                            case S.PP_E_NAME_TOO_LONG:
                            case S.PP_E_INVALID_PHONENUMBER:
                            case S.PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION:
                                e = q.CT_PWD_STR_Error_InvalidUsername;
                                break;
                            case S.PP_E_EXCLUDED:
                                e = z.CT_PWD_STR_Error_WrongCreds;
                                break;
                            case S.PP_E_BAD_PASSWORD:
                            case S.PP_E_PREVIOUS_PASSWORD:
                            case S.PP_E_INVALID_MEMBERNAME:
                            case S.PP_E_DB_MEMBERDOESNOTEXIST:
                            case S.PP_E_PE_RULEFALSE:
                            case _.InvalidUserNameOrPassword:
                            case _.ProtectedKeyMisuse:
                            case _.InvalidPasswordExpiredPassword:
                            case _.UserAccountNotFound:
                            case _.UserAccountDeleted:
                            case _.UserAccountNotFoundNotConfiguredForRemoteNgc:
                            case _.UserAccountNotFoundFailedToCreateRemoteSignIn:
                            case _.UserUnauthorizedApiVersionNotSupported:
                            case _.UserUnauthorizedMsaGuestUsersNotSupported:
                            case _.InvalidTenantName:
                            case _.InvalidTenantNameEmptyGuidIdentifier:
                            case _.InvalidTenantNameEmptyIdentifier:
                            case _.InvalidTenantNameFormat:
                            case _.InvalidDomainName:
                                e = z[oe ? "CT_IHL_STR_Error_WrongHip" : "CT_PWD_STR_Error_WrongCreds"];
                                break;
                            case _.UserUnauthorized:
                                e = z.CT_PWD_STR_Error_UsernameNotExist_Guest_SignupAllowed;
                                break;
                            case _.InvalidPassword:
                                e = q.CT_PWD_STR_Error_InvalidPassword;
                                break;
                            case S.PP_E_OLD_SKYPE_PASSWORD:
                                e = q.CT_IL_STR_Error_OldSkypePwd;
                                break;
                            case S.PP_E_ALIAS_AUTH_NOTPERMITTED:
                                e = q.CT_PWD_STR_Error_AliasNotAllowed;
                                break;
                            case S.PP_E_FEDERATION_INLINELOGIN_DISALLOWED:
                                e = q.CT_PWD_STR_Error_FedNotAllowed;
                                break;
                            case S.PasswordEmpty:
                            case S.PP_E_MISSING_PASSWORD:
                            case _.InvalidPasswordNullPassword:
                                e = q.CT_PWD_STR_Error_MissingPassword;
                                break;
                            case S.PP_E_IDP_LINKEDIN_BINDING_NOT_ALLOWED:
                                e = q.CT_STR_Error_FedUserNotFound_LinkedIn;
                                break;
                            case S.PP_E_IDP_GOOGLE_BINDING_NOT_ALLOWED:
                                e = q.CT_STR_Error_FedUserNotFound_Google;
                                break;
                            case S.PP_E_IDP_GITHUB_BINDING_NOT_ALLOWED:
                                e = q.CT_STR_Error_FedUserNotFound_GitHub;
                                break;
                            case S.PP_E_OTT_DATA_INVALID:
                            case S.PP_E_OTT_ALREADY_CONSUMED:
                            case S.PP_E_OTT_INVALID_PURPOSE:
                            case S.PP_E_PPSA_RPT_NOTOADDRESS:
                            case _.InvalidOneTimePasscode:
                            case _.ExpiredOneTimePasscode:
                            case _.OneTimePasscodeCacheError:
                            case _.OneTimePasscodeEntryNotExist:
                            case _.PublicIdentifierSasEndCallNonRetriableError:
                            case _.PublicIdentifierSasEndCallRetriableError:
                                e = q.CT_OTC_STR_Error_CodeIncorrect;
                                break;
                            case _.FlowTokenExpired:
                                e = q.CT_PWD_STR_Error_FlowTokenExpired;
                                break;
                            case _.IdsLocked:
                                e = q.CT_PWD_STR_Error_IdsLocked;
                                break;
                            case _.UserDisabled:
                                e = q.CT_PWD_STR_Error_UserDisabled;
                                break;
                            case _.MissingCustomSigningKey:
                                e = q.CT_PWD_STR_Error_MissingCustomSigningKey;
                                break;
                            case _.BlockedAdalVersion:
                                e = q.CT_PWD_STR_Error_BlockedAdalVersion;
                                break;
                            case _.BlockedClientId:
                                e = q.CT_PWD_STR_Error_BlockedClientId;
                                break;
                            case _.UserAccountSelectionInvalid:
                                e = q.CT_PWD_STR_Error_SelectedAccountInvalid;
                                break;
                            case _.IdpLoopDetected:
                                e = q.CT_PWD_STR_Error_IdpLoopDetected;
                                break;
                            case _.InvalidPasswordLastPasswordUsed:
                                e = q.CT_PWD_STR_Error_LastPasswordUsed;
                                break;
                            case _.PhoneSignInBlockedByUserCredentialPolicy:
                                (e = q.STR_UserCredentialPolicy_Blocked), (t = q.STR_UserCredentialPolicy_Blocked_PhoneSignIn_Remediation);
                                break;
                            case _.PublicIdentifierAuthUserNotAllowedByPolicy:
                                e = q.STR_UserCredentialPolicy_Blocked;
                                break;
                            case _.FidoBlockedByPolicy:
                                (e = q.STR_UserCredentialPolicy_Blocked), (t = q.STR_UserCredentialPolicy_Blocked_Fido_Remediation);
                                break;
                            case _.UserAccountNotFoundForFidoSignIn:
                                e = q.CT_FIDO_STR_Error_NotFound;
                                break;
                            case _.AccessPassBlockedByPolicy:
                                e = q.CT_PWD_STR_Error_AccessPassBlocked;
                                break;
                            case _.InvalidAccessPass:
                                e = q.CT_PWD_STR_Error_IncorrectAccessPass;
                                break;
                            case _.AccessPassExpired:
                                e = q.CT_PWD_STR_Error_AccessPassExpired;
                                break;
                            case _.AccessPassAlreadyUsed:
                                e = q.CT_PWD_STR_Error_AccessPassAlreadyUsed;
                                break;
                            default:
                                e = null;
                        }
                    else if (xe) {
                        var i = c.getResult(n.initialSharedData.otherIdpRedirectUrl, n.initialSharedData.displayName, xe, !1);
                        i.action === R.ShowError && (e = i.error);
                    }
                    return e ? new C(e, t) : null;
                }),
                (n.fetchSessions_onUpdateUserTiles = function (e, n) {
                    setTimeout(function () {
                        Ye(e, n);
                    });
                }),
                (n.fetchSessions_onIncrementAsyncTileRequestCount = function () {
                    n.asyncTileRequestCount++;
                }),
                (n.fetchSessions_onDecrementAsyncTileRequestCount = function () {
                    n.asyncTileRequestCount--;
                }),
                (n.fetchSessions_onExecuteGctResult = function () {
                    f.throwUnhandledExceptionOnRejection(
                        u.all(F).then(function () {
                            var e = c.getResult(n.initialSharedData.otherIdpRedirectUrl, D.htmlUnescape(re), xe, n.isFidoSupported());
                            switch (e.action) {
                                case R.ShowError:
                                    n.paginationControlMethods().view_onSwitchView(x.Username, !0);
                                    break;
                                case R.SwitchView:
                                    n.paginationControlMethods().view_onSwitchView(e.viewId, !0);
                                    break;
                                case R.Redirect:
                                    n.view_onRedirect({ url: e.redirectUrl, eventOptions: { eventId: e.eventId } });
                            }
                        })
                    );
                }),
                (n.paginationControl_onCancel = function () {
                    if (ee && te) {
                        var e = te;
                        se && (Ce ? (Ce.username = se) : (e = E.appendOrReplace(e, "username", se))), n.view_onRedirect(e, Ce);
                    } else ie && (n.view_onSetPendingRequest(!0), ln(ie, !0));
                }),
                (n.view_onSubmitReady = function (e) {
                    var t = n.paginationControlMethods().getCurrentViewId(),
                        i = n.paginationControlMethods().getSharedData();
                    n.postedLoginStateViewRNGCDefaultType(i.remoteNgcParams.defaultType),
                        n.postedLoginStateViewRNGCEntropy(i.remoteNgcParams.entropy),
                        n.postedLoginStateViewRNGCSLK(i.remoteNgcParams.sessionIdentifier),
                        n.isSignupPost(i.isSignupPost),
                        t === x.Hip && (t = x.Password),
                        n.postedLoginStateViewId(t),
                        !H() && i.flowToken && H(i.flowToken);
                    var a = (b.UserTracker || {}).destroy;
                    if (a)
                        try {
                            a();
                        } catch (o) {}
                    !(function (e) {
                        try {
                            var n = A.getObject("wlidperf");
                            (n.FR = "L"), (n.ST = new Date().getTime()), A.write("wlidperf", n, !0, !0, !0, e);
                        } catch (t) {}
                    })(fe),
                        n.instrumentationMethods().recordSubmit(),
                        n.pageSubmitted(!0),
                        n.forceSubmit(!0),
                        n.isRequestPending(!0),
                        n.showLightboxProgress(!e);
                }),
                (n.view_onRedirect = function (e, t, i, a) {
                    var o = { postParams: t, isIdpRedirect: i, useViewProgress: a },
                        r = m.logRedirection(e, o);
                    i && Q && n.flowToken() && A.write(Q, n.flowToken(), !Z), t ? n.postRedirect({ url: r, postParams: t }) : ln(r), n.isRequestPending(!0), n.showLightboxProgress(!a);
                }),
                (n.view_onLoadView = function (e) {
                    var a = (function (e) {
                        0;
                        var n = [
                            x.Password,
                            x.ProofConfirmation,
                            x.OneTimeCode,
                            x.ConfirmSignup,
                            x.ConfirmRecoverUsername,
                            x.LearnMore,
                            x.ResetPasswordSplitter,
                            x.RemoteNGC,
                            x.PhoneDisambiguation,
                            x.IdpDisambiguation,
                            x.IdpRedirect,
                            x.IdpRedirectSpeedbump,
                            x.ViewAgreement,
                            x.ConfirmSend,
                            x.CredentialPicker,
                            x.Fido,
                            x.FedConflict,
                            x.ProofFedConflict,
                            x.AadFedConflict,
                            x.FedLink,
                            x.RemoteConnectCanaryValidation,
                            x.FetchSessionsProgress,
                            x.Tiles,
                            x.LwaConsent,
                            x.Hip,
                            x.RemoteLoginPolling,
                            x.TenantDisambiguation,
                            x.SearchOrganization,
                            x.AccessPass,
                            x.SignupUsername,
                            x.SignupCredentialPicker,
                            x.LearnMoreOfflineAccount,
                            x.RemoteConnectLocation,
                        ];
                        if (
                            !i.utils.arrayFirst(n, function (n) {
                                return e === n;
                            })
                        )
                            return null;
                        return new u(function (n) {
                            switch (e) {
                                case x.Password:
                                    t.e(24)
                                        .then(
                                            function () {
                                                t(403), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ProofConfirmation:
                                    t.e(27)
                                        .then(
                                            function () {
                                                t(404), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.OneTimeCode:
                                    t.e(23)
                                        .then(
                                            function () {
                                                t(405), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ConfirmSignup:
                                    t.e(5)
                                        .then(
                                            function () {
                                                t(406), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ConfirmRecoverUsername:
                                    t.e(3)
                                        .then(
                                            function () {
                                                t(407), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.LearnMore:
                                    t.e(20)
                                        .then(
                                            function () {
                                                t(408), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ResetPasswordSplitter:
                                    t.e(32)
                                        .then(
                                            function () {
                                                t(409), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.RemoteNGC:
                                    t.e(31)
                                        .then(
                                            function () {
                                                t(410), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.PhoneDisambiguation:
                                    t.e(25)
                                        .then(
                                            function () {
                                                t(411), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.IdpDisambiguation:
                                    t.e(17)
                                        .then(
                                            function () {
                                                t(412), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.IdpRedirect:
                                    t.e(18)
                                        .then(
                                            function () {
                                                t(413), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.IdpRedirectSpeedbump:
                                    t.e(19)
                                        .then(
                                            function () {
                                                t(414), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ViewAgreement:
                                    t.e(35)
                                        .then(
                                            function () {
                                                t(398), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ConfirmSend:
                                    t.e(4)
                                        .then(
                                            function () {
                                                t(415), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.CredentialPicker:
                                case x.SignupCredentialPicker:
                                    t.e(6)
                                        .then(
                                            function () {
                                                t(416), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.Fido:
                                    t.e(16)
                                        .then(
                                            function () {
                                                t(417), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.FedConflict:
                                    t.e(13)
                                        .then(
                                            function () {
                                                t(418), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.ProofFedConflict:
                                    t.e(28)
                                        .then(
                                            function () {
                                                t(419), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.AadFedConflict:
                                    t.e(0)
                                        .then(
                                            function () {
                                                t(420), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.FedLink:
                                    t.e(14)
                                        .then(
                                            function () {
                                                t(421), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.RemoteConnectCanaryValidation:
                                    t.e(29)
                                        .then(
                                            function () {
                                                t(422), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.RemoteConnectLocation:
                                    t.e(30)
                                        .then(
                                            function () {
                                                t(423), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.FetchSessionsProgress:
                                    t.e(15)
                                        .then(
                                            function () {
                                                t(424), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.Tiles:
                                    t.e(33)
                                        .then(
                                            function () {
                                                t(425), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.LwaConsent:
                                    t.e(1)
                                        .then(
                                            function () {
                                                t(426), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.Hip:
                                    t.e(1)
                                        .then(
                                            function () {
                                                t(427), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.RemoteLoginPolling:
                                    t.e(9)
                                        .then(
                                            function () {
                                                t(428), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.TenantDisambiguation:
                                    t.e(12)
                                        .then(
                                            function () {
                                                t(429), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.AccessPass:
                                    t.e(8)
                                        .then(
                                            function () {
                                                t(430), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.SignupUsername:
                                    t.e(11)
                                        .then(
                                            function () {
                                                t(431), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.SearchOrganization:
                                    t.e(10)
                                        .then(
                                            function () {
                                                t(432), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                                    break;
                                case x.LearnMoreOfflineAccount:
                                    t.e(21)
                                        .then(
                                            function () {
                                                t(433), n();
                                            }.bind(null, t)
                                        )
                                        ["catch"](t.oe);
                            }
                        });
                    })(e);
                    return a
                        ? (n.view_onSetPendingRequest(!0),
                          a.then(function () {
                              n.view_onSetPendingRequest(!1);
                          }))
                        : null;
                }),
                (n.view_onShow = function (e, i) {
                    var a = e.dynamicBranding ? n.paginationControlMethods().getSharedDataItem("userTenantBranding") : o.loadTenantBranding(me),
                        r = o.getLayoutTemplateConfig(a);
                    j = r.hideSignInOptions;
                    var c = o.getPageBranding(a, he, ve);
                    n.backgroundControlMethods() && n.backgroundControlMethods().updateBranding(c),
                        n.bannerLogoUrl(c.bannerLogoUrl),
                        n.backgroundLogoUrl(c.backgroundLogoUrl),
                        n.useDefaultBackground(c.useDefaultBackground),
                        a && a.CustomCss
                            ? t
                                  .e(7)
                                  .then(
                                      function () {
                                          var e = t(402);
                                          V || (V = new e()), V.loadAsync(a.CustomCss);
                                      }.bind(null, t)
                                  )
                                  ["catch"](t.oe)
                            : V && V.unload(),
                        i !== x.Username && n.newSession(null),
                        s.length > 0 && ((i !== x.Username && i !== x.Tiles) || (i === x.Username && n.newSession(s[0]), (s = [])));
                }),
                (n.view_onUpdateFlowToken = function (e) {
                    H(e), n.paginationControlMethods().setSharedDataItem("flowToken", e);
                }),
                (n.view_onUpdateAvailableCreds = function (e) {
                    n.availableCredsWithoutUsername(e), 1 === e.length && G(!!e[0].shownOnlyOnPicker);
                }),
                (n.view_onUpdateRemoteNgcParams = function (e, t, i) {
                    var a = n.paginationControlMethods().getSharedDataItem("remoteNgcParams");
                    (a.sessionIdentifier = e), (a.entropy = t), (a.defaultType = i);
                }),
                (n.view_onSetLightBoxFadeIn = function (e) {
                    n.fadeInLightBox(e);
                }),
                (n.view_onSetPendingRequest = function (e) {
                    n.isRequestPending(e), n.showLightboxProgress(e);
                }),
                (n.footer_agreementClick = function (e) {
                    (n.agreementType = e), n.paginationControlMethods().view_onSwitchView(x.ViewAgreement);
                }),
                (n.closeDebugDetails_onClick = function () {
                    Ze(!1), n.footerMethods() && n.footerMethods().setDebugDetailsState(!1);
                }),
                (n.toggleDebugDetails_onClick = function () {
                    Ze(!n.showDebugDetails(), !0);
                }),
                (n.setDebugTracing_onClick = function () {
                    n.isDebugTracingEnabled = !n.isDebugTracingEnabled;
                }),
                (n.learnMore_onShow = function () {
                    n.ariaHidden(!0), n.wasLearnMoreShown(!0), n.learnMoreMethods().open();
                }),
                (n.learnMore_onHide = function () {
                    n.ariaHidden(!1), n.paginationControlMethods().setDefaultFocus();
                }),
                (n.passwordView_onResetPassword = function (e) {
                    ln(
                        (function (e, n, t) {
                            if (t) return E.appendOrReplace(e, n, encodeURIComponent(y.trim(t)));
                            return e;
                        })(ae, be, e)
                    ),
                        n.view_onSetPendingRequest(!0);
                }),
                (n.newSession_onClick = function () {
                    var e = n.newSession();
                    if (e.isWindowsSso) {
                        var t = new d(a);
                        f.throwUnhandledExceptionOnRejection(
                            t
                                .loginWindowsUserAsync(e.ssoLink)
                                .then(null, function () {
                                    return null;
                                })
                                .then(function (e) {
                                    e && n.view_onRedirect(e);
                                })
                        );
                    } else if (e.isOtherIdp) {
                        var i = y.trim(e.displayName),
                            o = E.appendOrReplace(n.initialSharedData.otherIdpRedirectUrl, "username", encodeURIComponent(i)),
                            r = we ? w.clone(we) : null;
                        r && (r.username = i), n.view_onRedirect(o, r, !0);
                    }
                }),
                (n.newSessionClose_onClick = function () {
                    n.newSession(null);
                }),
                (n.otherSigninOptionsButton_onClick = function (e) {
                    "signinOptions" === e.testId
                        ? (n.paginationControlMethods().setSharedDataItem("availableCreds", n.availableCredsWithoutUsername()), n.paginationControlMethods().view_onSwitchView(x.CredentialPicker))
                        : n.view_onRedirect(e.signInUrl);
                }),
                (n.paginationControl_onAnimationStateChange = function (e, t, i) {
                    var a = on();
                    switch (e) {
                        case k.Begin:
                            a && i && n.animate(t ? P.SlideOutBack : P.SlideOutNext);
                            break;
                        case k.RenderNewView:
                            W(!1);
                            break;
                        case k.AnimateNewView:
                            a && (W(!0), n.animate(t ? P.SlideInBack : P.SlideInNext));
                            break;
                        case k.End:
                            W(a), n.animate(P.None);
                    }
                }),
                (n.view_onRegisterDialog = function (e, n) {
                    U[e] = { templateNodes: n.templateNodes, data: n.data };
                }),
                (n.view_onUnregisterDialog = function (e) {
                    delete U[e];
                }),
                (n.view_onShowDialog = function (e) {
                    return (
                        n.activeDialog(U[e]),
                        setTimeout(function () {
                            n.activeDialog(U[e]);
                        }, 0),
                        new u(function (e) {
                            M = { resolve: e };
                        })
                    );
                }),
                (n.dialog_onClose = function () {
                    n.activeDialog(null), n.paginationControlMethods().getCurrentView().viewInterface.setDefaultFocus(), M && M.resolve();
                }),
                (n.dispose = function () {
                    null;
                }),
                (function () {
                    ((B = D.isSvgImgSupported()), je) && new l().writeCookie();
                    c = new p(a, L.DisableDesktopSsoPreferredCred | L.DisableAutoSend | L.IsPostRequest);
                    var t,
                        o = de ? de.split(",") : [],
                        s = D.htmlUnescape(ce || se || re || le || "");
                    o.sort(),
                        (n.prefillNames = n.prefillNames.concat(i.utils.arrayMap(o, D.htmlUnescape))),
                        (n.useCssAnimations = Ue && D.isCSSAnimationSupported()),
                        n.ctx(Y),
                        n.postUrl(
                            ((t = ne),
                            Se &&
                                i.utils.objectForEach(y.doubleSplit(Se, "&", "="), function (e, n) {
                                    t = E.addIfNotExist(t, e, n);
                                }),
                            t)
                        );
                    var h = D.isFidoSupportedAsync(Oe).then(
                        function (e) {
                            sn(e, s);
                        },
                        function () {
                            sn(!1, s);
                        }
                    );
                    F.push(h), F.push(m.createLoadClientTracingPromise());
                    var v = new r(e);
                    if (Be) {
                        n.view_onSetPendingRequest(!0);
                        var b = v.validateAsync().then(nn, en);
                        F.push(b);
                    }
                    if (!He && K) {
                        var S = y.format("[{0}]", K),
                            _ = A.getObject("WLOpt"),
                            w = _.act || "";
                        -1 === w.indexOf(S) && (w += S), (_.act = w), A.write("WLOpt", _, !1, !0);
                    }
                    var C = new d(a);
                    C.isEnabled() &&
                        (n.asyncTileRequestCount++,
                        f.throwUnhandledExceptionOnRejection(
                            C.pullBrowserSsoCookieAsync()
                                .then(null, function () {
                                    return null;
                                })
                                .then(function (e) {
                                    n.asyncTileRequestCount--, (e = e || {}).newSessions ? Ye(g.parseBssoSessions(e.newSessions)) : e.redirectUrl ? ln(e.redirectUrl, !0) : Ye([]);
                                })
                        )),
                        f.throwUnhandledExceptionOnRejection(
                            u.all(F).then(function () {
                                n.postCanaryValidationAction &&
                                    (n.postCanaryValidationAction.action === N.SwitchView && (n.postCanaryValidationAction.viewId = n.currentViewId),
                                    O
                                        ? (n.initialViewId = n.currentViewId = O)
                                        : n.postCanaryValidationAction.action === N.Redirect &&
                                          n.view_onRedirect(n.postCanaryValidationAction.redirectUrl, n.postCanaryValidationAction.redirectPostParams, n.postCanaryValidationAction.isIdpRedirect)),
                                    n.view_onSetPendingRequest(!1),
                                    m.setPageViewModel(n),
                                    n.asyncInitReady(!0);
                            })
                        );
                })();
        };
    },
    function (e, n, t) {
        var i = { "./0-small.jpg": 65, "./0.jpg": 66, "./1-small.jpg": 67, "./1.jpg": 68, "./2-small.jpg": 69, "./2.jpg": 70, "./2.svg": 71 };
        function a(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = o),
            (e.exports = a),
            (a.id = 64);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/0-small_138bcee624fa04ef9b75e86211a9fe0d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/0_a5dbd4393ff6a725c7e62b61df7e72f0.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/1-small_847cd24c3f6a1cd5c794c95821ce5315.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/1_9d657dcc199acbe9559b89e3e7afac9c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/2-small_e58aafc980614a9cd7796bea7b5ea8f0.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/2_7916a894ebde7d29c2cc29b267f1299f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/backgrounds/2_bc3d32a696895f78c19df6c717586a5d.svg";
    },
    function (e, n, t) {
        var i = {
            "./0-small.jpg": 73,
            "./0.jpg": 74,
            "./1-small.jpg": 75,
            "./1.jpg": 76,
            "./10-small.jpg": 77,
            "./10.jpg": 78,
            "./11-small.jpg": 79,
            "./11.jpg": 80,
            "./13-small.jpg": 81,
            "./13.jpg": 82,
            "./14-small.jpg": 83,
            "./14.jpg": 84,
            "./15-small.jpg": 85,
            "./15.jpg": 86,
            "./16-small.jpg": 87,
            "./16.jpg": 88,
            "./17-small.jpg": 89,
            "./17.jpg": 90,
            "./18-small.jpg": 91,
            "./18.jpg": 92,
            "./19-small.jpg": 93,
            "./19.jpg": 94,
            "./2-small.jpg": 95,
            "./2.jpg": 96,
            "./20-small.jpg": 97,
            "./20.jpg": 98,
            "./21-small.jpg": 99,
            "./21.jpg": 100,
            "./22-small.jpg": 101,
            "./22.jpg": 102,
            "./23-small.jpg": 103,
            "./23.jpg": 104,
            "./24-small.jpg": 105,
            "./24.jpg": 106,
            "./25-small.jpg": 107,
            "./25.jpg": 108,
            "./26-small.jpg": 109,
            "./26.jpg": 110,
            "./27-small.jpg": 111,
            "./27.jpg": 112,
            "./28-small.jpg": 113,
            "./28.jpg": 114,
            "./29-small.jpg": 115,
            "./29.jpg": 116,
            "./3-small.jpg": 117,
            "./3.jpg": 118,
            "./30-small.jpg": 119,
            "./30.jpg": 120,
            "./31-small.jpg": 121,
            "./31.jpg": 122,
            "./32-small.jpg": 123,
            "./32.jpg": 124,
            "./33-small.jpg": 125,
            "./33.jpg": 126,
            "./34-small.jpg": 127,
            "./34.jpg": 128,
            "./35-small.jpg": 129,
            "./35.jpg": 130,
            "./36-small.jpg": 131,
            "./36.jpg": 132,
            "./37-small.jpg": 133,
            "./37.jpg": 134,
            "./38-small.jpg": 135,
            "./38.jpg": 136,
            "./39-small.jpg": 137,
            "./39.jpg": 138,
            "./4-small.jpg": 139,
            "./4.jpg": 140,
            "./40-small.jpg": 141,
            "./40.jpg": 142,
            "./41-small.jpg": 143,
            "./41.jpg": 144,
            "./42-small.jpg": 145,
            "./42.jpg": 146,
            "./43-small.jpg": 147,
            "./43.jpg": 148,
            "./44-small.jpg": 149,
            "./44.jpg": 150,
            "./45-small.jpg": 151,
            "./45.jpg": 152,
            "./46-small.jpg": 153,
            "./46.jpg": 154,
            "./47-small.jpg": 155,
            "./47.jpg": 156,
            "./48-small.jpg": 157,
            "./48.jpg": 158,
            "./49-small.jpg": 159,
            "./49.jpg": 160,
            "./5-small.jpg": 161,
            "./5.jpg": 162,
            "./50-small.jpg": 163,
            "./50.jpg": 164,
            "./51-small.jpg": 165,
            "./51.jpg": 166,
            "./52-small.jpg": 167,
            "./52.jpg": 168,
            "./53-small.jpg": 169,
            "./53.jpg": 170,
            "./54-small.jpg": 171,
            "./54.jpg": 172,
            "./55-small.jpg": 173,
            "./55.jpg": 174,
            "./56-small.jpg": 175,
            "./56.jpg": 176,
            "./57-small.jpg": 177,
            "./57.jpg": 178,
            "./58-small.jpg": 179,
            "./58.jpg": 180,
            "./6-small.jpg": 181,
            "./6.jpg": 182,
            "./7-small.jpg": 183,
            "./7.jpg": 184,
            "./8-small.jpg": 185,
            "./8.jpg": 186,
            "./9-small.jpg": 187,
            "./9.jpg": 188,
        };
        function a(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = o),
            (e.exports = a),
            (a.id = 72);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/0-small_e4609ff3d3040b6cd9773ac01b9f93cb.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/0_018052905902821de9d4582b8fee8dff.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/1-small_c1521a732148032caaea57fe54c0592b.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/1_e82204f3715767fb3e89570bd3192ca6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/10-small_d3978bbcb80c80865282847c54f2955c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/10_954935061a5b76c674efdec7a310540f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/11-small_5685955dc41987ed06e1ee3ade26b01f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/11_cfe9cb62ebb6605e03fb8d285c611b48.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/13-small_a19e7bca4466059eadd344ab11e6904f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/13_bbe2954e5ade3a8671e70904f32303b1.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/14-small_886156059d0730fbd2f056dd3f35c325.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/14_06019f5fb6b2ba38b86dce6a23f75cdd.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/15-small_fb2ae5a11d1f4505db855c2b63e8ca95.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/15_6028ea8133b464df430f44727872f384.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/16-small_e7ab9bba629cbe84dbeb87f69d2a0f6c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/16_112f8f03c4affe4b3ac72fccffde1c7e.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/17-small_af6fcff57f13db6a19af43e541c67391.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/17_a33c806b2c7a6e5789b9cdc9423218ec.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/18-small_2cb079b6ea3bef0252a9219ed64c5c14.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/18_5c3341219c88b0391008d38f6f3e3571.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/19-small_2d7064925c8ab86081ac2dc0b8b91506.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/19_8cec1cb1024c6dedfdf6d4e62688d1e5.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/2-small_a0d21be5213bfa2667a01ddc00e59885.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/2_49d31aa7849c067b208f0457d8b1bb75.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/20-small_13b828e3155ff8aaa21867a85522aac7.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/20_6e2f411c0f786507adc756f40972e58d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/21-small_8c6511fe45944b668b3ebac906238b23.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/21_a09c8a583598d484972faa59f0838f06.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/22-small_d96b81b394eab085204f0ce6e1b0052a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/22_077c3ca4905a70723346fef218e435fa.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/23-small_a0dba82f70ff302592ff9156bec990ff.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/23_eadb5cd3f199f9128d4c468fa19783b9.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/24-small_2b123d90ad518a70d48d8a8e219064d6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/24_be8959e35a7f0fe45bdcee972c541fc2.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/25-small_d920b96dc46ec8da241ea5b5b453166c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/25_0e9d7bb00abc81eb1bf70cbf3961b23b.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/26-small_4d5fbc9b2bd95873fd126564d3e9e1b4.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/26_18fb6468a9fd0d0c3708fba54aa84436.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/27-small_35050a9ab94e2f8c61e6f12f2abe033c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/27_15a4db7c40818c2f86d582d4e73718b4.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/28-small_988ca0b33b4198a7ffeea9f0db308048.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/28_65f7aacca6193a75765a132ca8e72690.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/29-small_fd966cc8825926550f93a9c6349b36df.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/29_01a74da6416cacc533424b5435c0ebc2.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/3-small_81eb6f5b568144df6ce35ea3cfd4832c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/3_7367a94727cb52538e42e71b737c9d88.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/30-small_85c49d6453621fae88c17c5e789ca513.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/30_7ab3d020cf010c982e79dcb55974d6f4.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/31-small_7216f77b42179a7f187fde776e0da0fc.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/31_ccc3687244419d816a6ae1ac93054bc5.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/32-small_12f6538b26569fe03d3db3898f2a4bad.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/32_ace30fab677a248627cf91a2c43b148f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/33-small_138bcee624fa04ef9b75e86211a9fe0d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/33_a5dbd4393ff6a725c7e62b61df7e72f0.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/34-small_2dcb9c9f766bc9909dd98464f839d071.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/34_b372af7f03b2106dde3c8511653257e6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/35-small_23ca25bea7fbf8780a31c4b5b5c58eef.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/35_6be57adbad6e5441fc635fdc5942082c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/36-small_9b04358e203193db389581fc309edc54.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/36_2b750ff1292bfb120d7c612c8f9e2856.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/37-small_3d57f8086094d5813ca0395e11b2115d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/37_9ddf671278ede1c15b3b9a528af0894a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/38-small_bb819181da26de937406e3c4cade0732.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/38_7be6c2b083de1ac7f6d5fcf12113e71e.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/39-small_7b3091c2f5ddc534c31b21146e7108b6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/39_931da3b73841f9d534309a60a64fd10b.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/4-small_67004a0d7bad092a477597b0175c6062.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/4_8bc274514c6c4c4a88ee82de7cfeb906.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/40-small_990398e28b32b28f52589bef6d1f0a5f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/40_0f688a118e24b56c171348244b9b07f8.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/41-small_c64c9feb49d696f6831408ba59afb5ec.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/41_d65ab7fa9a93afad08f26a33d7054b38.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/42-small_5ce05a2ae6ca6e2a1fc46688dbe42e80.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/42_155c5fcf08dc0abfd8f14c65d7d5654d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/43-small_0b0fe537e343aff2d632fb1b17d2e12a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/43_942c4acfa465c3e9e3ff4c5a34c64cd3.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/44-small_329a39a3a8c98b4cb6e7f4675443a19a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/44_7f22acb6ad4a17ae0265769fce5c22a6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/45-small_d1bd671935adc1cdf63956e8eb9afac2.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/45_4bd86b5aafbf253bf94ec89250b80bee.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/46-small_71b85b1d515bbc42f54201cca08971de.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/46_cbaa4425ea30ee8459d2f76bd5cf3bcf.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/47-small_847cd24c3f6a1cd5c794c95821ce5315.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/47_9d657dcc199acbe9559b89e3e7afac9c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/48-small_73f519660cd876c61346bea0c6a595d7.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/48_2ca150cbb1d0f7fd49ee52f69ed33ef7.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/49-small_e58aafc980614a9cd7796bea7b5ea8f0.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/49_7916a894ebde7d29c2cc29b267f1299f.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/5-small_f5ba2e25bc3764aa83a85853deb53d87.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/5_8556cca21df3b7e3eb714443b6cec208.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/50-small_525faaabc032a102c86dbb6f67befe81.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/50_65b589df22035a9d9861e4ae67af9df1.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/51-small_ed4680a143084feeef4da8bdf0b0e2ec.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/51_d8fdd39cc3a14e2a94f9f9af3afd368d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/52-small_8e3471fa3c7a719ba91074634c4d7979.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/52_1af3f668169cae7e9923df859e17c7d6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/53-small_2f8e1af2a83efe19f53e9d3b1a981d6a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/53_a6b165f577f0d6f1a774cdaf09c70e60.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/54-small_2275d4552d98c42f3a9cf75516295758.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/54_ad58d2495947725b8ad9f2bad4b1d01d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/55-small_12546da3840024e711aadb226feba380.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/55_07ad3566d3997f8a37b761e33f247820.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/56-small_1a3b1873bcb7bac27b075a8d45bf9f17.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/56_bd4c1c7ec5407db09b9be74bb12d65d5.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/57-small_02306fe41d7232724bd764f7d62d755c.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/57_1df5d0ad9cfc1eb5e05dbb63c46c593d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/58-small_0e9fc466a45938f2b2d6a4e26dfef57a.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/58_fe6d7d3e76a658af3d94906efff4cdf5.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/6-small_c249ac53bc5f0b79972dd44b1ca95009.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/6_d405ce4edf49d83c99648a67afef9054.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/7-small_e1873e6ad53a0af444f5addb67eaced6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/7_28c6789c809592f948d6ad165bc97b4d.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/8-small_552832c1e01cb3e3d5b224748901e127.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/8_128cd117ec14155b6859d175083c3095.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/9-small_accdf35d13519e58309a75bd0f5340a6.jpg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appbackgrounds/9_832d21976c5d596f2ce1e6714bb26802.jpg";
    },
    function (e, n, t) {
        var i = {
            "./0.png": 190,
            "./1.png": 191,
            "./10.png": 192,
            "./11.png": 193,
            "./12.png": 194,
            "./13.png": 195,
            "./14.png": 196,
            "./15.png": 197,
            "./17.png": 198,
            "./18.png": 199,
            "./19.png": 200,
            "./2.png": 201,
            "./20.png": 202,
            "./21.png": 203,
            "./22.png": 204,
            "./23.png": 205,
            "./24.png": 206,
            "./25.png": 207,
            "./26.png": 208,
            "./27.png": 209,
            "./28.png": 210,
            "./29.png": 211,
            "./3.png": 212,
            "./30.png": 213,
            "./31.png": 214,
            "./32.png": 215,
            "./33.png": 216,
            "./34.png": 217,
            "./35.png": 218,
            "./36.png": 219,
            "./37.png": 220,
            "./38.png": 221,
            "./39.png": 222,
            "./4.png": 223,
            "./40.png": 224,
            "./41.png": 225,
            "./42.png": 226,
            "./43.png": 227,
            "./44.png": 228,
            "./45.png": 229,
            "./46.png": 230,
            "./47.png": 231,
            "./48.png": 232,
            "./49.png": 233,
            "./5.png": 234,
            "./50.png": 235,
            "./51.png": 236,
            "./52.png": 237,
            "./53.png": 238,
            "./54.png": 239,
            "./55.png": 240,
            "./56.png": 241,
            "./57.png": 242,
            "./58.png": 243,
            "./59.png": 244,
            "./6.png": 245,
            "./60.png": 246,
            "./61.png": 247,
            "./7.png": 248,
            "./8.png": 249,
        };
        function a(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = o),
            (e.exports = a),
            (a.id = 189);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/0_3b6f07e6d8c54e6e73095ec6dcbd124b.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/1_79ce9f07b32f13120b26926d7664f049.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/10_17fd0688756bf40a8d12f6ee52f7f1a7.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/11_982c43a3fb429f9992a1f78188deb510.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/12_e15869494a1446169159c7b1a5e959c0.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/13_95a0535e3464ebf94716badee4ed5a6f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/14_298176657f8069ea5220c23adb6b70be.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/15_a846416602fb9578abe49da652bbcdc1.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/17_37e4ecbf38b26bf96a8e1265dd15375b.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/18_14049125ec20bdd5d6c6f82cefca4619.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/19_be793b7662d61fa9d560843178160f1b.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/2_c601ddb7e99a8e694619af9ca05d965d.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/20_71c5dd371596273fd346bd0c6ebe8fb9.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/21_ccf9445164fc98fb7351544a3d42a86d.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/22_ad08321ba2930b17abffc60dfd23469e.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/23_40c874683e32641f783179e8f56603b7.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/24_e967ae43b5a92fc57c5d4db47fd890d5.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/25_c62e84af0239fb879610b9cefcc1ce98.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/26_7bded57cb99fb8d542e1d50e86712e19.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/27_851887caaab1b7a4e45096fbebf8757f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/28_773a25b62616268080ebda5f23c4ef56.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/29_711964270f5d3df82e86e974c9c139a4.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/3_917c95184fc4f9f6e5d8d1cf7faa71af.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/30_1f5b0414416dd7c4c6c9cb3ffbf86d0f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/31_e16d5096036767bd40d22bc36e5adf8f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/32_d12a281acc1be40a6e39c218c891bf68.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/33_fb658f9c7a23a0be62ee598f5c614f3f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/34_8d844103fd2054011720487455e5c3a1.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/35_e6bf30970611c44921a9d16c6d75baed.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/36_8b51e861f6330a37a181c5c48ab18cf7.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/37_533e293f0c8947ada653b47c00e394e2.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/38_40cd428567644eabf2ede3752cfe4b3c.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/39_6510264d46b91e3541a0c907d79a2193.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/4_1d92902596773fef1efc33d99ea1860a.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/40_02e793fece1433e6ad0351c24519fd93.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/41_c963ae2006abb4855c2b2bcec9b90f41.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/42_347c2dacbfe040a614ee467aac3ab791.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/43_9a829ce32e657eb0854ca9bfd7933ace.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/44_08ed657e48f1458641b5f879d82004cd.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/45_e945186f8a1c151dfc0e0b7eff98aa1f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/46_c4f7bd87302da51b62e877bdd41aadec.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/47_816591beeaa38f576fd537e3b542c983.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/48_1064cc22a5c8901979cf24ef4b7bc3bb.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/49_2387c6214462eb235a3be8ab9d01ed2d.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/5_b37baba9ebd2098f91aeeee5dae36aa5.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/50_67daefc45a533a221d706eda9145ae51.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/51_9a829ce32e657eb0854ca9bfd7933ace.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/52_30f31a5ddeb05f5b5fc9785d9ca8e287.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/53_8b36337037cff88c3df203bb73d58e41.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/54_3492034f81f2a08f6e56cfcc20f562a4.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/55_bba518bf4f8a76d759172ea1f5788422.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/56_32ac3572066eaf431c60e7a44e3cbdf4.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/57_f97a4dbda953e527e8ff72a30d278fda.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/58_4f65354e08ac4f70495d92375b26c794.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/59_5f060f3b0dc7994f1106fd26a4c93f95.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/6_b09574fe38718dccfcb89521d2079d9d.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/60_17b7970e23a4e45768b586e1d427eaf3.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/61_e1e8736a9f79b0b33d1bff0719c047e0.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/7_d8789a0ce2c0e1a63b0ab9faad3a6982.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/applogos/8_8a58659b05a0ce2da0c4b5cd6e2c7b20.png";
    },
    function (e, n, t) {
        var i = t(1),
            a = i.Helper,
            o = i.Cookies,
            r = 0,
            s = 1;
        e.exports = function () {
            var e = r;
            (this.writeCookie = function () {
                o.write("brcap", e, !0, !0);
            }),
                a.isOnTouchStartEventSupported() && (e |= s);
        };
    },
    function (e, n, t) {
        var i = t(12),
            a = t(1),
            o = t(5),
            r = window,
            s = r.document,
            c = a.QueryString,
            l = a.Cookies,
            d = -2147186943;
        function u(e, n, t, i, a) {
            var l = "53ee284d-920a-4b59-9d30-a60315b26836",
                p = e,
                g = n,
                f = t,
                m = i,
                h = a,
                v = {},
                b = 0,
                S = null,
                _ = null,
                y = null,
                w = null;
            function C(e) {
                if (e.source === r) {
                    var n = e.data,
                        t = n && n.channel,
                        i = n && n.responseId,
                        a = n && n.body,
                        o = a && a.method;
                    if (t === l && i && ("CreateProviderAsync" === o || "Response" === o)) {
                        p.logMessage("Received message for method " + o);
                        var s = v[i];
                        delete v[i],
                            setTimeout(function () {
                                s(a.response || {});
                            }, 0);
                    }
                }
            }
            function T(e, n) {
                return new o(function (t) {
                    var i = { channel: l, responseId: ++b, body: e };
                    n && (i.extensionId = n), (v[i.responseId] = t), p.logMessage("Sending message for method " + (e || {}).method || !1), r.postMessage(i, "*");
                }).then(function (e) {
                    return "Success" === e.status ? o.resolve(e.result || {}) : o.reject(new u.Error(e.code, e.description, e.ext));
                });
            }
            function x() {
                return w || (r.addEventListener && r.addEventListener("message", C), p.logMessage("Creating ChromeBrowserCore provider"), (w = T({ method: "CreateProviderAsync", response: { status: "Success" } }).then(I))), w;
            }
            function I() {
                for (var e = null, n = S.firstChild; n; ) !n.id || (null !== e && "ppnbnpeolgkicgegkbkbjmhlideopiji" !== n.id) || (e = n.id), S.removeChild(n), (n = S.firstChild);
                if (!e) throw new u.Error("NoExtension", "Extension is not installed.", null);
                return p.logDataPoint("extension.id", e), p.logMessage("Using Chrome extension with id " + e), e;
            }
            function k(e) {
                return "OSError" === e.code && e.externalData && e.externalData.error === d
                    ? (p.logMessage("GetCookies method not found, falling back to GetCookie"),
                      x().then(function (e) {
                          return T({ method: "GetCookie", uri: _ }, e);
                      }))
                    : o.reject(e);
            }
            function P(e) {
                var n = e.response || [];
                if (n && n.length)
                    for (var t = 0, i = n.length; t < i; ++t) {
                        var a = (a = n[t].data || ""),
                            o = a.indexOf(";");
                        -1 !== o && (a = a.substr(0, o)), (n[t].data = a + y);
                    }
                return n;
            }
            (this.getCookiesAsync = function () {
                return x().then(function (e) {
                    return p.logMessage("Pulling SSO cookies"), T({ method: "GetCookies", uri: _ }, e).then(null, k).then(P);
                });
            }),
                (function () {
                    if (((_ = c.appendOrReplace(r.location.href, "sso_nonce", g)), h)) {
                        var e = c.parse(_);
                        e.fragment && ((e.fragment = null), (_ = c.join(e)));
                    }
                    y = "; path=/; domain=" + f + (m ? "" : "; secure");
                    (S = s.getElementById("ch-53ee284d-920a-4b59-9d30-a60315b26836")) || (((S = s.createElement("div")).id = "ch-53ee284d-920a-4b59-9d30-a60315b26836"), s.body.appendChild(S));
                })();
        }
        (u.Error = function (e, n, t) {
            var a = e,
                o = n,
                r = t;
            (this.code = a),
                (this.description = o),
                (this.externalData = r),
                (this.toString = function () {
                    var e = "ChromeBrowserCore error " + (a || "") + ": " + (o || "");
                    return r && (e += " (ext: " + i.stringify(r) + ")"), e;
                }),
                (this.toCookieString = function () {
                    var e = "NA";
                    if (l.isCookieSafeValue(a)) {
                        e += "|" + a;
                        var n = r ? encodeURIComponent(i.stringify(r)) : null;
                        n && l.isCookieSafeValue(n) && (e += "|" + n);
                    }
                    return e;
                });
        }),
            (e.exports = u);
    },
    function (e, n, t) {
        var i = t(1),
            a = t(5),
            o = window,
            r = i.Cookies;
        e.exports = function (e, n, t, i) {
            var s = e,
                c = n,
                l = t,
                d = i;
            function u(e, n, t) {
                var i = new Date().getTime();
                return (function (e, n, t) {
                    return new a(function (n, t) {
                        o.navigator.msLaunchUri(e, n, t),
                            setTimeout(function () {
                                t("timeout");
                            }, c);
                    }).then(
                        function () {
                            var e = new Date().getTime() - t;
                            s.logDataPoint("msLaunchUri.success.ms", e), s.logMessage(n + " initiated successfully (took " + e + " ms)");
                        },
                        function (e) {
                            if ("timeout" === e) s.logDataPoint("msLaunchUri.response", d ? "timeout" : "timeout-continue"), s.logMessage("");
                            else {
                                var i = new Date().getTime() - t;
                                s.logDataPoint("msLaunchUri.failure.ms", i), s.logMessage(n + " was NOT initiated successfully (took " + i + " ms)");
                            }
                            if ("timeout" !== e || d) return a.reject(e || "noHandler");
                        }
                    );
                })(e, n, i).then(function () {
                    return (function (e, n, t) {
                        return new a(function (i, a) {
                            var o = setInterval(function () {
                                var e = t ? null : r.getCookie("ESTSUSERLIST"),
                                    a = r.getCookie("ESTSSSO");
                                (e || a) &&
                                    (clearInterval(o),
                                    s.logDataPoint((e ? "ESTSUSERLIST" : "ESTSSSO") + ".cookie.ms", new Date().getTime() - n),
                                    e ? (s.logMessage("Users list cookie detected"), r.remove("ESTSUSERLIST"), i({ userList: decodeURIComponent(e).replace(/\+/g, " ") })) : i({ reload: !0 }));
                            }, 250);
                            setTimeout(function () {
                                clearInterval(o), s.logDataPoint("TB.response.timeout.ms", new Date().getTime() - n), s.logMessage(e + " timed out."), a("timeout");
                            }, l);
                        });
                    })(n, i, t);
                });
            }
            (this.pullBrowserSsoCookieAsync = function (e) {
                return u(e, "cookie pull", !1);
            }),
                (this.loginWindowsUserAsync = function (e) {
                    return u(e, "Windows user login", !0);
                });
        };
    },
    function (e, n, t) {
        var i = {
            "./signin-facebook.png": 254,
            "./signin-github-white.png": 255,
            "./signin-github-white.svg": 256,
            "./signin-github.png": 257,
            "./signin-github.svg": 258,
            "./signin-google.png": 259,
            "./signin-google.svg": 260,
            "./signin-linkedin-white.png": 261,
            "./signin-linkedin-white.svg": 262,
            "./signin-linkedin.png": 263,
            "./signin-linkedin.svg": 264,
            "./signin-microsoft.png": 265,
            "./signin-microsoft.svg": 266,
            "./signin-options-white.png": 267,
            "./signin-options-white.svg": 268,
            "./signin-options.png": 269,
            "./signin-options.svg": 270,
        };
        function a(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = o),
            (e.exports = a),
            (a.id = 253);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-facebook_10215239ff5f8a0c7f70c82ddde777d2.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-github-white_8084e7ef63aa90944b7cf3f2e6af4197.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-github-white_ba5454e1847816a7281d1e883bb1b835.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-github_e63e21329755d994d04e95a3bff0b7b6.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-github_d551e60e6ee4fc726f4b2dad17ca609f.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-google_786fd388cd89b8279260f9dd85a909df.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-google_dc4acd404e611f5d6aa269c9e1ad06a4.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-linkedin-white_5262a35e0a35f08faed36d9845f2b574.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-linkedin-white_d81eb44cd97d9ab5d52e1b8f606a1fde.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-linkedin_53015fa876c6792e4ef04c8de6d51738.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-linkedin_f9e2439867cd3f19ea46e15b8586e598.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-microsoft_4d5d920db48acaaafec3c3f161a829d3.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-microsoft_f9be8214406896ed69f9c6051b104764.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-options-white_4a3401f01aa69c9c9c2ca37f72f5767c.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-options-white_635b77f7a8eb76f94bef8b38a5882253.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-options_d3e469e85de84565c8280620b6874fda.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg";
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(272),
            t(279),
            t(282),
            t(45),
            t(46),
            t(18),
            t(47),
            t(50),
            t(391),
            ' --\x3e\n\n\x3c!--  --\x3e\n\n<div data-bind="if: activeDialog">\n    <div data-bind="component: { name: \'dialog-control\',\n        params: {\n            templateNodes: activeDialog().templateNodes,\n            data: activeDialog().data },\n        event: {\n            close: dialog_onClose } }">\n    </div>\n</div>\n\n<form name="f1" id="i0281" novalidate="novalidate" spellcheck="false"\n    method="post" target="_top" autocomplete="off"\n    data-bind="autoSubmit: forceSubmit, attr: { action: postUrl }, ariaHidden: activeDialog">\n\n    \x3c!-- ko if: svr.iBannerEnvironment --\x3e\n    <div class="env-banner" data-bind="component: { name: \'environment-banner-control\' }"></div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko withProperties: { \'$loginPage\': $data } --\x3e\n    <div data-bind="component: { name: \'master-page\',\n        params: {\n            serverData: svr,\n            showButtons: svr.fShowButtons,\n            showFooterLinks: true,\n            useWizardBehavior: svr.fUseWizardBehavior,\n            handleWizardButtons: false,\n            password: password,\n            hideFromAria: ariaHidden },\n        event: {\n            footerAgreementClick: footer_agreementClick } }">\n\n        \x3c!-- ko if: svr.fShowCookieBanner --\x3e\n        \x3c!-- ko component: "cookie-banner-control" --\x3e\x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        <div class="lightbox-cover" data-bind="css: { \'disable-lightbox\': svr.fAllowGrayOutLightBox && showLightboxProgress() }"></div>\n\n        \x3c!-- ko if: showLightboxProgress --\x3e\n        <div id="progressBar" class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n        \x3c!-- /ko --\x3e\n\n        <div class="win-scroll">\n            \x3c!-- ko ifnot: paginationControlMethods() && (paginationControlMethods().currentViewHasMetadata(\'hideLogo\')) --\x3e\n            <div data-bind="component: { name: \'logo-control\',\n                params: {\n                    isChinaDc: svr.fIsChinaDc,\n                    bannerLogoUrl: bannerLogoUrl() } }">\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: svr.strLWADisclaimerMsg && (paginationControlMethods() && !paginationControlMethods().currentViewHasMetadata(\'hideLwaDisclaimer\')) --\x3e\n            <div id="LWADisclaimer" class="text-caption" data-bind="text: svr.strLWADisclaimerMsg"></div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: asyncInitReady --\x3e\n            <div role="main" data-bind="component: { name: \'pagination-control\',\n                publicMethods: paginationControlMethods,\n                params: {\n                    enableCssAnimation: svr.fEnableCssAnimation,\n                    disableAnimationIfAnimationEndUnsupported: svr.fDisableAnimationIfAnimationEndUnsupported,\n                    initialViewId: initialViewId,\n                    currentViewId: currentViewId,\n                    initialSharedData: initialSharedData,\n                    initialError: $loginPage.getServerError() },\n                event: {\n                    cancel: paginationControl_onCancel,\n                    loadView: view_onLoadView,\n                    showView: view_onShow,\n                    setLightBoxFadeIn: view_onSetLightBoxFadeIn,\n                    animationStateChange: paginationControl_onAnimationStateChange } }">\n\n                <div data-viewid="') +
            t(0).PaginatedState.Username +
            '" data-showFedCredButton="true" data-bind="pageViewComponent: { name: \'login-paginated-username-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        displayName: sharedData.displayName,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        prefillNames: $loginPage.prefillNames,\n                        flowToken: sharedData.flowToken,\n                        availableSignupCreds: sharedData.availableSignupCreds },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest,\n                        registerDialog: $loginPage.view_onRegisterDialog,\n                        unregisterDialog: $loginPage.view_onUnregisterDialog,\n                        showDialog: $loginPage.view_onShowDialog,\n                        updateAvailableCredsWithoutUsername: $loginPage.view_onUpdateAvailableCreds,\n                        agreementClick: $loginPage.footer_agreementClick } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.SignupUsername +
            '" data-bind="pageViewComponent: { name: \'login-signup-username-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        displayName: sharedData.displayName,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.Password +
            '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-paginated-password-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        hipRequiredForUsername: sharedData.hipRequiredForUsername,\n                        passwordBrowserPrefill: sharedData.passwordBrowserPrefill,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                        flowToken: sharedData.flowToken,\n                        defaultKmsiValue: svr.iDefaultLoginOptions === ' +
            t(6).LoginOption.RememberPWD +
            ',\n                        userTenantBranding: sharedData.userTenantBranding,\n                        sessions: sharedData.sessions,\n                        callMetadata: sharedData.callMetadata },\n                    event: {\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        redirect: $loginPage.view_onRedirect,\n                        resetPassword: $loginPage.passwordView_onResetPassword,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.AccessPass +
            '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-access-pass-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        unsafe_username: sharedData.username,\n                        unsafe_displayName: sharedData.displayName,\n                        availableCreds: sharedData.availableCreds,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.SearchOrganization +
            '" data-bind="pageViewComponent: { name: \'search-organization-view\',\n                    params: {\n                        serverData: svr },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ProofConfirmation +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-proof-confirmation-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        currentCred: sharedData.otcCredential,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.OneTimeCode +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-paginated-otc-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        otcParams: sharedData.otcParams,\n                        preferredCredential: sharedData.preferredCredential,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                        currentCred: sharedData.otcCredential,\n                        proofConfirmation: sharedData.proofConfirmation,\n                        defaultKmsiValue: svr.iDefaultLoginOptions === ' +
            t(6).LoginOption.RememberPWD +
            ',\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.RemoteNGC +
            '" data-dynamicBranding="true" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-remote-ngc-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        remoteNgcParams: sharedData.remoteNgcParams,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                        defaultKmsiValue: svr.iDefaultLoginOptions === ' +
            t(6).LoginOption.RememberPWD +
            ',\n                        sessions: sharedData.sessions,\n                        flowToken: sharedData.flowToken,\n                        idpRedirectUrl: sharedData.idpRedirectUrl },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        updateRemoteNgcParams: $loginPage.view_onUpdateRemoteNgcParams,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        setBackButtonState: view_onSetIdentityBackButtonState } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.RemoteConnectCanaryValidation +
            '" data-dynamicBranding="true" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'remote-connect-canary-validation-view\',\n                    params: {\n                        serverData: svr,\n                        postCanaryValidationAction: $loginPage.postCanaryValidationAction },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setBackButtonState: view_onSetIdentityBackButtonState } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.PhoneDisambiguation +
            '" data-bind="pageViewComponent: { name: \'login-phone-disambiguation-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        location: sharedData.location,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.LwaConsent +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-paginated-lwa-consent-view\',\n                    params: {\n                        serverData: svr,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName },\n                    event: {\n                        submitReady: $loginPage.view_onSubmitReady } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.IdpDisambiguation +
            '" data-bind="pageViewComponent: { name: \'login-idp-disambiguation-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        displayName: sharedData.displayName,\n                        hasInitialError: sharedData.hasIdpDisambigError,\n                        sessions: sharedData.sessions,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        idpRedirectUrl: sharedData.idpRedirectUrl,\n                        idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                        preferredCredential: sharedData.preferredCredential,\n                        desktopSsoEnabled: sharedData.desktopSsoEnabled },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.IdpRedirect +
            '" data-bind="pageViewComponent: { name: \'login-idp-redirect-view\',\n                    params: {\n                        serverData: svr,\n                        idpRedirectUrl: sharedData.idpRedirectUrl,\n                        idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                        idpRedirectProvider: sharedData.idpRedirectProvider },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.IdpRedirectSpeedbump +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-idp-redirect-speedbump-view\',\n                    params: {\n                        serverData: svr,\n                        username: sharedData.username,\n                        idpRedirectUrl: sharedData.idpRedirectUrl,\n                        idpRedirectPostParams: sharedData.idpRedirectPostParams,\n                        idpRedirectProvider: sharedData.idpRedirectProvider,\n                        isInitialView: isInitialState,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.Tiles +
            '" data-bind="pageViewComponent: { name: \'tiles-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        sessions: sharedData.sessions,\n                        flowToken: sharedData.flowToken,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        isTileRequestPending: $loginPage.asyncTileRequestCount > 0,\n                        availableSignupCreds: sharedData.availableSignupCreds },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ViewAgreement +
            '" data-wide="true" data-hideLogo="true" data-hideLwaDisclaimer="true" data-hidePageLevelTitleAndDesc="true"\n                    data-bind="pageViewComponent: { name: \'login-view-agreement-view\',\n                        params: {\n                            serverData: svr,\n                            agreementType: $loginPage.agreementType } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.LearnMoreOfflineAccount +
            '" data-wide="true" data-hideLogo="true" data-hideLwaDisclaimer="true" data-hidePageLevelTitleAndDesc="true"\n                    data-bind="pageViewComponent: { name: \'login-view-learn-more-offline-account-view\',\n                        params: {\n                            serverData: svr } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ConfirmSend +
            '" data-showIdentityBanner="true" data-dynamicBranding="true" data-bind="pageViewComponent: { name: \'login-confirm-send-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        preferredCredential: sharedData.preferredCredential,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        currentCred: sharedData.otcCredential,\n                        sessions: sharedData.sessions,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        redirect: $loginPage.view_onRedirect,\n                        setBackButtonState: view_onSetIdentityBackButtonState } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.RemoteLoginPolling +
            '" data-hideLwaDisclaimer="true" data-bind="pageViewComponent: { name: \'login-remote-login-polling-view\',\n                    params: {\n                        serverData: svr,\n                        userCode: sharedData.remoteLoginUserCode,\n                        deviceCode: sharedData.remoteLoginDeviceCode },\n                    event: {\n                        submitReady: $loginPage.view_onSubmitReady } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.LearnMore +
            '" data-hideLogo="true" data-hideLwaDisclaimer="true"\n                    data-bind="pageViewComponent: { name: \'login-learn-more-view\',\n                        params: {\n                            serverData: svr,\n                            command: \'loginlearnmore\' } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ResetPasswordSplitter +
            '" data-bind="pageViewComponent: { name: \'login-reset-password-splitter-view\',\n                    params: {\n                        serverData: svr },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.FetchSessionsProgress +
            "\" data-bind=\"pageViewComponent: { name: 'fetch-sessions-progress-view',\n                    params: {\n                        serverData: svr,\n                        sessionPullType: $loginPage.sessionPullType,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        unsafe_desktopSsoDomainToUse: sharedData.unsafe_desktopSsoDomainToUse,\n                        preferredCredential: sharedData.preferredCredential,\n                        isPushNotification: sharedData.remoteNgcParams.defaultType === " +
            t(0).RemoteNgcType.PushNotification +
            ' },\n                    event: {\n                        updateUserTiles: $loginPage.fetchSessions_onUpdateUserTiles,\n                        executeGctResult: $loginPage.fetchSessions_onExecuteGctResult,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.Fido +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-fido-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        allowList: sharedData.fidoParams.allowList,\n                        challenge: sharedData.flowToken,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        flowToken: sharedData.flowToken,\n                        sessions: sharedData.sessions },\n                    event: {\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        submitReady: $loginPage.view_onSubmitReady,\n                        redirect: $loginPage.view_onRedirect,\n                        setBackButtonState: view_onSetIdentityBackButtonState } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.CredentialPicker +
            '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        isUserKnown: !!sharedData.displayName,\n                        availableCreds: sharedData.availableCreds,\n                        evictedCreds: sharedData.evictedCreds,\n                        useEvictedCredentials: sharedData.useEvictedCredentials,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        updateFlowToken: $loginPage.view_onUpdateFlowToken,\n                        redirect: $loginPage.view_onRedirect,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest,\n                        registerDialog: $loginPage.view_onRegisterDialog,\n                        unregisterDialog: $loginPage.view_onUnregisterDialog,\n                        showDialog: $loginPage.view_onShowDialog } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ConfirmSignup +
            '" data-bind="pageViewComponent: { name: \'login-confirm-signup-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        displayName: sharedData.displayName },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ConfirmRecoverUsername +
            '" data-bind="pageViewComponent: { name: \'login-confirm-recover-username-view\',\n                    params: {\n                        serverData: svr,\n                        serverError: initialError,\n                        isInitialView: isInitialState,\n                        displayName: sharedData.displayName },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.FedConflict +
            '" data-bind="pageViewComponent: { name: \'login-fed-conflict-view\',\n                    params: {\n                        serverData: svr },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.ProofFedConflict +
            '" data-bind="pageViewComponent: { name: \'login-proof-fed-conflict-view\',\n                    params: {\n                        serverData: svr },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.AadFedConflict +
            '" data-bind="pageViewComponent: { name: \'login-aad-fed-conflict-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.FedLink +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-fed-link-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        username: sharedData.username,\n                        displayName: sharedData.displayName,\n                        otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,\n                        flowToken: sharedData.flowToken },\n                    event: {\n                        redirect: $loginPage.view_onRedirect,\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        setPendingRequest: $loginPage.view_onSetPendingRequest } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.TenantDisambiguation +
            '" data-showIdentityBanner="true" data-bind="pageViewComponent: { name: \'login-tenant-disambiguation-view\',\n                    params: {\n                        serverData: svr,\n                        unsafe_username: sharedData.username,\n                        unsafe_displayName: sharedData.displayName,\n                        tenantList: sharedData.tenantList },\n                    event: {\n                        setBackButtonState: view_onSetIdentityBackButtonState,\n                        submitReady: $loginPage.view_onSubmitReady } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.SignupCredentialPicker +
            '" data-bind="pageViewComponent: { name: \'login-credential-picker-view\',\n                    params: {\n                        serverData: svr,\n                        isInitialView: isInitialState,\n                        isSignup: true,\n                        availableCreds: sharedData.availableSignupCreds },\n                    event: {\n                        redirect: $loginPage.view_onRedirect } }">\n                </div>\n\n                <div data-viewid="' +
            t(0).PaginatedState.RemoteConnectLocation +
            '" data-bind="pageViewComponent: { name: \'login-remote-connect-location-view\',\n                    params: {\n                        serverData: svr } }">\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n\n        <input type="hidden" name="ps" data-bind="value: postedLoginStateViewId" />\n        <input type="hidden" name="psRNGCDefaultType" data-bind="value: postedLoginStateViewRNGCDefaultType" />\n        <input type="hidden" name="psRNGCEntropy" data-bind="value: postedLoginStateViewRNGCEntropy" />\n        <input type="hidden" name="psRNGCSLK" data-bind="value: postedLoginStateViewRNGCSLK" />\n        <input type="hidden" name="canary" data-bind="value: svr.canary" />\n        <input type="hidden" name="ctx" data-bind="value: ctx" />\n        <input type="hidden" name="hpgrequestid" data-bind="value: svr.sessionId" />\n        <input type="hidden" id="i0327" data-bind="attr: { name: svr.sFTName }, value: flowToken" />\n        <input type="hidden" name="PPSX" data-bind="value: svr.sRandomBlob" />\n        <input type="hidden" name="NewUser" value="1" />\n        <input type="hidden" name="FoundMSAs" data-bind="value: svr.sFoundMSAs" />\n        <input type="hidden" name="fspost" data-bind="value: svr.fPOST_ForceSignin ? 1 : 0" />\n        <input type="hidden" name="i21" data-bind="value: wasLearnMoreShown() ? 1 : 0" />\n        <input type="hidden" name="CookieDisclosure" data-bind="value: svr.fShowCookieBanner ? 1 : 0" />\n        <input type="hidden" name="IsFidoSupported" data-bind="value: isFidoSupported() ? 1 : 0" />\n        <input type="hidden" name="isSignupPost" data-bind="value: isSignupPost() ? 1 : 0" />\n\n        <div data-bind="component: { name: \'instrumentation-control\',\n            publicMethods: instrumentationMethods,\n            params: { serverData: svr } }">\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n</form>\n\n<form data-bind="postRedirectForm: postRedirect"></form>\n\n\x3c!-- ko if: svr.urlCBPartnerPreload --\x3e\n<div id="idPartnerPL" data-bind="injectIframe: { url: svr.urlCBPartnerPreload }"></div>\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        i.components.register("cookie-banner-control", { template: t(273), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) });
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8),
            ' --\x3e\n\n<div id="msccBanner" class="cc-banner" role="alert">\n    <div class="cc-container">\n        \x3c!-- ko component: \'accessible-image-control\' --\x3e\n        <img class="cc-icon cc-v-center" role="presentation" pngSrc="') +
            t(275) +
            '" svgSrc="' +
            t(276) +
            '" data-bind="imgSrc" />\n        <img class="cc-icon cc-v-center" role="presentation" pngSrc="' +
            t(277) +
            '" svgSrc="' +
            t(278) +
            "\" data-bind=\"imgSrc\" />\n        \x3c!-- /ko --\x3e\n\n        <span class=\"cc-v-center cc-text\" data-bind=\"\n            htmlWithBindings: html['CT_STR_CookieBanner_Text'],\n            childBindings: {\n                'msccLearnMore': {\n                    href: svr.urlFooterPrivacy,\n                    ariaLabel: str['CT_STR_CookieBanner_Link_AriaLabel'],\n                    css: { 'cc-link cc-v-center float-right': true } } }\"></span>\n    </div>\n</div>";
    },
    function (e, n) {
        e.exports =
            "\x3c!-- ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme --\x3e\n\x3c!-- ko template: { nodes: [lightImageNode], data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme --\x3e\n\x3c!-- ko template: { nodes: [darkImageNode], data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/info_white_e00ab59e3d80d3eb2dee43a21cf7fa0e.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/info_white_400085fad5af434e7f61e0a7e4f90e3d.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/info_f80c92602db0428ef47b2bb71ea236b4.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/info_4883eb1a3cbdddf5a79e28d320cfe5a9.svg";
    },
    function (e, n, t) {
        var i = t(2),
            a = t(0),
            o = t(1),
            r = t(4),
            s = window,
            c = o.Helper,
            l = a.KeyCode;
        function d(e) {
            var n = this,
                t = e.data,
                i = e.templateNodes;
            function a(e) {
                ("Escape" !== (e = e || s.event).code && e.keyCode !== l.Escape) || n.onClose();
            }
            (n.data = t),
                (n.templateNodes = i),
                (n.onClose = r.create()),
                (n.dispose = function () {
                    c.removeEventListener(document.body, "keydown", a);
                }),
                (n.overlay_onClick = function () {
                    return !0;
                }),
                (n.primaryButton_onClick = function () {
                    n.onClose();
                }),
                c.addEventListener(document.body, "keydown", a);
        }
        i.components.register("dialog-control", {
            viewModel: d,
            template: t(280),
            synchronous: !s.ServerData.iMaxStackForKnockoutAsyncComponents || o.Helper.isStackSizeGreaterThan(s.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = d);
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(17),
            ' --\x3e\n\n<div class="dialog-outer" data-bind="click: overlay_onClick">\n    <div class="dialog-middle">\n        <div class="dialog-inner">\n            <div class="dialog-content" role="dialog" data-bind="\n                attr: { \'aria-labelledby\': data.labelledBy },\n                ariaDescribedBy: data.describedBy">\n\n                \x3c!-- ko template: { nodes: templateNodes, data: data } --\x3e\x3c!-- /ko --\x3e\n\n                <div class="position-buttons">\n                    <div class="row">\n                        <div data-bind="component: { name: \'footer-buttons-field\',\n                            params: {\n                                serverData: svr,\n                                primaryButtonId: \'dialogCloseButton\',\n                                primaryButtonText: str[\'CT_STR_Dialog_CloseButton\'],\n                                focusOnPrimaryButton: true,\n                                primaryButtonPreventTabbing: data.primaryButtonPreventTabbing || { direction: \'both\' },\n                                removeBottomMargin: true,\n                                isSecondaryButtonVisible: false },\n                            event: {\n                                primaryButtonClick: primaryButton_onClick } }">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>');
    },
    function (e, n) {
        e.exports =
            "<div class=\"col-xs-24 no-padding-left-right button-container\" data-bind=\"\n    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),\n    css: { 'no-margin-bottom': removeBottomMargin }\">\n\n    \x3c!-- ko if: isSecondaryButtonVisible --\x3e\n    <div class=\"inline-block\">\n        <input type=\"button\" id=\"idBtn_Back\" data-bind=\"\n            attr: { 'id': secondaryButtonId || 'idBtn_Back' },\n            externalCss: {\n                'button': true,\n                'secondary': true },\n            value: secondaryButtonText() || str['CT_HRD_STR_Splitter_Back'],\n            ariaDescribedBy: secondaryButtonDescribedBy,\n            hasFocus: focusOnSecondaryButton,\n            click: secondaryButton_onClick,\n            enable: isSecondaryButtonEnabled\" />\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div data-bind=\"css: { 'inline-block': isPrimaryButtonVisible }\">\n        \x3c!-- type=\"submit\" is needed in-addition to 'type' in primaryButtonAttributes observable to support IE8 --\x3e\n        <input type=\"submit\" id=\"idSIButton9\" data-bind=\"\n            attr: primaryButtonAttributes,\n            externalCss: {\n                'button': true,\n                'primary': true },\n            value: primaryButtonText() || str['CT_PWD_STR_SignIn_Button_Next'],\n            hasFocus: focusOnPrimaryButton,\n            click: primaryButton_onClick,\n            enable: isPrimaryButtonEnabled,\n            visible: isPrimaryButtonVisible,\n            preventTabbing: primaryButtonPreventTabbing\" />\n    </div>\n</div>";
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = window;
        i.components.register("environment-banner-control", { template: t(283), synchronous: !o.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(o.ServerData.iMaxStackForKnockoutAsyncComponents) });
    },
    function (e, n) {
        e.exports =
            "<div class=\"env-banner-inner\" role=\"alert\" aria-atomic=\"true\" data-bind=\"\n    htmlWithBindings: html['CT_STR_EnvironmentBanner_Text'],\n    childBindings: {\n        'envBannerNoLink': {\n            css: { 'env-banner-text': true }\n        },\n        'envBannerLink': {\n            href: svr.urlEnvBannerLink,\n            css: { 'env-banner-link': true }\n        } }\">\n</div>";
    },
    function (e, n, t) {
        "use strict";
        var i,
            a,
            o,
            r =
                (this && this.__extends) ||
                ((i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, n) {
                            e.__proto__ = n;
                        }) ||
                    function (e, n) {
                        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                    }),
                function (e, n) {
                    function t() {
                        this.constructor = e;
                    }
                    i(e, n), (e.prototype = null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
                });
        !(function (e) {
            e.ApplicationInsights || (e.ApplicationInsights = {});
        })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = function () {};
                    e.Base = n;
                })(e.Telemetry || (e.Telemetry = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = function () {
                        (this.ver = 1), (this.sampleRate = 100), (this.tags = {});
                    };
                    e.Envelope = n;
                })(e.Telemetry || (e.Telemetry = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    e.Context || (e.Context = {});
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                e.ApplicationInsights || (e.ApplicationInsights = {});
            })(o || (o = {})),
            (function (e) {
                e.ApplicationInsights || (e.ApplicationInsights = {});
            })(o || (o = {})),
            (function (e) {
                e.ApplicationInsights || (e.ApplicationInsights = {});
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    (e[(e.Verbose = 0)] = "Verbose"), (e[(e.Information = 1)] = "Information"), (e[(e.Warning = 2)] = "Warning"), (e[(e.Error = 3)] = "Error"), (e[(e.Critical = 4)] = "Critical");
                })(e.SeverityLevel || (e.SeverityLevel = {}));
            })(a || (a = {})),
            (function (e) {
                e.ApplicationInsights || (e.ApplicationInsights = {});
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n, t;
                    !(function (e) {
                        (e[(e.CRITICAL = 0)] = "CRITICAL"), (e[(e.WARNING = 1)] = "WARNING");
                    })((n = e.LoggingSeverity || (e.LoggingSeverity = {}))),
                        (function (e) {
                            (e[(e.BrowserDoesNotSupportLocalStorage = 0)] = "BrowserDoesNotSupportLocalStorage"),
                                (e[(e.BrowserCannotReadLocalStorage = 1)] = "BrowserCannotReadLocalStorage"),
                                (e[(e.BrowserCannotReadSessionStorage = 2)] = "BrowserCannotReadSessionStorage"),
                                (e[(e.BrowserCannotWriteLocalStorage = 3)] = "BrowserCannotWriteLocalStorage"),
                                (e[(e.BrowserCannotWriteSessionStorage = 4)] = "BrowserCannotWriteSessionStorage"),
                                (e[(e.BrowserFailedRemovalFromLocalStorage = 5)] = "BrowserFailedRemovalFromLocalStorage"),
                                (e[(e.BrowserFailedRemovalFromSessionStorage = 6)] = "BrowserFailedRemovalFromSessionStorage"),
                                (e[(e.CannotSendEmptyTelemetry = 7)] = "CannotSendEmptyTelemetry"),
                                (e[(e.ClientPerformanceMathError = 8)] = "ClientPerformanceMathError"),
                                (e[(e.ErrorParsingAISessionCookie = 9)] = "ErrorParsingAISessionCookie"),
                                (e[(e.ErrorPVCalc = 10)] = "ErrorPVCalc"),
                                (e[(e.ExceptionWhileLoggingError = 11)] = "ExceptionWhileLoggingError"),
                                (e[(e.FailedAddingTelemetryToBuffer = 12)] = "FailedAddingTelemetryToBuffer"),
                                (e[(e.FailedMonitorAjaxAbort = 13)] = "FailedMonitorAjaxAbort"),
                                (e[(e.FailedMonitorAjaxDur = 14)] = "FailedMonitorAjaxDur"),
                                (e[(e.FailedMonitorAjaxOpen = 15)] = "FailedMonitorAjaxOpen"),
                                (e[(e.FailedMonitorAjaxRSC = 16)] = "FailedMonitorAjaxRSC"),
                                (e[(e.FailedMonitorAjaxSend = 17)] = "FailedMonitorAjaxSend"),
                                (e[(e.FailedToAddHandlerForOnBeforeUnload = 18)] = "FailedToAddHandlerForOnBeforeUnload"),
                                (e[(e.FailedToSendQueuedTelemetry = 19)] = "FailedToSendQueuedTelemetry"),
                                (e[(e.FailedToReportDataLoss = 20)] = "FailedToReportDataLoss"),
                                (e[(e.FlushFailed = 21)] = "FlushFailed"),
                                (e[(e.MessageLimitPerPVExceeded = 22)] = "MessageLimitPerPVExceeded"),
                                (e[(e.MissingRequiredFieldSpecification = 23)] = "MissingRequiredFieldSpecification"),
                                (e[(e.NavigationTimingNotSupported = 24)] = "NavigationTimingNotSupported"),
                                (e[(e.OnError = 25)] = "OnError"),
                                (e[(e.SessionRenewalDateIsZero = 26)] = "SessionRenewalDateIsZero"),
                                (e[(e.SenderNotInitialized = 27)] = "SenderNotInitialized"),
                                (e[(e.StartTrackEventFailed = 28)] = "StartTrackEventFailed"),
                                (e[(e.StopTrackEventFailed = 29)] = "StopTrackEventFailed"),
                                (e[(e.StartTrackFailed = 30)] = "StartTrackFailed"),
                                (e[(e.StopTrackFailed = 31)] = "StopTrackFailed"),
                                (e[(e.TelemetrySampledAndNotSent = 32)] = "TelemetrySampledAndNotSent"),
                                (e[(e.TrackEventFailed = 33)] = "TrackEventFailed"),
                                (e[(e.TrackExceptionFailed = 34)] = "TrackExceptionFailed"),
                                (e[(e.TrackMetricFailed = 35)] = "TrackMetricFailed"),
                                (e[(e.TrackPVFailed = 36)] = "TrackPVFailed"),
                                (e[(e.TrackPVFailedCalc = 37)] = "TrackPVFailedCalc"),
                                (e[(e.TrackTraceFailed = 38)] = "TrackTraceFailed"),
                                (e[(e.TransmissionFailed = 39)] = "TransmissionFailed"),
                                (e[(e.FailedToSetStorageBuffer = 40)] = "FailedToSetStorageBuffer"),
                                (e[(e.FailedToRestoreStorageBuffer = 41)] = "FailedToRestoreStorageBuffer"),
                                (e[(e.InvalidBackendResponse = 42)] = "InvalidBackendResponse"),
                                (e[(e.FailedToFixDepricatedValues = 43)] = "FailedToFixDepricatedValues"),
                                (e[(e.InvalidDurationValue = 44)] = "InvalidDurationValue"),
                                (e[(e.CannotSerializeObject = 45)] = "CannotSerializeObject"),
                                (e[(e.CannotSerializeObjectNonSerializable = 46)] = "CannotSerializeObjectNonSerializable"),
                                (e[(e.CircularReferenceDetected = 47)] = "CircularReferenceDetected"),
                                (e[(e.ClearAuthContextFailed = 48)] = "ClearAuthContextFailed"),
                                (e[(e.ExceptionTruncated = 49)] = "ExceptionTruncated"),
                                (e[(e.IllegalCharsInName = 50)] = "IllegalCharsInName"),
                                (e[(e.ItemNotInArray = 51)] = "ItemNotInArray"),
                                (e[(e.MaxAjaxPerPVExceeded = 52)] = "MaxAjaxPerPVExceeded"),
                                (e[(e.MessageTruncated = 53)] = "MessageTruncated"),
                                (e[(e.NameTooLong = 54)] = "NameTooLong"),
                                (e[(e.SampleRateOutOfRange = 55)] = "SampleRateOutOfRange"),
                                (e[(e.SetAuthContextFailed = 56)] = "SetAuthContextFailed"),
                                (e[(e.SetAuthContextFailedAccountName = 57)] = "SetAuthContextFailedAccountName"),
                                (e[(e.StringValueTooLong = 58)] = "StringValueTooLong"),
                                (e[(e.StartCalledMoreThanOnce = 59)] = "StartCalledMoreThanOnce"),
                                (e[(e.StopCalledWithoutStart = 60)] = "StopCalledWithoutStart"),
                                (e[(e.TelemetryInitializerFailed = 61)] = "TelemetryInitializerFailed"),
                                (e[(e.TrackArgumentsNotSpecified = 62)] = "TrackArgumentsNotSpecified"),
                                (e[(e.UrlTooLong = 63)] = "UrlTooLong"),
                                (e[(e.SessionStorageBufferFull = 64)] = "SessionStorageBufferFull"),
                                (e[(e.CannotAccessCookie = 65)] = "CannotAccessCookie");
                        })((t = e._InternalMessageId || (e._InternalMessageId = {})));
                    var i = (function () {
                        function e(n, i, a, o) {
                            void 0 === a && (a = !1), (this.messageId = n), (this.message = (a ? e.AiUserActionablePrefix : e.AiNonUserActionablePrefix) + t[n].toString());
                            var r = (i ? " message:" + e.sanitizeDiagnosticText(i) : "") + (o ? " props:" + e.sanitizeDiagnosticText(JSON.stringify(o)) : "");
                            this.message += r;
                        }
                        return (
                            (e.sanitizeDiagnosticText = function (e) {
                                return '"' + e.replace(/\"/g, "") + '"';
                            }),
                            (e.AiNonUserActionablePrefix = "AI (Internal): "),
                            (e.AiUserActionablePrefix = "AI: "),
                            e
                        );
                    })();
                    e._InternalLogMessage = i;
                    var a = (function () {
                        function a() {}
                        return (
                            (a.throwInternal = function (e, n, a, o, r) {
                                void 0 === r && (r = !1);
                                var s = new i(n, a, r, o);
                                if (this.enableDebugExceptions()) throw s;
                                if (void 0 !== s && s && "undefined" != typeof s.message) {
                                    if (r) {
                                        var c = t[s.messageId];
                                        (this._messageLogged[c] && !this.verboseLogging()) || (this.warnToConsole(s.message), (this._messageLogged[c] = !0));
                                    } else this.verboseLogging() && this.warnToConsole(s.message);
                                    this.logInternalMessage(e, s);
                                }
                            }),
                            (a.warnToConsole = function (e) {
                                "undefined" != typeof console && console && ("function" == typeof console.warn ? console.warn(e) : "function" == typeof console.log && console.log(e));
                            }),
                            (a.resetInternalMessageCount = function () {
                                (this._messageCount = 0), (this._messageLogged = {});
                            }),
                            (a.clearInternalMessageLoggedTypes = function () {
                                if (e.Util.canUseSessionStorage()) for (var n = e.Util.getSessionStorageKeys(), t = 0; t < n.length; t++) 0 === n[t].indexOf(a.AIInternalMessagePrefix) && e.Util.removeSessionStorage(n[t]);
                            }),
                            (a.setMaxInternalMessageLimit = function (e) {
                                if (!e) throw new Error("limit cannot be undefined.");
                                this.MAX_INTERNAL_MESSAGE_LIMIT = e;
                            }),
                            (a.logInternalMessage = function (o, r) {
                                if (!this._areInternalMessagesThrottled()) {
                                    var s = !0,
                                        c = a.AIInternalMessagePrefix + t[r.messageId];
                                    if (e.Util.canUseSessionStorage()) e.Util.getSessionStorage(c) ? (s = !1) : e.Util.setSessionStorage(c, "1");
                                    else this._messageLogged[c] ? (s = !1) : (this._messageLogged[c] = !0);
                                    if (s && ((this.verboseLogging() || o === n.CRITICAL) && (this.queue.push(r), this._messageCount++), this._messageCount == this.MAX_INTERNAL_MESSAGE_LIMIT)) {
                                        var l = "Internal events throttle limit per PageView reached for this app.",
                                            d = new i(t.MessageLimitPerPVExceeded, l, !1);
                                        this.queue.push(d), this.warnToConsole(l);
                                    }
                                }
                            }),
                            (a._areInternalMessagesThrottled = function () {
                                return this._messageCount >= this.MAX_INTERNAL_MESSAGE_LIMIT;
                            }),
                            (a.AIInternalMessagePrefix = "AITR_"),
                            (a.enableDebugExceptions = function () {
                                return !1;
                            }),
                            (a.verboseLogging = function () {
                                return !1;
                            }),
                            (a.queue = []),
                            (a.MAX_INTERNAL_MESSAGE_LIMIT = 25),
                            (a._messageCount = 0),
                            (a._messageLogged = {}),
                            a
                        );
                    })();
                    e._InternalLogging = a;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n;
                    !(function (e) {
                        (e[(e.LocalStorage = 0)] = "LocalStorage"), (e[(e.SessionStorage = 1)] = "SessionStorage");
                    })(n || (n = {}));
                    var t = (function () {
                        function t() {}
                        return (
                            (t.disableStorage = function () {
                                (t._canUseLocalStorage = !1), (t._canUseSessionStorage = !1);
                            }),
                            (t._getLocalStorageObject = function () {
                                return t.canUseLocalStorage() ? t._getVerifiedStorageObject(n.LocalStorage) : null;
                            }),
                            (t._getVerifiedStorageObject = function (e) {
                                var t,
                                    i,
                                    a = null;
                                try {
                                    (i = new Date()), (a = e === n.LocalStorage ? window.localStorage : window.sessionStorage).setItem(i, i), (t = a.getItem(i) != i), a.removeItem(i), t && (a = null);
                                } catch (o) {
                                    a = null;
                                }
                                return a;
                            }),
                            (t.canUseLocalStorage = function () {
                                return t._canUseLocalStorage === undefined && (t._canUseLocalStorage = !!t._getVerifiedStorageObject(n.LocalStorage)), t._canUseLocalStorage;
                            }),
                            (t.getStorage = function (n) {
                                var i = t._getLocalStorageObject();
                                if (null !== i)
                                    try {
                                        return i.getItem(n);
                                    } catch (a) {
                                        (t._canUseLocalStorage = !1),
                                            e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + t.getExceptionName(a), {
                                                exception: t.dump(a),
                                            });
                                    }
                                return null;
                            }),
                            (t.setStorage = function (n, i) {
                                var a = t._getLocalStorageObject();
                                if (null !== a)
                                    try {
                                        return a.setItem(n, i), !0;
                                    } catch (o) {
                                        (t._canUseLocalStorage = !1),
                                            e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + t.getExceptionName(o), {
                                                exception: t.dump(o),
                                            });
                                    }
                                return !1;
                            }),
                            (t.removeStorage = function (n) {
                                var i = t._getLocalStorageObject();
                                if (null !== i)
                                    try {
                                        return i.removeItem(n), !0;
                                    } catch (a) {
                                        (t._canUseLocalStorage = !1),
                                            e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + t.getExceptionName(a), {
                                                exception: t.dump(a),
                                            });
                                    }
                                return !1;
                            }),
                            (t._getSessionStorageObject = function () {
                                return t.canUseSessionStorage() ? t._getVerifiedStorageObject(n.SessionStorage) : null;
                            }),
                            (t.canUseSessionStorage = function () {
                                return t._canUseSessionStorage === undefined && (t._canUseSessionStorage = !!t._getVerifiedStorageObject(n.SessionStorage)), t._canUseSessionStorage;
                            }),
                            (t.getSessionStorageKeys = function () {
                                var e = [];
                                if (t.canUseSessionStorage()) for (var n in window.sessionStorage) e.push(n);
                                return e;
                            }),
                            (t.getSessionStorage = function (n) {
                                var i = t._getSessionStorageObject();
                                if (null !== i)
                                    try {
                                        return i.getItem(n);
                                    } catch (a) {
                                        (t._canUseSessionStorage = !1),
                                            e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + t.getExceptionName(a), {
                                                exception: t.dump(a),
                                            });
                                    }
                                return null;
                            }),
                            (t.setSessionStorage = function (n, i) {
                                var a = t._getSessionStorageObject();
                                if (null !== a)
                                    try {
                                        return a.setItem(n, i), !0;
                                    } catch (o) {
                                        (t._canUseSessionStorage = !1),
                                            e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + t.getExceptionName(o), {
                                                exception: t.dump(o),
                                            });
                                    }
                                return !1;
                            }),
                            (t.removeSessionStorage = function (n) {
                                var i = t._getSessionStorageObject();
                                if (null !== i)
                                    try {
                                        return i.removeItem(n), !0;
                                    } catch (a) {
                                        (t._canUseSessionStorage = !1),
                                            e._InternalLogging.throwInternal(
                                                e.LoggingSeverity.WARNING,
                                                e._InternalMessageId.BrowserFailedRemovalFromSessionStorage,
                                                "Browser failed removal of session storage item. " + t.getExceptionName(a),
                                                { exception: t.dump(a) }
                                            );
                                    }
                                return !1;
                            }),
                            (t.disableCookies = function () {
                                t._canUseCookies = !1;
                            }),
                            (t.canUseCookies = function () {
                                if (t._canUseCookies === undefined) {
                                    t._canUseCookies = !1;
                                    try {
                                        t._canUseCookies = t.document.cookie !== undefined;
                                    } catch (n) {
                                        e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.CannotAccessCookie, "Cannot access document.cookie - " + t.getExceptionName(n), { exception: t.dump(n) });
                                    }
                                }
                                return t._canUseCookies;
                            }),
                            (t.setCookie = function (e, n, i) {
                                var a = "",
                                    o = "";
                                i && (a = ";domain=" + i), t.document.location && "https:" === t.document.location.protocol && (o = ";secure"), t.canUseCookies() && (t.document.cookie = e + "=" + n + a + ";path=/" + o);
                            }),
                            (t.stringToBoolOrDefault = function (e, n) {
                                return void 0 === n && (n = !1), e === undefined || null === e ? n : "true" === e.toString().toLowerCase();
                            }),
                            (t.getCookie = function (e) {
                                if (t.canUseCookies()) {
                                    var n = "";
                                    if (e && e.length)
                                        for (var i = e + "=", a = t.document.cookie.split(";"), o = 0; o < a.length; o++) {
                                            var r = a[o];
                                            if ((r = t.trim(r)) && 0 === r.indexOf(i)) {
                                                n = r.substring(i.length, a[o].length);
                                                break;
                                            }
                                        }
                                    return n;
                                }
                            }),
                            (t.deleteCookie = function (e) {
                                t.canUseCookies() && (t.document.cookie = e + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;");
                            }),
                            (t.trim = function (e) {
                                return "string" != typeof e ? e : e.replace(/^\s+|\s+$/g, "");
                            }),
                            (t.newId = function () {
                                for (var e = "", n = 1073741824 * Math.random(); n > 0; ) {
                                    (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n % 64)), (n = Math.floor(n / 64));
                                }
                                return e;
                            }),
                            (t.isArray = function (e) {
                                return "[object Array]" === Object.prototype.toString.call(e);
                            }),
                            (t.isError = function (e) {
                                return "[object Error]" === Object.prototype.toString.call(e);
                            }),
                            (t.isDate = function (e) {
                                return "[object Date]" === Object.prototype.toString.call(e);
                            }),
                            (t.toISOStringForIE8 = function (e) {
                                if (t.isDate(e)) {
                                    if (Date.prototype.toISOString) return e.toISOString();
                                    var n = function (e) {
                                        var n = String(e);
                                        return 1 === n.length && (n = "0" + n), n;
                                    };
                                    return (
                                        e.getUTCFullYear() +
                                        "-" +
                                        n(e.getUTCMonth() + 1) +
                                        "-" +
                                        n(e.getUTCDate()) +
                                        "T" +
                                        n(e.getUTCHours()) +
                                        ":" +
                                        n(e.getUTCMinutes()) +
                                        ":" +
                                        n(e.getUTCSeconds()) +
                                        "." +
                                        String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
                                        "Z"
                                    );
                                }
                            }),
                            (t.getIEVersion = function (e) {
                                void 0 === e && (e = null);
                                var n = e ? e.toLowerCase() : navigator.userAgent.toLowerCase();
                                return -1 != n.indexOf("msie") ? parseInt(n.split("msie")[1]) : null;
                            }),
                            (t.msToTimeSpan = function (e) {
                                (isNaN(e) || e < 0) && (e = 0);
                                var n = "" + ((e = Math.round(e)) % 1e3),
                                    t = "" + (Math.floor(e / 1e3) % 60),
                                    i = "" + (Math.floor(e / 6e4) % 60),
                                    a = "" + (Math.floor(e / 36e5) % 24),
                                    o = Math.floor(e / 864e5);
                                return (
                                    (n = 1 === n.length ? "00" + n : 2 === n.length ? "0" + n : n),
                                    (t = t.length < 2 ? "0" + t : t),
                                    (i = i.length < 2 ? "0" + i : i),
                                    (o > 0 ? o + "." : "") + (a = a.length < 2 ? "0" + a : a) + ":" + i + ":" + t + "." + n
                                );
                            }),
                            (t.isCrossOriginError = function (e, n, t, i, a) {
                                return ("Script error." === e || "Script error" === e) && !a;
                            }),
                            (t.dump = function (e) {
                                var n = Object.prototype.toString.call(e),
                                    t = JSON.stringify(e);
                                return "[object Error]" === n && (t = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e.name + "'"), n + t;
                            }),
                            (t.getExceptionName = function (e) {
                                return "[object Error]" === Object.prototype.toString.call(e) ? e.name : "";
                            }),
                            (t.addEventHandler = function (e, n) {
                                if (!window || "string" != typeof e || "function" != typeof n) return !1;
                                var t = "on" + e;
                                if (window.addEventListener) window.addEventListener(e, n, !1);
                                else {
                                    if (!window.attachEvent) return !1;
                                    window.attachEvent.call(t, n);
                                }
                                return !0;
                            }),
                            (t.IsBeaconApiSupported = function () {
                                return "sendBeacon" in navigator && navigator.sendBeacon;
                            }),
                            (t.document = "undefined" != typeof document ? document : {}),
                            (t._canUseCookies = undefined),
                            (t._canUseLocalStorage = undefined),
                            (t._canUseSessionStorage = undefined),
                            (t.NotSpecified = "not_specified"),
                            t
                        );
                    })();
                    e.Util = t;
                    var i = (function () {
                        function e() {}
                        return (
                            (e.parseUrl = function (n) {
                                return e.htmlAnchorElement || (e.htmlAnchorElement = e.document.createElement ? e.document.createElement("a") : {}), (e.htmlAnchorElement.href = n), e.htmlAnchorElement;
                            }),
                            (e.getAbsoluteUrl = function (n) {
                                var t,
                                    i = e.parseUrl(n);
                                return i && (t = i.href), t;
                            }),
                            (e.getPathName = function (n) {
                                var t,
                                    i = e.parseUrl(n);
                                return i && (t = i.pathname), t;
                            }),
                            (e.getCompleteUrl = function (e, n) {
                                return e ? e.toUpperCase() + " " + n : n;
                            }),
                            (e.document = "undefined" != typeof document ? document : {}),
                            e
                        );
                    })();
                    e.UrlHelper = i;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n;
                    !(function (e) {
                        (e[(e.Default = 0)] = "Default"), (e[(e.Required = 1)] = "Required"), (e[(e.Array = 2)] = "Array"), (e[(e.Hidden = 4)] = "Hidden");
                    })((n = e.FieldType || (e.FieldType = {})));
                    var t = (function () {
                        function t() {}
                        return (
                            (t.serialize = function (e) {
                                var n = t._serializeObject(e, "root");
                                return JSON.stringify(n);
                            }),
                            (t._serializeObject = function (i, a) {
                                var o = {};
                                if (!i) return e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.CannotSerializeObject, "cannot serialize object because it is null or undefined", { name: a }, !0), o;
                                if (i.__aiCircularRefCheck)
                                    return e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.CircularReferenceDetected, "Circular reference detected while serializing object", { name: a }, !0), o;
                                if (!i.aiDataContract) {
                                    if ("measurements" === a) o = t._serializeStringMap(i, "number", a);
                                    else if ("properties" === a) o = t._serializeStringMap(i, "string", a);
                                    else if ("tags" === a) o = t._serializeStringMap(i, "string", a);
                                    else if (e.Util.isArray(i)) o = t._serializeArray(i, a);
                                    else {
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.CannotSerializeObjectNonSerializable,
                                            "Attempting to serialize an object which does not implement ISerializable",
                                            { name: a },
                                            !0
                                        );
                                        try {
                                            JSON.stringify(i), (o = i);
                                        } catch (f) {
                                            e._InternalLogging.throwInternal(
                                                e.LoggingSeverity.CRITICAL,
                                                e._InternalMessageId.CannotSerializeObject,
                                                f && "function" == typeof f.toString ? f.toString() : "Error serializing object",
                                                null,
                                                !0
                                            );
                                        }
                                    }
                                    return o;
                                }
                                for (var r in ((i.__aiCircularRefCheck = !0), i.aiDataContract)) {
                                    var s,
                                        c = i.aiDataContract[r],
                                        l = "function" == typeof c ? c() & n.Required : c & n.Required,
                                        d = "function" == typeof c ? c() & n.Hidden : c & n.Hidden,
                                        u = c & n.Array,
                                        p = i[r] !== undefined,
                                        g = "object" == typeof i[r] && null !== i[r];
                                    if (!l || p || u) {
                                        if (!d) (s = g ? (u ? t._serializeArray(i[r], r) : t._serializeObject(i[r], r)) : i[r]) !== undefined && (o[r] = s);
                                    } else
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.CRITICAL,
                                            e._InternalMessageId.MissingRequiredFieldSpecification,
                                            "Missing required field specification. The field is required but not present on source",
                                            { field: r, name: a }
                                        );
                                }
                                return delete i.__aiCircularRefCheck, o;
                            }),
                            (t._serializeArray = function (n, i) {
                                var a = undefined;
                                if (n)
                                    if (e.Util.isArray(n)) {
                                        a = [];
                                        for (var o = 0; o < n.length; o++) {
                                            var r = n[o],
                                                s = t._serializeObject(r, i + "[" + o + "]");
                                            a.push(s);
                                        }
                                    } else
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.CRITICAL,
                                            e._InternalMessageId.ItemNotInArray,
                                            "This field was specified as an array in the contract but the item is not an array.\r\n",
                                            { name: i },
                                            !0
                                        );
                                return a;
                            }),
                            (t._serializeStringMap = function (n, t, i) {
                                var a = undefined;
                                if (n)
                                    for (var o in ((a = {}), n)) {
                                        var r = n[o];
                                        if ("string" === t) r === undefined ? (a[o] = "undefined") : null === r ? (a[o] = "null") : r.toString ? (a[o] = r.toString()) : (a[o] = "invalid field: toString() is not defined.");
                                        else if ("number" === t)
                                            if (r === undefined) a[o] = "undefined";
                                            else if (null === r) a[o] = "null";
                                            else {
                                                var s = parseFloat(r);
                                                isNaN(s) ? (a[o] = "NaN") : (a[o] = s);
                                            }
                                        else (a[o] = "invalid field: " + i + " is of unknown type."), e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, a[o], null, !0);
                                    }
                                return a;
                            }),
                            t
                        );
                    })();
                    e.Serializer = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    !(function (t) {
                        !(function (t) {
                            var i = (function (e) {
                                function i(i, a) {
                                    var o = e.call(this) || this;
                                    return (
                                        (o.name = t.DataSanitizer.sanitizeString(a) || n.Util.NotSpecified),
                                        (o.data = i),
                                        (o.time = n.Util.toISOStringForIE8(new Date())),
                                        (o.aiDataContract = {
                                            time: n.FieldType.Required,
                                            iKey: n.FieldType.Required,
                                            name: n.FieldType.Required,
                                            sampleRate: function () {
                                                return 100 == o.sampleRate ? n.FieldType.Hidden : n.FieldType.Required;
                                            },
                                            tags: n.FieldType.Required,
                                            data: n.FieldType.Required,
                                        }),
                                        o
                                    );
                                }
                                return r(i, e), i;
                            })(e.Telemetry.Envelope);
                            t.Envelope = i;
                        })(t.Common || (t.Common = {}));
                    })(n.Telemetry || (n.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    !(function (n) {
                        !(function (n) {
                            var t = (function (e) {
                                function n() {
                                    var n = (null !== e && e.apply(this, arguments)) || this;
                                    return (n.aiDataContract = {}), n;
                                }
                                return r(n, e), n;
                            })(e.Telemetry.Base);
                            n.Base = t;
                        })(n.Common || (n.Common = {}));
                    })(n.Telemetry || (n.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = function () {
                    (this.applicationVersion = "ai.application.ver"),
                        (this.applicationBuild = "ai.application.build"),
                        (this.applicationTypeId = "ai.application.typeId"),
                        (this.applicationId = "ai.application.applicationId"),
                        (this.deviceId = "ai.device.id"),
                        (this.deviceIp = "ai.device.ip"),
                        (this.deviceLanguage = "ai.device.language"),
                        (this.deviceLocale = "ai.device.locale"),
                        (this.deviceModel = "ai.device.model"),
                        (this.deviceNetwork = "ai.device.network"),
                        (this.deviceNetworkName = "ai.device.networkName"),
                        (this.deviceOEMName = "ai.device.oemName"),
                        (this.deviceOS = "ai.device.os"),
                        (this.deviceOSVersion = "ai.device.osVersion"),
                        (this.deviceRoleInstance = "ai.device.roleInstance"),
                        (this.deviceRoleName = "ai.device.roleName"),
                        (this.deviceScreenResolution = "ai.device.screenResolution"),
                        (this.deviceType = "ai.device.type"),
                        (this.deviceMachineName = "ai.device.machineName"),
                        (this.deviceVMName = "ai.device.vmName"),
                        (this.locationIp = "ai.location.ip"),
                        (this.operationId = "ai.operation.id"),
                        (this.operationName = "ai.operation.name"),
                        (this.operationParentId = "ai.operation.parentId"),
                        (this.operationRootId = "ai.operation.rootId"),
                        (this.operationSyntheticSource = "ai.operation.syntheticSource"),
                        (this.operationIsSynthetic = "ai.operation.isSynthetic"),
                        (this.operationCorrelationVector = "ai.operation.correlationVector"),
                        (this.sessionId = "ai.session.id"),
                        (this.sessionIsFirst = "ai.session.isFirst"),
                        (this.sessionIsNew = "ai.session.isNew"),
                        (this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate"),
                        (this.userAccountId = "ai.user.accountId"),
                        (this.userAgent = "ai.user.userAgent"),
                        (this.userId = "ai.user.id"),
                        (this.userStoreRegion = "ai.user.storeRegion"),
                        (this.userAuthUserId = "ai.user.authUserId"),
                        (this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate"),
                        (this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate"),
                        (this.sampleRate = "ai.sample.sampleRate"),
                        (this.cloudName = "ai.cloud.name"),
                        (this.cloudRoleVer = "ai.cloud.roleVer"),
                        (this.cloudEnvironment = "ai.cloud.environment"),
                        (this.cloudLocation = "ai.cloud.location"),
                        (this.cloudDeploymentUnit = "ai.cloud.deploymentUnit"),
                        (this.serverDeviceOS = "ai.serverDevice.os"),
                        (this.serverDeviceOSVer = "ai.serverDevice.osVer"),
                        (this.internalSdkVersion = "ai.internal.sdkVersion"),
                        (this.internalAgentVersion = "ai.internal.agentVersion"),
                        (this.internalDataCollectorReceivedTime = "ai.internal.dataCollectorReceivedTime"),
                        (this.internalProfileId = "ai.internal.profileId"),
                        (this.internalProfileClassId = "ai.internal.profileClassId"),
                        (this.internalAccountId = "ai.internal.accountId"),
                        (this.internalApplicationName = "ai.internal.applicationName"),
                        (this.internalInstrumentationKey = "ai.internal.instrumentationKey"),
                        (this.internalTelemetryItemId = "ai.internal.telemetryItemId"),
                        (this.internalApplicationType = "ai.internal.applicationType"),
                        (this.internalRequestSource = "ai.internal.requestSource"),
                        (this.internalFlowType = "ai.internal.flowType"),
                        (this.internalIsAudit = "ai.internal.isAudit"),
                        (this.internalTrackingSourceId = "ai.internal.trackingSourceId"),
                        (this.internalTrackingType = "ai.internal.trackingType"),
                        (this.internalIsDiagnosticExample = "ai.internal.isDiagnosticExample");
                };
                e.ContextTagKeys = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (e) {
                        var n = function () {};
                        e.Application = n;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (e) {
                        var n = function () {
                            (this.id = "browser"), (this.type = "Browser");
                        };
                        e.Device = n;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = function (n) {
                            this.sdkVersion = (n.sdkExtension() ? n.sdkExtension() + "_" : "") + "javascript:" + e.Version;
                        };
                        n.Internal = t;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (e) {
                        var n = function () {};
                        e.Location = n;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = function () {
                            (this.id = e.Util.newId()), window && window.location && window.location.pathname && (this.name = window.location.pathname);
                        };
                        n.Operation = t;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function e() {}
                        return (
                            (e.prototype.getHashCodeScore = function (n) {
                                return 100 * (this.getHashCode(n) / e.INT_MAX_VALUE);
                            }),
                            (e.prototype.getHashCode = function (n) {
                                if ("" == n) return 0;
                                for (; n.length < e.MIN_INPUT_LENGTH; ) n = n.concat(n);
                                for (var t = 5381, i = 0; i < n.length; ++i) (t = (t << 5) + t + n.charCodeAt(i)), (t &= t);
                                return Math.abs(t);
                            }),
                            (e.INT_MAX_VALUE = 2147483647),
                            (e.MIN_INPUT_LENGTH = 8),
                            e
                        );
                    })();
                    e.HashCodeScoreGenerator = n;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function n() {
                            this.hashCodeGeneragor = new e.HashCodeScoreGenerator();
                        }
                        return (
                            (n.prototype.getSamplingScore = function (e) {
                                var n = new a.ContextTagKeys();
                                return e.tags[n.userId] ? this.hashCodeGeneragor.getHashCodeScore(e.tags[n.userId]) : e.tags[n.operationId] ? this.hashCodeGeneragor.getHashCodeScore(e.tags[n.operationId]) : Math.random();
                            }),
                            n
                        );
                    })();
                    e.SamplingScoreGenerator = n;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function () {
                            function n(n) {
                                (this.INT_MAX_VALUE = 2147483647),
                                    (n > 100 || n < 0) &&
                                        (e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.SampleRateOutOfRange,
                                            "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.",
                                            { samplingRate: n },
                                            !0
                                        ),
                                        (this.sampleRate = 100)),
                                    (this.sampleRate = n),
                                    (this.samplingScoreGenerator = new e.SamplingScoreGenerator());
                            }
                            return (
                                (n.prototype.isSampledIn = function (e) {
                                    return 100 == this.sampleRate || this.samplingScoreGenerator.getSamplingScore(e) < this.sampleRate;
                                }),
                                n
                            );
                        })();
                        n.Sample = t;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    (e[(e.Start = 0)] = "Start"), (e[(e.End = 1)] = "End");
                })(e.SessionState || (e.SessionState = {}));
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = function () {};
                        n.Session = t;
                        var i = (function () {
                            function n(e) {
                                e || (e = {}),
                                    "function" != typeof e.sessionExpirationMs &&
                                        (e.sessionExpirationMs = function () {
                                            return n.acquisitionSpan;
                                        }),
                                    "function" != typeof e.sessionRenewalMs &&
                                        (e.sessionRenewalMs = function () {
                                            return n.renewalSpan;
                                        }),
                                    (this.config = e),
                                    (this.automaticSession = new t());
                            }
                            return (
                                (n.prototype.update = function () {
                                    this.automaticSession.id || this.initializeAutomaticSession();
                                    var t = e.dateTime.Now(),
                                        i = t - this.automaticSession.acquisitionDate > this.config.sessionExpirationMs(),
                                        a = t - this.automaticSession.renewalDate > this.config.sessionRenewalMs();
                                    i || a
                                        ? ((this.automaticSession.isFirst = undefined), this.renew())
                                        : (!this.cookieUpdatedTimestamp || t - this.cookieUpdatedTimestamp > n.cookieUpdateInterval) &&
                                          ((this.automaticSession.renewalDate = t), this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate));
                                }),
                                (n.prototype.backup = function () {
                                    this.setStorage(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate);
                                }),
                                (n.prototype.initializeAutomaticSession = function () {
                                    var n = e.Util.getCookie("ai_session");
                                    if (n && "function" == typeof n.split) this.initializeAutomaticSessionWithData(n);
                                    else {
                                        var t = e.Util.getStorage("ai_session");
                                        t && this.initializeAutomaticSessionWithData(t);
                                    }
                                    this.automaticSession.id || ((this.automaticSession.isFirst = !0), this.renew());
                                }),
                                (n.prototype.initializeAutomaticSessionWithData = function (n) {
                                    var t = n.split("|");
                                    t.length > 0 && (this.automaticSession.id = t[0]);
                                    try {
                                        if (t.length > 1) {
                                            var i = +t[1];
                                            (this.automaticSession.acquisitionDate = +new Date(i)), (this.automaticSession.acquisitionDate = this.automaticSession.acquisitionDate > 0 ? this.automaticSession.acquisitionDate : 0);
                                        }
                                        if (t.length > 2) {
                                            var a = +t[2];
                                            (this.automaticSession.renewalDate = +new Date(a)), (this.automaticSession.renewalDate = this.automaticSession.renewalDate > 0 ? this.automaticSession.renewalDate : 0);
                                        }
                                    } catch (o) {
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.CRITICAL,
                                            e._InternalMessageId.ErrorParsingAISessionCookie,
                                            "Error parsing ai_session cookie, session will be reset: " + e.Util.getExceptionName(o),
                                            { exception: e.Util.dump(o) }
                                        );
                                    }
                                    0 == this.automaticSession.renewalDate &&
                                        e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SessionRenewalDateIsZero, "AI session renewal date is 0, session will be reset.");
                                }),
                                (n.prototype.renew = function () {
                                    var n = e.dateTime.Now();
                                    (this.automaticSession.id = e.Util.newId()),
                                        (this.automaticSession.acquisitionDate = n),
                                        (this.automaticSession.renewalDate = n),
                                        this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate),
                                        e.Util.canUseLocalStorage() ||
                                            e._InternalLogging.throwInternal(
                                                e.LoggingSeverity.WARNING,
                                                e._InternalMessageId.BrowserDoesNotSupportLocalStorage,
                                                "Browser does not support local storage. Session durations will be inaccurate."
                                            );
                                }),
                                (n.prototype.setCookie = function (n, t, i) {
                                    var a = t + this.config.sessionExpirationMs(),
                                        o = i + this.config.sessionRenewalMs(),
                                        r = new Date(),
                                        s = [n, t, i];
                                    a < o ? r.setTime(a) : r.setTime(o);
                                    var c = this.config.cookieDomain ? this.config.cookieDomain() : null;
                                    e.Util.setCookie("ai_session", s.join("|") + ";expires=" + r.toUTCString(), c), (this.cookieUpdatedTimestamp = e.dateTime.Now());
                                }),
                                (n.prototype.setStorage = function (n, t, i) {
                                    e.Util.setStorage("ai_session", [n, t, i].join("|"));
                                }),
                                (n.acquisitionSpan = 864e5),
                                (n.renewalSpan = 18e5),
                                (n.cookieUpdateInterval = 6e4),
                                n
                            );
                        })();
                        n._SessionManager = i;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function () {
                            function n(t) {
                                var i = e.Util.getCookie(n.userCookieName);
                                if (i) {
                                    var a = i.split(n.cookieSeparator);
                                    a.length > 0 && (this.id = a[0]);
                                }
                                if (((this.config = t), !this.id)) {
                                    this.id = e.Util.newId();
                                    var o = new Date(),
                                        r = e.Util.toISOStringForIE8(o);
                                    (this.accountAcquisitionDate = r), o.setTime(o.getTime() + 31536e6);
                                    var s = [this.id, r],
                                        c = this.config.cookieDomain ? this.config.cookieDomain() : undefined;
                                    e.Util.setCookie(n.userCookieName, s.join(n.cookieSeparator) + ";expires=" + o.toUTCString(), c), e.Util.removeStorage("ai_session");
                                }
                                this.accountId = t.accountId ? t.accountId() : undefined;
                                var l = e.Util.getCookie(n.authUserCookieName);
                                if (l) {
                                    var d = (l = decodeURI(l)).split(n.cookieSeparator);
                                    d[0] && (this.authenticatedId = d[0]), d.length > 1 && d[1] && (this.accountId = d[1]);
                                }
                            }
                            return (
                                (n.prototype.setAuthenticatedUserContext = function (t, i) {
                                    if (!this.validateUserInput(t) || (i && !this.validateUserInput(i)))
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.SetAuthContextFailedAccountName,
                                            "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.",
                                            !0
                                        );
                                    else {
                                        this.authenticatedId = t;
                                        var a = this.authenticatedId;
                                        i && ((this.accountId = i), (a = [this.authenticatedId, this.accountId].join(n.cookieSeparator))), e.Util.setCookie(n.authUserCookieName, encodeURI(a), this.config.cookieDomain());
                                    }
                                }),
                                (n.prototype.clearAuthenticatedUserContext = function () {
                                    (this.authenticatedId = null), (this.accountId = null), e.Util.deleteCookie(n.authUserCookieName);
                                }),
                                (n.prototype.validateUserInput = function (e) {
                                    return !("string" != typeof e || !e || e.match(/,|;|=| |\|/));
                                }),
                                (n.cookieSeparator = "|"),
                                (n.userCookieName = "ai_user"),
                                (n.authUserCookieName = "ai_authUser"),
                                n
                            );
                        })();
                        n.User = t;
                    })(e.Context || (e.Context = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function e() {}
                        return (
                            (e.IsNullOrUndefined = function (e) {
                                return null == e;
                            }),
                            e
                        );
                    })();
                    e.extensions = n;
                    var t = (function () {
                        function e() {}
                        return (
                            (e.GetLength = function (e) {
                                var t = 0;
                                if (!n.IsNullOrUndefined(e)) {
                                    var i = "";
                                    try {
                                        i = e.toString();
                                    } catch (a) {}
                                    (t = i.length), (t = isNaN(t) ? 0 : t);
                                }
                                return t;
                            }),
                            e
                        );
                    })();
                    e.stringUtils = t;
                    var i = (function () {
                        function e() {}
                        return (
                            (e.Now =
                                window.performance && window.performance.now && window.performance.timing
                                    ? function () {
                                          return window.performance.now() + window.performance.timing.navigationStart;
                                      }
                                    : function () {
                                          return new Date().getTime();
                                      }),
                            (e.GetDuration = function (e, t) {
                                var i = null;
                                return 0 === e || 0 === t || n.IsNullOrUndefined(e) || n.IsNullOrUndefined(t) || (i = t - e), i;
                            }),
                            e
                        );
                    })();
                    e.dateTime = i;
                    var a = (function () {
                        function e() {}
                        return (
                            (e.AttachEvent = function (e, t, i) {
                                var a = !1;
                                return n.IsNullOrUndefined(e) || (n.IsNullOrUndefined(e.attachEvent) ? n.IsNullOrUndefined(e.addEventListener) || (e.addEventListener(t, i, !1), (a = !0)) : (e.attachEvent("on" + t, i), (a = !0))), a;
                            }),
                            (e.DetachEvent = function (e, t, i) {
                                n.IsNullOrUndefined(e) || (n.IsNullOrUndefined(e.detachEvent) ? n.IsNullOrUndefined(e.removeEventListener) || e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i));
                            }),
                            e
                        );
                    })();
                    e.EventHelper = a;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = function () {
                        (this.openDone = !1), (this.setRequestHeaderDone = !1), (this.sendDone = !1), (this.abortDone = !1), (this.onreadystatechangeCallbackAttached = !1);
                    };
                    e.XHRMonitoringState = n;
                    var t = (function () {
                        function t(t) {
                            (this.completed = !1),
                                (this.requestHeadersSize = null),
                                (this.ttfb = null),
                                (this.responseReceivingDuration = null),
                                (this.callbackDuration = null),
                                (this.ajaxTotalDuration = null),
                                (this.aborted = null),
                                (this.pageUrl = null),
                                (this.requestUrl = null),
                                (this.requestSize = 0),
                                (this.method = null),
                                (this.status = null),
                                (this.requestSentTime = null),
                                (this.responseStartedTime = null),
                                (this.responseFinishedTime = null),
                                (this.callbackFinishedTime = null),
                                (this.endTime = null),
                                (this.originalOnreadystatechage = null),
                                (this.xhrMonitoringState = new n()),
                                (this.clientFailure = 0),
                                (this.CalculateMetrics = function () {
                                    this.ajaxTotalDuration = Math.round(1e3 * e.dateTime.GetDuration(this.requestSentTime, this.responseFinishedTime)) / 1e3;
                                }),
                                (this.id = t);
                        }
                        return (
                            (t.prototype.getAbsoluteUrl = function () {
                                return this.requestUrl ? e.UrlHelper.getAbsoluteUrl(this.requestUrl) : null;
                            }),
                            (t.prototype.getPathName = function () {
                                return this.requestUrl ? e.Telemetry.Common.DataSanitizer.sanitizeUrl(e.UrlHelper.getCompleteUrl(this.method, this.requestUrl)) : null;
                            }),
                            t
                        );
                    })();
                    e.ajaxRecord = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    var t = (function () {
                        function t(e) {
                            (this.currentWindowHost = window.location.host), (this.appInsights = e), (this.initialized = !1), this.Init();
                        }
                        return (
                            (t.prototype.Init = function () {
                                this.supportsMonitoring() && (this.instrumentOpen(), this.instrumentSend(), this.instrumentAbort(), (this.initialized = !0));
                            }),
                            (t.prototype.isMonitoredInstance = function (e, i) {
                                return this.initialized && (!0 === i || !n.extensions.IsNullOrUndefined(e.ajaxData)) && !0 !== e[t.DisabledPropertyName];
                            }),
                            (t.prototype.supportsMonitoring = function () {
                                var e = !1;
                                return n.extensions.IsNullOrUndefined(XMLHttpRequest) || (e = !0), e;
                            }),
                            (t.prototype.instrumentOpen = function () {
                                var i = XMLHttpRequest.prototype.open,
                                    a = this;
                                XMLHttpRequest.prototype.open = function (o, r, s) {
                                    try {
                                        !a.isMonitoredInstance(this, !0) || (this.ajaxData && this.ajaxData.xhrMonitoringState.openDone) || a.openHandler(this, o, r, s);
                                    } catch (c) {
                                        n._InternalLogging.throwInternal(
                                            n.LoggingSeverity.CRITICAL,
                                            n._InternalMessageId.FailedMonitorAjaxOpen,
                                            "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect.",
                                            { ajaxDiagnosticsMessage: t.getFailedAjaxDiagnosticsMessage(this), exception: e.ApplicationInsights.Util.dump(c) }
                                        );
                                    }
                                    return i.apply(this, arguments);
                                };
                            }),
                            (t.prototype.openHandler = function (e, t, i, a) {
                                var o = new n.ajaxRecord(n.Util.newId());
                                (o.method = t), (o.requestUrl = i), (o.xhrMonitoringState.openDone = !0), (e.ajaxData = o), this.attachToOnReadyStateChange(e);
                            }),
                            (t.getFailedAjaxDiagnosticsMessage = function (e) {
                                var t = "";
                                try {
                                    n.extensions.IsNullOrUndefined(e) || n.extensions.IsNullOrUndefined(e.ajaxData) || n.extensions.IsNullOrUndefined(e.ajaxData.requestUrl) || (t += "(url: '" + e.ajaxData.requestUrl + "')");
                                } catch (i) {}
                                return t;
                            }),
                            (t.prototype.instrumentSend = function () {
                                var i = XMLHttpRequest.prototype.send,
                                    a = this;
                                XMLHttpRequest.prototype.send = function (o) {
                                    try {
                                        a.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.sendDone && a.sendHandler(this, o);
                                    } catch (r) {
                                        n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.FailedMonitorAjaxSend, "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect.", {
                                            ajaxDiagnosticsMessage: t.getFailedAjaxDiagnosticsMessage(this),
                                            exception: e.ApplicationInsights.Util.dump(r),
                                        });
                                    }
                                    return i.apply(this, arguments);
                                };
                            }),
                            (t.prototype.sendHandler = function (e, t) {
                                if (((e.ajaxData.requestSentTime = n.dateTime.Now()), !this.appInsights.config.disableCorrelationHeaders && n.UrlHelper.parseUrl(e.ajaxData.getAbsoluteUrl()).host == this.currentWindowHost)) {
                                    var i = this.appInsights.context.operation.id;
                                    e.setRequestHeader("x-ms-request-root-id", i), e.setRequestHeader("x-ms-request-id", e.ajaxData.id);
                                }
                                e.ajaxData.xhrMonitoringState.sendDone = !0;
                            }),
                            (t.prototype.instrumentAbort = function () {
                                var i = XMLHttpRequest.prototype.abort,
                                    a = this;
                                XMLHttpRequest.prototype.abort = function () {
                                    try {
                                        a.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.abortDone && ((this.ajaxData.aborted = 1), (this.ajaxData.xhrMonitoringState.abortDone = !0));
                                    } catch (o) {
                                        n._InternalLogging.throwInternal(
                                            n.LoggingSeverity.CRITICAL,
                                            n._InternalMessageId.FailedMonitorAjaxAbort,
                                            "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect.",
                                            { ajaxDiagnosticsMessage: t.getFailedAjaxDiagnosticsMessage(this), exception: e.ApplicationInsights.Util.dump(o) }
                                        );
                                    }
                                    return i.apply(this, arguments);
                                };
                            }),
                            (t.prototype.attachToOnReadyStateChange = function (i) {
                                var a = this;
                                i.ajaxData.xhrMonitoringState.onreadystatechangeCallbackAttached = n.EventHelper.AttachEvent(i, "readystatechange", function () {
                                    try {
                                        a.isMonitoredInstance(i) && 4 === i.readyState && a.onAjaxComplete(i);
                                    } catch (r) {
                                        var o = e.ApplicationInsights.Util.dump(r);
                                        (o && -1 != o.toLowerCase().indexOf("c00c023f")) ||
                                            n._InternalLogging.throwInternal(
                                                n.LoggingSeverity.CRITICAL,
                                                n._InternalMessageId.FailedMonitorAjaxRSC,
                                                "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.",
                                                { ajaxDiagnosticsMessage: t.getFailedAjaxDiagnosticsMessage(i), exception: e.ApplicationInsights.Util.dump(r) }
                                            );
                                    }
                                });
                            }),
                            (t.prototype.onAjaxComplete = function (e) {
                                (e.ajaxData.responseFinishedTime = n.dateTime.Now()),
                                    (e.ajaxData.status = e.status),
                                    e.ajaxData.CalculateMetrics(),
                                    e.ajaxData.ajaxTotalDuration < 0
                                        ? n._InternalLogging.throwInternal(
                                              n.LoggingSeverity.WARNING,
                                              n._InternalMessageId.FailedMonitorAjaxDur,
                                              "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.",
                                              { ajaxDiagnosticsMessage: t.getFailedAjaxDiagnosticsMessage(e), requestSentTime: e.ajaxData.requestSentTime, responseFinishedTime: e.ajaxData.responseFinishedTime }
                                          )
                                        : (this.appInsights.trackDependency(
                                              e.ajaxData.id,
                                              e.ajaxData.method,
                                              e.ajaxData.getAbsoluteUrl(),
                                              e.ajaxData.getPathName(),
                                              e.ajaxData.ajaxTotalDuration,
                                              +e.ajaxData.status >= 200 && +e.ajaxData.status < 400,
                                              +e.ajaxData.status
                                          ),
                                          (e.ajaxData = null));
                            }),
                            (t.instrumentedByAppInsightsName = "InstrumentedByAppInsights"),
                            (t.DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation"),
                            t
                        );
                    })();
                    n.AjaxMonitor = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function e(e) {
                            (this._config = e), (this._buffer = []);
                        }
                        return (
                            (e.prototype.enqueue = function (e) {
                                this._buffer.push(e);
                            }),
                            (e.prototype.count = function () {
                                return this._buffer.length;
                            }),
                            (e.prototype.clear = function () {
                                this._buffer.length = 0;
                            }),
                            (e.prototype.getItems = function () {
                                return this._buffer.slice(0);
                            }),
                            (e.prototype.batchPayloads = function (e) {
                                return e && e.length > 0 ? (this._config.emitLineDelimitedJson() ? e.join("\n") : "[" + e.join(",") + "]") : null;
                            }),
                            (e.prototype.markAsSent = function (e) {
                                this.clear();
                            }),
                            (e.prototype.clearSent = function (e) {}),
                            e
                        );
                    })();
                    e.ArraySendBuffer = n;
                    var t = (function () {
                        function n(e) {
                            (this._bufferFullMessageSent = !1), (this._config = e);
                            var t = this.getBuffer(n.BUFFER_KEY),
                                i = this.getBuffer(n.SENT_BUFFER_KEY);
                            (this._buffer = t.concat(i)), this._buffer.length > n.MAX_BUFFER_SIZE && (this._buffer.length = n.MAX_BUFFER_SIZE), this.setBuffer(n.SENT_BUFFER_KEY, []), this.setBuffer(n.BUFFER_KEY, this._buffer);
                        }
                        return (
                            (n.prototype.enqueue = function (t) {
                                this._buffer.length >= n.MAX_BUFFER_SIZE
                                    ? this._bufferFullMessageSent ||
                                      (e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SessionStorageBufferFull, "Maximum buffer size reached: " + this._buffer.length, !0),
                                      (this._bufferFullMessageSent = !0))
                                    : (this._buffer.push(t), this.setBuffer(n.BUFFER_KEY, this._buffer));
                            }),
                            (n.prototype.count = function () {
                                return this._buffer.length;
                            }),
                            (n.prototype.clear = function () {
                                (this._buffer.length = 0), this.setBuffer(n.BUFFER_KEY, []), this.setBuffer(n.SENT_BUFFER_KEY, []), (this._bufferFullMessageSent = !1);
                            }),
                            (n.prototype.getItems = function () {
                                return this._buffer.slice(0);
                            }),
                            (n.prototype.batchPayloads = function (e) {
                                return e && e.length > 0 ? (this._config.emitLineDelimitedJson() ? e.join("\n") : "[" + e.join(",") + "]") : null;
                            }),
                            (n.prototype.markAsSent = function (t) {
                                (this._buffer = this.removePayloadsFromBuffer(t, this._buffer)), this.setBuffer(n.BUFFER_KEY, this._buffer);
                                var i = this.getBuffer(n.SENT_BUFFER_KEY);
                                i instanceof Array &&
                                    t instanceof Array &&
                                    ((i = i.concat(t)).length > n.MAX_BUFFER_SIZE &&
                                        (e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.SessionStorageBufferFull, "Sent buffer reached its maximum size: " + i.length, !0), (i.length = n.MAX_BUFFER_SIZE)),
                                    this.setBuffer(n.SENT_BUFFER_KEY, i));
                            }),
                            (n.prototype.clearSent = function (e) {
                                var t = this.getBuffer(n.SENT_BUFFER_KEY);
                                (t = this.removePayloadsFromBuffer(e, t)), this.setBuffer(n.SENT_BUFFER_KEY, t);
                            }),
                            (n.prototype.removePayloadsFromBuffer = function (e, n) {
                                var t = [];
                                for (var i in n) {
                                    var a = !1;
                                    for (var o in e)
                                        if (e[o] === n[i]) {
                                            a = !0;
                                            break;
                                        }
                                    a || t.push(n[i]);
                                }
                                return t;
                            }),
                            (n.prototype.getBuffer = function (n) {
                                try {
                                    var t = e.Util.getSessionStorage(n);
                                    if (t) {
                                        var i = JSON.parse(t);
                                        if (i) return i;
                                    }
                                } catch (a) {
                                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.FailedToRestoreStorageBuffer, " storage key: " + n + ", " + e.Util.getExceptionName(a), { exception: e.Util.dump(a) });
                                }
                                return [];
                            }),
                            (n.prototype.setBuffer = function (n, t) {
                                try {
                                    var i = JSON.stringify(t);
                                    e.Util.setSessionStorage(n, i);
                                } catch (a) {
                                    e.Util.setSessionStorage(n, JSON.stringify([])),
                                        e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.FailedToSetStorageBuffer, " storage key: " + n + ", " + e.Util.getExceptionName(a) + ". Buffer cleared", {
                                            exception: e.Util.dump(a),
                                        });
                                }
                            }),
                            (n.BUFFER_KEY = "AI_buffer"),
                            (n.SENT_BUFFER_KEY = "AI_sentBuffer"),
                            (n.MAX_BUFFER_SIZE = 2e3),
                            n
                        );
                    })();
                    e.SessionStorageSendBuffer = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function n(n) {
                            ((this._XMLHttpRequestSupported = !1),
                            (this._consecutiveErrors = 0),
                            (this._retryAt = null),
                            (this._lastSend = 0),
                            (this._config = n),
                            (this._sender = null),
                            (this._buffer = e.Util.canUseSessionStorage() && this._config.enableSessionStorageBuffer() ? new e.SessionStorageSendBuffer(n) : new e.ArraySendBuffer(n)),
                            !this._config.isBeaconApiDisabled() && e.Util.IsBeaconApiSupported())
                                ? (this._sender = this._beaconSender)
                                : "undefined" != typeof XMLHttpRequest &&
                                  ("withCredentials" in new XMLHttpRequest() ? ((this._sender = this._xhrSender), (this._XMLHttpRequestSupported = !0)) : "undefined" != typeof XDomainRequest && (this._sender = this._xdrSender));
                        }
                        return (
                            (n.prototype.send = function (n) {
                                try {
                                    if (this._config.disableTelemetry()) return;
                                    if (!n) return void e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.CannotSendEmptyTelemetry, "Cannot send empty telemetry");
                                    if (!this._sender) return void e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.SenderNotInitialized, "Sender was not initialized");
                                    var t = e.Serializer.serialize(n),
                                        i = this._buffer.getItems(),
                                        a = this._buffer.batchPayloads(i);
                                    a && a.length + t.length > this._config.maxBatchSizeInBytes() && this.triggerSend(), this._buffer.enqueue(t), this._setupTimer();
                                } catch (o) {
                                    e._InternalLogging.throwInternal(
                                        e.LoggingSeverity.WARNING,
                                        e._InternalMessageId.FailedAddingTelemetryToBuffer,
                                        "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + e.Util.getExceptionName(o),
                                        { exception: e.Util.dump(o) }
                                    );
                                }
                            }),
                            (n.prototype._setupTimer = function () {
                                var e = this;
                                if (!this._timeoutHandle) {
                                    var n = this._retryAt ? Math.max(0, this._retryAt - Date.now()) : 0,
                                        t = Math.max(this._config.maxBatchInterval(), n);
                                    this._timeoutHandle = setTimeout(function () {
                                        e.triggerSend();
                                    }, t);
                                }
                            }),
                            (n.prototype._getSizeInBytes = function (e) {
                                var n = 0;
                                if (e && e.length)
                                    for (var t = 0; t < e.length; t++) {
                                        var i = e[t];
                                        i && i.length && (n += i.length);
                                    }
                                return n;
                            }),
                            (n.prototype.triggerSend = function (n) {
                                void 0 === n && (n = !0);
                                try {
                                    if (this._config.disableTelemetry()) this._buffer.clear();
                                    else {
                                        if (this._buffer.count() > 0) {
                                            var t = this._buffer.getItems();
                                            this._sender(t, n);
                                        }
                                        this._lastSend = +new Date();
                                    }
                                    clearTimeout(this._timeoutHandle), (this._timeoutHandle = null), (this._retryAt = null);
                                } catch (i) {
                                    (!e.Util.getIEVersion() || e.Util.getIEVersion() > 9) &&
                                        e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + e.Util.getExceptionName(i), {
                                            exception: e.Util.dump(i),
                                        });
                                }
                            }),
                            (n.prototype._setRetryTime = function () {
                                var e;
                                if (this._consecutiveErrors <= 1) e = 10;
                                else {
                                    var n = (Math.pow(2, this._consecutiveErrors) - 1) / 2,
                                        t = Math.floor(Math.random() * n * 10) + 1;
                                    e = Math.max(Math.min(t, 3600), 10);
                                }
                                var i = Date.now() + 1e3 * e;
                                this._retryAt = i;
                            }),
                            (n.prototype._parseResponse = function (n) {
                                try {
                                    var t = JSON.parse(n);
                                    if (t && t.itemsReceived && t.itemsReceived >= t.itemsAccepted && t.itemsReceived - t.itemsAccepted == t.errors.length) return t;
                                } catch (i) {
                                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.InvalidBackendResponse, "Cannot parse the response. " + e.Util.getExceptionName(i));
                                }
                                return null;
                            }),
                            (n.prototype._isRetriable = function (e) {
                                return 408 == e || 429 == e || 500 == e || 503 == e;
                            }),
                            (n.prototype._resendPayload = function (e) {
                                if (e && 0 !== e.length) {
                                    this._buffer.clearSent(e), this._consecutiveErrors++;
                                    for (var n = 0, t = e; n < t.length; n++) {
                                        var i = t[n];
                                        this._buffer.enqueue(i);
                                    }
                                    this._setRetryTime(), this._setupTimer();
                                }
                            }),
                            (n.prototype._formatErrorMessageXhr = function (e, n) {
                                return e ? "XMLHttpRequest,Status:" + e.status + ",Response:" + e.responseText || !1 : n;
                            }),
                            (n.prototype._formatErrorMessageXdr = function (e, n) {
                                return e ? "XDomainRequest,Response:" + e.responseText || !1 : n;
                            }),
                            (n.prototype._xhrSender = function (n, t) {
                                var i = this,
                                    a = new XMLHttpRequest();
                                (a[e.AjaxMonitor.DisabledPropertyName] = !0),
                                    a.open("POST", this._config.endpointUrl(), t),
                                    a.setRequestHeader("Content-type", "application/json"),
                                    (a.onreadystatechange = function () {
                                        return i._xhrReadyStateChange(a, n, n.length);
                                    }),
                                    (a.onerror = function (e) {
                                        return i._onError(n, i._formatErrorMessageXhr(a), e);
                                    });
                                var o = this._buffer.batchPayloads(n);
                                a.send(o), this._buffer.markAsSent(n);
                            }),
                            (n.prototype._xdrSender = function (n, t) {
                                var i = this,
                                    a = new XDomainRequest();
                                (a.onload = function () {
                                    return i._xdrOnLoad(a, n);
                                }),
                                    (a.onerror = function (e) {
                                        return i._onError(n, i._formatErrorMessageXdr(a), e);
                                    });
                                var o = window.location.protocol;
                                if (0 !== this._config.endpointUrl().lastIndexOf(o, 0))
                                    return (
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.TransmissionFailed,
                                            ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."
                                        ),
                                        void this._buffer.clear()
                                    );
                                var r = this._config.endpointUrl().replace(/^(https?:)/, "");
                                a.open("POST", r);
                                var s = this._buffer.batchPayloads(n);
                                a.send(s), this._buffer.markAsSent(n);
                            }),
                            (n.prototype._beaconSender = function (n, t) {
                                var i = this._config.endpointUrl(),
                                    a = this._buffer.batchPayloads(n);
                                navigator.sendBeacon(i, a) ? this._buffer.markAsSent(n) : e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TransmissionFailed, ". Failed to send telemetry with Beacon API.");
                            }),
                            (n.prototype._xhrReadyStateChange = function (n, t, i) {
                                if (4 === n.readyState)
                                    if ((n.status < 200 || n.status >= 300) && 0 !== n.status)
                                        !this._config.isRetryDisabled() && this._isRetriable(n.status)
                                            ? (this._resendPayload(t),
                                              e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.TransmissionFailed, ". Response code " + n.status + ". Will retry to send " + t.length + " items."))
                                            : this._onError(t, this._formatErrorMessageXhr(n));
                                    else if (206 === n.status) {
                                        var a = this._parseResponse(n.responseText || n.response);
                                        a && !this._config.isRetryDisabled() ? this._onPartialSuccess(t, a) : this._onError(t, this._formatErrorMessageXhr(n));
                                    } else (this._consecutiveErrors = 0), this._onSuccess(t, i);
                            }),
                            (n.prototype._xdrOnLoad = function (e, n) {
                                if (!e || (e.responseText + "" != "200" && "" !== e.responseText)) {
                                    var t = this._parseResponse(e.responseText);
                                    t && t.itemsReceived && t.itemsReceived > t.itemsAccepted && !this._config.isRetryDisabled() ? this._onPartialSuccess(n, t) : this._onError(n, this._formatErrorMessageXdr(e));
                                } else (this._consecutiveErrors = 0), this._onSuccess(n, 0);
                            }),
                            (n.prototype._onPartialSuccess = function (n, t) {
                                for (var i = [], a = [], o = 0, r = t.errors.reverse(); o < r.length; o++) {
                                    var s = r[o],
                                        c = n.splice(s.index, 1)[0];
                                    this._isRetriable(s.statusCode) ? a.push(c) : i.push(c);
                                }
                                n.length > 0 && this._onSuccess(n, t.itemsAccepted),
                                    i.length > 0 && this._onError(i, this._formatErrorMessageXhr(null, ["partial success", t.itemsAccepted, "of", t.itemsReceived].join(" "))),
                                    a.length > 0 &&
                                        (this._resendPayload(a),
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.TransmissionFailed,
                                            "Partial success. Delivered: " + n.length + ", Failed: " + i.length + ". Will retry to send " + a.length + " our of " + t.itemsReceived + " items"
                                        ));
                            }),
                            (n.prototype._onError = function (n, t, i) {
                                e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.OnError, "Failed to send telemetry.", { message: t }), this._buffer.clearSent(n);
                            }),
                            (n.prototype._onSuccess = function (e, n) {
                                this._buffer.clearSent(e);
                            }),
                            (n.MaxBeaconPayloadSize = 65536),
                            n
                        );
                    })();
                    e.Sender = n;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = function () {};
                    e.Domain = n;
                })(e.Telemetry || (e.Telemetry = {}));
            })(o || (o = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.properties = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(o.Telemetry.Domain);
                e.MessageData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        !(function (n) {
                            var t = (function () {
                                function n() {}
                                return (
                                    (n.sanitizeKeyAndAddUniqueness = function (e, t) {
                                        var i = e.length,
                                            a = n.sanitizeKey(e);
                                        if (a.length !== i) {
                                            for (var o = 0, r = a; t[r] !== undefined; ) o++, (r = a.substring(0, n.MAX_NAME_LENGTH - 3) + n.padNumber(o));
                                            a = r;
                                        }
                                        return a;
                                    }),
                                    (n.sanitizeKey = function (t) {
                                        return (
                                            t &&
                                                (t = e.Util.trim(t.toString())).length > n.MAX_NAME_LENGTH &&
                                                ((t = t.substring(0, n.MAX_NAME_LENGTH)),
                                                e._InternalLogging.throwInternal(
                                                    e.LoggingSeverity.WARNING,
                                                    e._InternalMessageId.NameTooLong,
                                                    "name is too long.  It has been truncated to " + n.MAX_NAME_LENGTH + " characters.",
                                                    { name: t },
                                                    !0
                                                )),
                                            t
                                        );
                                    }),
                                    (n.sanitizeString = function (t) {
                                        return (
                                            t &&
                                                (t = e.Util.trim(t)).toString().length > n.MAX_STRING_LENGTH &&
                                                ((t = t.toString().substring(0, n.MAX_STRING_LENGTH)),
                                                e._InternalLogging.throwInternal(
                                                    e.LoggingSeverity.WARNING,
                                                    e._InternalMessageId.StringValueTooLong,
                                                    "string value is too long. It has been truncated to " + n.MAX_STRING_LENGTH + " characters.",
                                                    { value: t },
                                                    !0
                                                )),
                                            t
                                        );
                                    }),
                                    (n.sanitizeUrl = function (t) {
                                        return (
                                            t &&
                                                (t = e.Util.trim(t)).length > n.MAX_URL_LENGTH &&
                                                ((t = t.substring(0, n.MAX_URL_LENGTH)),
                                                e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.UrlTooLong, "url is too long, it has been truncated to " + n.MAX_URL_LENGTH + " characters.", { url: t }, !0)),
                                            t
                                        );
                                    }),
                                    (n.sanitizeMessage = function (t) {
                                        return (
                                            t &&
                                                t.length > n.MAX_MESSAGE_LENGTH &&
                                                ((t = t.substring(0, n.MAX_MESSAGE_LENGTH)),
                                                e._InternalLogging.throwInternal(
                                                    e.LoggingSeverity.WARNING,
                                                    e._InternalMessageId.MessageTruncated,
                                                    "message is too long, it has been truncated to " + n.MAX_MESSAGE_LENGTH + " characters.",
                                                    { message: t },
                                                    !0
                                                )),
                                            t
                                        );
                                    }),
                                    (n.sanitizeException = function (t) {
                                        return (
                                            t &&
                                                t.length > n.MAX_EXCEPTION_LENGTH &&
                                                ((t = t.substring(0, n.MAX_EXCEPTION_LENGTH)),
                                                e._InternalLogging.throwInternal(
                                                    e.LoggingSeverity.WARNING,
                                                    e._InternalMessageId.ExceptionTruncated,
                                                    "exception is too long, it has been truncated to " + n.MAX_EXCEPTION_LENGTH + " characters.",
                                                    { exception: t },
                                                    !0
                                                )),
                                            t
                                        );
                                    }),
                                    (n.sanitizeProperties = function (e) {
                                        if (e) {
                                            var t = {};
                                            for (var i in e) {
                                                var a = n.sanitizeString(e[i]);
                                                t[(i = n.sanitizeKeyAndAddUniqueness(i, t))] = a;
                                            }
                                            e = t;
                                        }
                                        return e;
                                    }),
                                    (n.sanitizeMeasurements = function (e) {
                                        if (e) {
                                            var t = {};
                                            for (var i in e) {
                                                var a = e[i];
                                                t[(i = n.sanitizeKeyAndAddUniqueness(i, t))] = a;
                                            }
                                            e = t;
                                        }
                                        return e;
                                    }),
                                    (n.padNumber = function (e) {
                                        var n = "00" + e;
                                        return n.substr(n.length - 3);
                                    }),
                                    (n.MAX_NAME_LENGTH = 150),
                                    (n.MAX_STRING_LENGTH = 1024),
                                    (n.MAX_URL_LENGTH = 2048),
                                    (n.MAX_MESSAGE_LENGTH = 32768),
                                    (n.MAX_EXCEPTION_LENGTH = 32768),
                                    n
                                );
                            })();
                            n.DataSanitizer = t;
                        })(n.Common || (n.Common = {}));
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (t) {
                            function i(i, a, o) {
                                var r = t.call(this) || this;
                                return (
                                    (r.aiDataContract = { ver: e.FieldType.Required, message: e.FieldType.Required, severityLevel: e.FieldType.Default, properties: e.FieldType.Default }),
                                    (i = i || e.Util.NotSpecified),
                                    (r.message = n.Common.DataSanitizer.sanitizeMessage(i)),
                                    (r.properties = n.Common.DataSanitizer.sanitizeProperties(a)),
                                    o && (r.severityLevel = o),
                                    r
                                );
                            }
                            return r(i, t), (i.envelopeType = "Microsoft.ApplicationInsights.{0}.Message"), (i.dataType = "MessageData"), i;
                        })(a.MessageData);
                        n.Trace = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.properties = {}), (n.measurements = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(o.Telemetry.Domain);
                e.EventData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (n) {
                            function t(t, i, a) {
                                var o = n.call(this) || this;
                                return (
                                    (o.aiDataContract = { ver: e.FieldType.Required, name: e.FieldType.Required, properties: e.FieldType.Default, measurements: e.FieldType.Default }),
                                    (o.name = e.Telemetry.Common.DataSanitizer.sanitizeString(t) || e.Util.NotSpecified),
                                    (o.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(i)),
                                    (o.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(a)),
                                    o
                                );
                            }
                            return r(t, n), (t.envelopeType = "Microsoft.ApplicationInsights.{0}.Event"), (t.dataType = "EventData"), t;
                        })(a.EventData);
                        n.Event = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = function () {
                    (this.hasFullStack = !0), (this.parsedStack = []);
                };
                e.ExceptionDetails = n;
            })(a || (a = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.exceptions = []), (n.properties = {}), (n.measurements = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(o.Telemetry.Domain);
                e.ExceptionData = n;
            })(a || (a = {})),
            (function (e) {
                var n = function () {};
                e.StackFrame = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (n) {
                            function t(t, a, o, r, s) {
                                var c = n.call(this) || this;
                                return (
                                    (c.aiDataContract = {
                                        ver: e.FieldType.Required,
                                        handledAt: e.FieldType.Required,
                                        exceptions: e.FieldType.Required,
                                        severityLevel: e.FieldType.Default,
                                        properties: e.FieldType.Default,
                                        measurements: e.FieldType.Default,
                                    }),
                                    (c.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(o)),
                                    (c.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(r)),
                                    (c.handledAt = a || "unhandled"),
                                    (c.exceptions = [new i(t)]),
                                    s && (c.severityLevel = s),
                                    c
                                );
                            }
                            return (
                                r(t, n),
                                (t.CreateSimpleException = function (e, n, t, i, a, o, r) {
                                    return { handledAt: r || "unhandled", exceptions: [{ hasFullStack: !0, message: e, stack: a, typeName: n }] };
                                }),
                                (t.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception"),
                                (t.dataType = "ExceptionData"),
                                t
                            );
                        })(a.ExceptionData);
                        n.Exception = t;
                        var i = (function (t) {
                                function i(i) {
                                    var a = t.call(this) || this;
                                    (a.aiDataContract = {
                                        id: e.FieldType.Default,
                                        outerId: e.FieldType.Default,
                                        typeName: e.FieldType.Required,
                                        message: e.FieldType.Required,
                                        hasFullStack: e.FieldType.Default,
                                        stack: e.FieldType.Default,
                                        parsedStack: e.FieldType.Array,
                                    }),
                                        (a.typeName = n.Common.DataSanitizer.sanitizeString(i.name) || e.Util.NotSpecified),
                                        (a.message = n.Common.DataSanitizer.sanitizeMessage(i.message) || e.Util.NotSpecified);
                                    var o = i.stack;
                                    return (a.parsedStack = a.parseStack(o)), (a.stack = n.Common.DataSanitizer.sanitizeException(o)), (a.hasFullStack = e.Util.isArray(a.parsedStack) && a.parsedStack.length > 0), a;
                                }
                                return (
                                    r(i, t),
                                    (i.prototype.parseStack = function (e) {
                                        var n = undefined;
                                        if ("string" == typeof e) {
                                            var t = e.split("\n");
                                            n = [];
                                            for (var i = 0, a = 0, r = 0; r <= t.length; r++) {
                                                var s = t[r];
                                                if (o.regex.test(s)) {
                                                    var c = new o(t[r], i++);
                                                    (a += c.sizeInBytes), n.push(c);
                                                }
                                            }
                                            if (a > 32768)
                                                for (var l = 0, d = n.length - 1, u = 0, p = l, g = d; l < d; ) {
                                                    if ((u += n[l].sizeInBytes + n[d].sizeInBytes) > 32768) {
                                                        var f = g - p + 1;
                                                        n.splice(p, f);
                                                        break;
                                                    }
                                                    (p = l), (g = d), l++, d--;
                                                }
                                        }
                                        return n;
                                    }),
                                    i
                                );
                            })(a.ExceptionDetails),
                            o = (function (n) {
                                function t(i, a) {
                                    var o = n.call(this) || this;
                                    (o.sizeInBytes = 0),
                                        (o.aiDataContract = { level: e.FieldType.Required, method: e.FieldType.Required, assembly: e.FieldType.Default, fileName: e.FieldType.Default, line: e.FieldType.Default }),
                                        (o.level = a),
                                        (o.method = "<no_method>"),
                                        (o.assembly = e.Util.trim(i));
                                    var r = i.match(t.regex);
                                    return (
                                        r && r.length >= 5 && ((o.method = e.Util.trim(r[2]) || o.method), (o.fileName = e.Util.trim(r[4])), (o.line = parseInt(r[5]) || 0)),
                                        (o.sizeInBytes += o.method.length),
                                        (o.sizeInBytes += o.fileName.length),
                                        (o.sizeInBytes += o.assembly.length),
                                        (o.sizeInBytes += t.baseSize),
                                        (o.sizeInBytes += o.level.toString().length),
                                        (o.sizeInBytes += o.line.toString().length),
                                        o
                                    );
                                }
                                return r(t, n), (t.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/), (t.baseSize = 58), t;
                            })(a.StackFrame);
                        n._StackFrame = o;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.metrics = []), (n.properties = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(o.Telemetry.Domain);
                e.MetricData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    (e[(e.Measurement = 0)] = "Measurement"), (e[(e.Aggregation = 1)] = "Aggregation");
                })(e.DataPointType || (e.DataPointType = {}));
            })(a || (a = {})),
            (function (e) {
                var n = function () {
                    this.kind = e.DataPointType.Measurement;
                };
                e.DataPoint = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        !(function (n) {
                            var t = (function (n) {
                                function t() {
                                    var t = (null !== n && n.apply(this, arguments)) || this;
                                    return (
                                        (t.aiDataContract = {
                                            name: e.FieldType.Required,
                                            kind: e.FieldType.Default,
                                            value: e.FieldType.Required,
                                            count: e.FieldType.Default,
                                            min: e.FieldType.Default,
                                            max: e.FieldType.Default,
                                            stdDev: e.FieldType.Default,
                                        }),
                                        t
                                    );
                                }
                                return r(t, n), t;
                            })(a.DataPoint);
                            n.DataPoint = t;
                        })(n.Common || (n.Common = {}));
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    !(function (t) {
                        var i = (function (i) {
                            function a(a, o, r, s, c, l) {
                                var d = i.call(this) || this;
                                d.aiDataContract = { ver: n.FieldType.Required, metrics: n.FieldType.Required, properties: n.FieldType.Default };
                                var u = new e.ApplicationInsights.Telemetry.Common.DataPoint();
                                return (
                                    (u.count = r > 0 ? r : undefined),
                                    (u.max = isNaN(c) || null === c ? undefined : c),
                                    (u.min = isNaN(s) || null === s ? undefined : s),
                                    (u.name = t.Common.DataSanitizer.sanitizeString(a) || n.Util.NotSpecified),
                                    (u.value = o),
                                    (d.metrics = [u]),
                                    (d.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(l)),
                                    d
                                );
                            }
                            return r(a, i), (a.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric"), (a.dataType = "MetricData"), a;
                        })(a.MetricData);
                        t.Metric = i;
                    })(n.Telemetry || (n.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.properties = {}), (n.measurements = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(e.EventData);
                e.PageViewData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (t) {
                            function i(i, a, o, r, s) {
                                var c = t.call(this) || this;
                                return (
                                    (c.aiDataContract = { ver: e.FieldType.Required, name: e.FieldType.Default, url: e.FieldType.Default, duration: e.FieldType.Default, properties: e.FieldType.Default, measurements: e.FieldType.Default }),
                                    (c.url = n.Common.DataSanitizer.sanitizeUrl(a)),
                                    (c.name = n.Common.DataSanitizer.sanitizeString(i) || e.Util.NotSpecified),
                                    isNaN(o) || (c.duration = e.Util.msToTimeSpan(o)),
                                    (c.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(r)),
                                    (c.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(s)),
                                    c
                                );
                            }
                            return r(i, t), (i.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview"), (i.dataType = "PageviewData"), i;
                        })(a.PageViewData);
                        n.PageView = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                var n = (function (e) {
                    function n() {
                        var n = e.call(this) || this;
                        return (n.ver = 2), (n.properties = {}), (n.measurements = {}), (n = e.call(this) || this);
                    }
                    return r(n, e), n;
                })(e.PageViewData);
                e.PageViewPerfData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (t) {
                            function i(a, o, r, s, c) {
                                var l = t.call(this) || this;
                                (l.aiDataContract = {
                                    ver: e.FieldType.Required,
                                    name: e.FieldType.Default,
                                    url: e.FieldType.Default,
                                    duration: e.FieldType.Default,
                                    perfTotal: e.FieldType.Default,
                                    networkConnect: e.FieldType.Default,
                                    sentRequest: e.FieldType.Default,
                                    receivedResponse: e.FieldType.Default,
                                    domProcessing: e.FieldType.Default,
                                    properties: e.FieldType.Default,
                                    measurements: e.FieldType.Default,
                                }),
                                    (l.isValid = !1);
                                var d = i.getPerformanceTiming();
                                if (d) {
                                    var u = i.getDuration(d.navigationStart, d.loadEventEnd),
                                        p = i.getDuration(d.navigationStart, d.connectEnd),
                                        g = i.getDuration(d.requestStart, d.responseStart),
                                        f = i.getDuration(d.responseStart, d.responseEnd),
                                        m = i.getDuration(d.responseEnd, d.loadEventEnd);
                                    0 == u
                                        ? e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.ErrorPVCalc, "error calculating page view performance.", { total: u, network: p, request: g, response: f, dom: m })
                                        : i.shouldCollectDuration(u, p, g, f, m)
                                        ? u < Math.floor(p) + Math.floor(g) + Math.floor(f) + Math.floor(m)
                                            ? e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.ClientPerformanceMathError, "client performance math error.", {
                                                  total: u,
                                                  network: p,
                                                  request: g,
                                                  response: f,
                                                  dom: m,
                                              })
                                            : ((l.durationMs = u),
                                              (l.perfTotal = l.duration = e.Util.msToTimeSpan(u)),
                                              (l.networkConnect = e.Util.msToTimeSpan(p)),
                                              (l.sentRequest = e.Util.msToTimeSpan(g)),
                                              (l.receivedResponse = e.Util.msToTimeSpan(f)),
                                              (l.domProcessing = e.Util.msToTimeSpan(m)),
                                              (l.isValid = !0))
                                        : e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.InvalidDurationValue, "Invalid page load duration value. Browser perf data won't be sent.", {
                                              total: u,
                                              network: p,
                                              request: g,
                                              response: f,
                                              dom: m,
                                          });
                                }
                                return (
                                    (l.url = n.Common.DataSanitizer.sanitizeUrl(o)),
                                    (l.name = n.Common.DataSanitizer.sanitizeString(a) || e.Util.NotSpecified),
                                    (l.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(s)),
                                    (l.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(c)),
                                    l
                                );
                            }
                            return (
                                r(i, t),
                                (i.prototype.getIsValid = function () {
                                    return this.isValid;
                                }),
                                (i.prototype.getDurationMs = function () {
                                    return this.durationMs;
                                }),
                                (i.getPerformanceTiming = function () {
                                    return i.isPerformanceTimingSupported() ? window.performance.timing : null;
                                }),
                                (i.isPerformanceTimingSupported = function () {
                                    return "undefined" != typeof window && window.performance && window.performance.timing;
                                }),
                                (i.isPerformanceTimingDataReady = function () {
                                    var e = window.performance.timing;
                                    return e.domainLookupStart > 0 && e.navigationStart > 0 && e.responseStart > 0 && e.requestStart > 0 && e.loadEventEnd > 0 && e.responseEnd > 0 && e.connectEnd > 0 && e.domLoading > 0;
                                }),
                                (i.getDuration = function (e, n) {
                                    var t = undefined;
                                    return isNaN(e) || isNaN(n) || (t = Math.max(n - e, 0)), t;
                                }),
                                (i.shouldCollectDuration = function () {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var t = navigator.userAgent,
                                        a = !!t && -1 !== t.toLowerCase().indexOf("googlebot");
                                    if (a) return !1;
                                    for (var o = 0; o < e.length; o++) if (e[o] >= i.MAX_DURATION_ALLOWED) return !1;
                                    return !0;
                                }),
                                (i.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance"),
                                (i.dataType = "PageviewPerformanceData"),
                                (i.MAX_DURATION_ALLOWED = 36e5),
                                i
                            );
                        })(a.PageViewPerfData);
                        n.PageViewPerformance = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    var t = (function () {
                        function t(e) {
                            (this._config = e),
                                (this._sender = new n.Sender(e)),
                                (this.telemetryInitializers = []),
                                "undefined" != typeof window &&
                                    ((this._sessionManager = new n.Context._SessionManager(e)),
                                    (this.application = new n.Context.Application()),
                                    (this.device = new n.Context.Device()),
                                    (this.internal = new n.Context.Internal(e)),
                                    (this.location = new n.Context.Location()),
                                    (this.user = new n.Context.User(e)),
                                    (this.operation = new n.Context.Operation()),
                                    (this.session = new n.Context.Session()),
                                    (this.sample = new n.Context.Sample(e.sampleRate()))),
                                this._addDefaultTelemetryInitializers();
                        }
                        return (
                            (t.prototype.addTelemetryInitializer = function (e) {
                                this.telemetryInitializers.push(e);
                            }),
                            (t.prototype.track = function (e) {
                                return (
                                    e
                                        ? (e.name === n.Telemetry.PageView.envelopeType && n._InternalLogging.resetInternalMessageCount(), this.session && "string" != typeof this.session.id && this._sessionManager.update(), this._track(e))
                                        : n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.TrackArgumentsNotSpecified, "cannot call .track() with a null or undefined argument", null, !0),
                                    e
                                );
                            }),
                            (t.prototype._addDefaultTelemetryInitializers = function () {
                                if (!this._config.isBrowserLinkTrackingEnabled()) {
                                    var n = ["/browserLinkSignalR/", "/__browserLink/"];
                                    this.addTelemetryInitializer(function (t) {
                                        if (t.name === e.ApplicationInsights.Telemetry.RemoteDependencyData.envelopeType) {
                                            var i = t.data;
                                            if (i && i.baseData) for (var a = 0; a < n.length; a++) if (i.baseData.name.indexOf(n[a]) >= 0) return !1;
                                        }
                                        return !0;
                                    });
                                }
                            }),
                            (t.prototype._track = function (e) {
                                this.session && ("string" == typeof this.session.id ? this._applySessionContext(e, this.session) : this._applySessionContext(e, this._sessionManager.automaticSession)),
                                    this._applyApplicationContext(e, this.application),
                                    this._applyDeviceContext(e, this.device),
                                    this._applyInternalContext(e, this.internal),
                                    this._applyLocationContext(e, this.location),
                                    this._applySampleContext(e, this.sample),
                                    this._applyUserContext(e, this.user),
                                    this._applyOperationContext(e, this.operation),
                                    (e.iKey = this._config.instrumentationKey());
                                var t = !1;
                                try {
                                    for (var i = this.telemetryInitializers.length, a = 0; a < i; ++a) {
                                        var o = this.telemetryInitializers[a];
                                        if (o && !1 === o.apply(null, [e])) {
                                            t = !0;
                                            break;
                                        }
                                    }
                                } catch (s) {
                                    (t = !0),
                                        n._InternalLogging.throwInternal(
                                            n.LoggingSeverity.CRITICAL,
                                            n._InternalMessageId.TelemetryInitializerFailed,
                                            "One of telemetry initializers failed, telemetry item will not be sent: " + n.Util.getExceptionName(s),
                                            { exception: n.Util.dump(s) },
                                            !0
                                        );
                                }
                                if (!t)
                                    if ((this._fixDepricatedValues(e), e.name === n.Telemetry.Metric.envelopeType || this.sample.isSampledIn(e))) {
                                        var r = this._config.instrumentationKey().replace(/-/g, "");
                                        (e.name = e.name.replace("{0}", r)), this._sender.send(e);
                                    } else
                                        n._InternalLogging.throwInternal(
                                            n.LoggingSeverity.WARNING,
                                            n._InternalMessageId.TelemetrySampledAndNotSent,
                                            "Telemetry is sampled and not sent to the AI service.",
                                            { SampleRate: this.sample.sampleRate },
                                            !0
                                        );
                                return e;
                            }),
                            (t.prototype._applyApplicationContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.ver && (e.tags[t.applicationVersion] = n.ver), "string" == typeof n.build && (e.tags[t.applicationBuild] = n.build);
                                }
                            }),
                            (t.prototype._applyDeviceContext = function (e, n) {
                                var t = new a.ContextTagKeys();
                                n &&
                                    ("string" == typeof n.id && (e.tags[t.deviceId] = n.id),
                                    "string" == typeof n.ip && (e.tags[t.deviceIp] = n.ip),
                                    "string" == typeof n.language && (e.tags[t.deviceLanguage] = n.language),
                                    "string" == typeof n.locale && (e.tags[t.deviceLocale] = n.locale),
                                    "string" == typeof n.model && (e.tags[t.deviceModel] = n.model),
                                    "undefined" != typeof n.network && (e.tags[t.deviceNetwork] = n.network),
                                    "string" == typeof n.oemName && (e.tags[t.deviceOEMName] = n.oemName),
                                    "string" == typeof n.os && (e.tags[t.deviceOS] = n.os),
                                    "string" == typeof n.osversion && (e.tags[t.deviceOSVersion] = n.osversion),
                                    "string" == typeof n.resolution && (e.tags[t.deviceScreenResolution] = n.resolution),
                                    "string" == typeof n.type && (e.tags[t.deviceType] = n.type));
                            }),
                            (t.prototype._applyInternalContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.agentVersion && (e.tags[t.internalAgentVersion] = n.agentVersion), "string" == typeof n.sdkVersion && (e.tags[t.internalSdkVersion] = n.sdkVersion);
                                }
                            }),
                            (t.prototype._applyLocationContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.ip && (e.tags[t.locationIp] = n.ip);
                                }
                            }),
                            (t.prototype._applyOperationContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.id && (e.tags[t.operationId] = n.id),
                                        "string" == typeof n.name && (e.tags[t.operationName] = n.name),
                                        "string" == typeof n.parentId && (e.tags[t.operationParentId] = n.parentId),
                                        "string" == typeof n.rootId && (e.tags[t.operationRootId] = n.rootId),
                                        "string" == typeof n.syntheticSource && (e.tags[t.operationSyntheticSource] = n.syntheticSource);
                                }
                            }),
                            (t.prototype._applySampleContext = function (e, n) {
                                n && (e.sampleRate = n.sampleRate);
                            }),
                            (t.prototype._applySessionContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.id && (e.tags[t.sessionId] = n.id), "undefined" != typeof n.isFirst && (e.tags[t.sessionIsFirst] = n.isFirst);
                                }
                            }),
                            (t.prototype._applyUserContext = function (e, n) {
                                if (n) {
                                    var t = new a.ContextTagKeys();
                                    "string" == typeof n.accountId && (e.tags[t.userAccountId] = n.accountId),
                                        "string" == typeof n.agent && (e.tags[t.userAgent] = n.agent),
                                        "string" == typeof n.id && (e.tags[t.userId] = n.id),
                                        "string" == typeof n.authenticatedId && (e.tags[t.userAuthUserId] = n.authenticatedId),
                                        "string" == typeof n.storeRegion && (e.tags[t.userStoreRegion] = n.storeRegion);
                                }
                            }),
                            (t.prototype._fixDepricatedValues = function (t) {
                                try {
                                    var i = t.data;
                                    if (i && i.baseType === e.ApplicationInsights.Telemetry.RemoteDependencyData.dataType) {
                                        var a = i.baseData;
                                        a && this._fixRDDDepricatedValues(a);
                                    }
                                } catch (o) {
                                    n._InternalLogging.throwInternal(
                                        n.LoggingSeverity.WARNING,
                                        n._InternalMessageId.FailedToFixDepricatedValues,
                                        "Failed to parse the base data object, to fix the depricated values " + n.Util.getExceptionName(o),
                                        { exception: n.Util.dump(o) }
                                    );
                                }
                            }),
                            (t.prototype._fixRDDDepricatedValues = function (e) {
                                e.commandName && ((e.data = e.commandName), (e.commandName = undefined)),
                                    e.dependencyTypeName && ((e.type = e.dependencyTypeName), (e.dependencyTypeName = undefined)),
                                    e.value && 0 !== e.value && ((e.duration = n.Util.msToTimeSpan(e.value)), (e.value = undefined)),
                                    e.kind && (e.kind = undefined),
                                    e.dependencySource && (e.dependencySource = undefined),
                                    e.async && (e.async = undefined),
                                    e.count && (e.count = undefined),
                                    e.min && (e.min = undefined),
                                    e.max && (e.max = undefined),
                                    e.stdDev && (e.stdDev = undefined),
                                    e.dependencyKind && (e.dependencyKind = undefined);
                            }),
                            t
                        );
                    })();
                    n.TelemetryContext = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    var t = (function (e) {
                        function n() {
                            return e.call(this) || this;
                        }
                        return r(n, e), n;
                    })(e.Telemetry.Base);
                    n.Data = t;
                })(e.Telemetry || (e.Telemetry = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    !(function (t) {
                        !(function (t) {
                            var i = (function (e) {
                                function t(t, i) {
                                    var a = e.call(this) || this;
                                    return (a.aiDataContract = { baseType: n.FieldType.Required, baseData: n.FieldType.Required }), (a.baseType = t), (a.baseData = i), a;
                                }
                                return r(t, e), t;
                            })(e.Telemetry.Data);
                            t.Data = i;
                        })(t.Common || (t.Common = {}));
                    })(n.Telemetry || (n.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function () {
                            function t(e, n) {
                                (this.pageViewPerformanceSent = !1), (this.overridePageViewDuration = !1), (this.overridePageViewDuration = n), (this.appInsights = e);
                            }
                            return (
                                (t.prototype.trackPageView = function (t, i, a, o, r) {
                                    var s = this;
                                    "string" != typeof t && (t = (window.document && window.document.title) || ""), "string" != typeof i && (i = (window.location && window.location.href) || "");
                                    var c = !1,
                                        l = undefined;
                                    if (n.PageViewPerformance.isPerformanceTimingSupported()) {
                                        var d = n.PageViewPerformance.getPerformanceTiming().navigationStart;
                                        (l = n.PageViewPerformance.getDuration(d, +new Date())), n.PageViewPerformance.shouldCollectDuration(l) || (l = undefined);
                                    } else this.appInsights.sendPageViewInternal(t, i, isNaN(r) ? undefined : r, a, o), this.appInsights.flush(), (c = !0);
                                    c || (!this.overridePageViewDuration && isNaN(r)) || (this.appInsights.sendPageViewInternal(t, i, isNaN(r) ? l : r, a, o), this.appInsights.flush(), (c = !0));
                                    if (n.PageViewPerformance.isPerformanceTimingSupported())
                                        var u = setInterval(function () {
                                            try {
                                                if (n.PageViewPerformance.isPerformanceTimingDataReady()) {
                                                    clearInterval(u);
                                                    var r = new n.PageViewPerformance(t, i, null, a, o);
                                                    r.getIsValid() || c
                                                        ? (c || s.appInsights.sendPageViewInternal(t, i, r.getDurationMs(), a, o),
                                                          s.pageViewPerformanceSent || (s.appInsights.sendPageViewPerformanceInternal(r), (s.pageViewPerformanceSent = !0)),
                                                          s.appInsights.flush())
                                                        : (s.appInsights.sendPageViewInternal(t, i, l, a, o), s.appInsights.flush());
                                                } else n.PageViewPerformance.getDuration(d, +new Date()) > 6e4 && (clearInterval(u), c || (s.appInsights.sendPageViewInternal(t, i, 6e4, a, o), s.appInsights.flush()));
                                            } catch (p) {
                                                e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TrackPVFailedCalc, "trackPageView failed on page load calculation: " + e.Util.getExceptionName(p), {
                                                    exception: e.Util.dump(p),
                                                });
                                            }
                                        }, 100);
                                    else
                                        e._InternalLogging.throwInternal(
                                            e.LoggingSeverity.WARNING,
                                            e._InternalMessageId.NavigationTimingNotSupported,
                                            "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."
                                        );
                                }),
                                t
                            );
                        })();
                        n.PageViewManager = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function () {
                            function n(e) {
                                (this.prevPageVisitDataKeyName = "prevPageVisitData"), (this.pageVisitTimeTrackingHandler = e);
                            }
                            return (
                                (n.prototype.trackPreviousPageVisit = function (n, t) {
                                    try {
                                        var i = this.restartPageVisitTimer(n, t);
                                        i && this.pageVisitTimeTrackingHandler(i.pageName, i.pageUrl, i.pageVisitTime);
                                    } catch (a) {
                                        e._InternalLogging.warnToConsole("Auto track page visit time failed, metric will not be collected: " + e.Util.dump(a));
                                    }
                                }),
                                (n.prototype.restartPageVisitTimer = function (n, t) {
                                    try {
                                        var i = this.stopPageVisitTimer();
                                        return this.startPageVisitTimer(n, t), i;
                                    } catch (a) {
                                        return e._InternalLogging.warnToConsole("Call to restart failed: " + e.Util.dump(a)), null;
                                    }
                                }),
                                (n.prototype.startPageVisitTimer = function (n, t) {
                                    try {
                                        if (e.Util.canUseSessionStorage()) {
                                            if (null != e.Util.getSessionStorage(this.prevPageVisitDataKeyName)) throw new Error("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                                            var a = new i(n, t),
                                                o = JSON.stringify(a);
                                            e.Util.setSessionStorage(this.prevPageVisitDataKeyName, o);
                                        }
                                    } catch (r) {
                                        e._InternalLogging.warnToConsole("Call to start failed: " + e.Util.dump(r));
                                    }
                                }),
                                (n.prototype.stopPageVisitTimer = function () {
                                    try {
                                        if (e.Util.canUseSessionStorage()) {
                                            var n = Date.now(),
                                                t = e.Util.getSessionStorage(this.prevPageVisitDataKeyName);
                                            if (t) {
                                                var i = JSON.parse(t);
                                                return (i.pageVisitTime = n - i.pageVisitStartTime), e.Util.removeSessionStorage(this.prevPageVisitDataKeyName), i;
                                            }
                                            return null;
                                        }
                                        return null;
                                    } catch (a) {
                                        return e._InternalLogging.warnToConsole("Stop page visit timer failed: " + e.Util.dump(a)), null;
                                    }
                                }),
                                n
                            );
                        })();
                        n.PageVisitTimeManager = t;
                        var i = function (e, n) {
                            (this.pageVisitStartTime = Date.now()), (this.pageName = e), (this.pageUrl = n);
                        };
                        n.PageVisitData = i;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    (e[(e.SQL = 0)] = "SQL"), (e[(e.Http = 1)] = "Http"), (e[(e.Other = 2)] = "Other");
                })(e.DependencyKind || (e.DependencyKind = {}));
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    (e[(e.Undefined = 0)] = "Undefined"), (e[(e.Aic = 1)] = "Aic"), (e[(e.Apmc = 2)] = "Apmc");
                })(e.DependencySourceType || (e.DependencySourceType = {}));
            })(a || (a = {})),
            (function (e) {
                var n = (function (n) {
                    function t() {
                        var t = n.call(this) || this;
                        return (
                            (t.ver = 2),
                            (t.kind = e.DataPointType.Aggregation),
                            (t.dependencyKind = e.DependencyKind.Other),
                            (t.success = !0),
                            (t.dependencySource = e.DependencySourceType.Apmc),
                            (t.properties = {}),
                            (t.measurements = {}),
                            (t = n.call(this) || this)
                        );
                    }
                    return r(t, n), t;
                })(o.Telemetry.Domain);
                e.RemoteDependencyData = n;
            })(a || (a = {})),
            (function (e) {
                !(function (e) {
                    !(function (n) {
                        var t = (function (t) {
                            function i(i, o, r, s, c, l, d, u, p) {
                                var g = t.call(this) || this;
                                if (
                                    ((g.aiDataContract = {
                                        id: e.FieldType.Required,
                                        ver: e.FieldType.Required,
                                        name: e.FieldType.Default,
                                        resultCode: e.FieldType.Default,
                                        duration: e.FieldType.Default,
                                        success: e.FieldType.Default,
                                        data: e.FieldType.Default,
                                        target: e.FieldType.Default,
                                        type: e.FieldType.Default,
                                        properties: e.FieldType.Default,
                                        measurements: e.FieldType.Default,
                                        kind: e.FieldType.Default,
                                        value: e.FieldType.Default,
                                        count: e.FieldType.Default,
                                        min: e.FieldType.Default,
                                        max: e.FieldType.Default,
                                        stdDev: e.FieldType.Default,
                                        dependencyKind: e.FieldType.Default,
                                        async: e.FieldType.Default,
                                        dependencySource: e.FieldType.Default,
                                        commandName: e.FieldType.Default,
                                        dependencyTypeName: e.FieldType.Default,
                                    }),
                                    (g.id = i),
                                    (g.duration = e.Util.msToTimeSpan(s)),
                                    (g.success = c),
                                    (g.resultCode = l + ""),
                                    (g.dependencyKind = a.DependencyKind.Http),
                                    (g.type = "Ajax"),
                                    (g.data = n.Common.DataSanitizer.sanitizeUrl(r)),
                                    o && o.length > 0)
                                ) {
                                    var f = e.UrlHelper.parseUrl(o);
                                    if (((g.target = f.host), null != f.pathname)) {
                                        var m = 0 === f.pathname.length ? "/" : f.pathname;
                                        "/" !== m.charAt(0) && (m = "/" + m), (g.name = n.Common.DataSanitizer.sanitizeString(d ? d + " " + m : m));
                                    } else g.name = n.Common.DataSanitizer.sanitizeString(o);
                                } else (g.target = r), (g.name = r);
                                return (g.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(u)), (g.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(p)), g;
                            }
                            return r(i, t), (i.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency"), (i.dataType = "RemoteDependencyData"), i;
                        })(a.RemoteDependencyData);
                        n.RemoteDependencyData = t;
                    })(e.Telemetry || (e.Telemetry = {}));
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function n() {
                            this.hashCodeGeneragor = new e.HashCodeScoreGenerator();
                        }
                        return (
                            (n.prototype.isEnabled = function (e, n) {
                                return this.hashCodeGeneragor.getHashCodeScore(e) < n;
                            }),
                            n
                        );
                    })();
                    e.SplitTest = n;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    n.Version = "1.0.12";
                    var t = (function () {
                        function t(a) {
                            var o = this;
                            (this._trackAjaxAttempts = 0), (this.config = a || {});
                            var r = t.defaultConfig;
                            if (r !== undefined) for (var s in r) this.config[s] === undefined && (this.config[s] = r[s]);
                            (n._InternalLogging.verboseLogging = function () {
                                return o.config.verboseLogging;
                            }),
                                (n._InternalLogging.enableDebugExceptions = function () {
                                    return o.config.enableDebug;
                                });
                            var c = {
                                instrumentationKey: function () {
                                    return o.config.instrumentationKey;
                                },
                                accountId: function () {
                                    return o.config.accountId;
                                },
                                sessionRenewalMs: function () {
                                    return o.config.sessionRenewalMs;
                                },
                                sessionExpirationMs: function () {
                                    return o.config.sessionExpirationMs;
                                },
                                endpointUrl: function () {
                                    return o.config.endpointUrl;
                                },
                                emitLineDelimitedJson: function () {
                                    return o.config.emitLineDelimitedJson;
                                },
                                maxBatchSizeInBytes: function () {
                                    return !o.config.isBeaconApiDisabled && n.Util.IsBeaconApiSupported() ? Math.min(o.config.maxBatchSizeInBytes, n.Sender.MaxBeaconPayloadSize) : o.config.maxBatchSizeInBytes;
                                },
                                maxBatchInterval: function () {
                                    return o.config.maxBatchInterval;
                                },
                                disableTelemetry: function () {
                                    return o.config.disableTelemetry;
                                },
                                sampleRate: function () {
                                    return o.config.samplingPercentage;
                                },
                                cookieDomain: function () {
                                    return o.config.cookieDomain;
                                },
                                enableSessionStorageBuffer: function () {
                                    return (o.config.isBeaconApiDisabled || !n.Util.IsBeaconApiSupported()) && o.config.enableSessionStorageBuffer;
                                },
                                isRetryDisabled: function () {
                                    return o.config.isRetryDisabled;
                                },
                                isBeaconApiDisabled: function () {
                                    return o.config.isBeaconApiDisabled;
                                },
                                sdkExtension: function () {
                                    return o.config.sdkExtension;
                                },
                                isBrowserLinkTrackingEnabled: function () {
                                    return o.config.isBrowserLinkTrackingEnabled;
                                },
                            };
                            this.config.isCookieUseDisabled && n.Util.disableCookies(),
                                this.config.isStorageUseDisabled && n.Util.disableStorage(),
                                (this.context = new n.TelemetryContext(c)),
                                (this._pageViewManager = new e.ApplicationInsights.Telemetry.PageViewManager(this, this.config.overridePageViewDuration)),
                                (this._eventTracking = new i("trackEvent")),
                                (this._eventTracking.action = function (e, t, i, a, r) {
                                    r ? isNaN(r.duration) && (r.duration = i) : (r = { duration: i });
                                    var s = new n.Telemetry.Event(e, a, r),
                                        c = new n.Telemetry.Common.Data(n.Telemetry.Event.dataType, s),
                                        l = new n.Telemetry.Common.Envelope(c, n.Telemetry.Event.envelopeType);
                                    o.context.track(l);
                                }),
                                (this._pageTracking = new i("trackPageView")),
                                (this._pageTracking.action = function (e, n, t, i, a) {
                                    o.sendPageViewInternal(e, n, t, i, a);
                                }),
                                (this._pageVisitTimeManager = new n.Telemetry.PageVisitTimeManager(function (e, n, t) {
                                    return o.trackPageVisitTime(e, n, t);
                                })),
                                this.config.disableAjaxTracking || (this._ajaxMonitor = new e.ApplicationInsights.AjaxMonitor(this));
                        }
                        return (
                            (t.prototype.sendPageViewInternal = function (e, t, i, a, o) {
                                var r = new n.Telemetry.PageView(e, t, i, a, o),
                                    s = new n.Telemetry.Common.Data(n.Telemetry.PageView.dataType, r),
                                    c = new n.Telemetry.Common.Envelope(s, n.Telemetry.PageView.envelopeType);
                                this.context.track(c), (this._trackAjaxAttempts = 0);
                            }),
                            (t.prototype.sendPageViewPerformanceInternal = function (e) {
                                var t = new n.Telemetry.Common.Data(n.Telemetry.PageViewPerformance.dataType, e),
                                    i = new n.Telemetry.Common.Envelope(t, n.Telemetry.PageViewPerformance.envelopeType);
                                this.context.track(i);
                            }),
                            (t.prototype.startTrackPage = function (e) {
                                try {
                                    "string" != typeof e && (e = (window.document && window.document.title) || ""), this._pageTracking.start(e);
                                } catch (t) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.StartTrackFailed, "startTrackPage failed, page view may not be collected: " + n.Util.getExceptionName(t), {
                                        exception: n.Util.dump(t),
                                    });
                                }
                            }),
                            (t.prototype.stopTrackPage = function (e, t, i, a) {
                                try {
                                    "string" != typeof e && (e = (window.document && window.document.title) || ""),
                                        "string" != typeof t && (t = (window.location && window.location.href) || ""),
                                        this._pageTracking.stop(e, t, i, a),
                                        this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, t);
                                } catch (o) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.StopTrackFailed, "stopTrackPage failed, page view will not be collected: " + n.Util.getExceptionName(o), {
                                        exception: n.Util.dump(o),
                                    });
                                }
                            }),
                            (t.prototype.trackPageView = function (e, t, i, a, o) {
                                try {
                                    this._pageViewManager.trackPageView(e, t, i, a, o), this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, t);
                                } catch (r) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.TrackPVFailed, "trackPageView failed, page view will not be collected: " + n.Util.getExceptionName(r), {
                                        exception: n.Util.dump(r),
                                    });
                                }
                            }),
                            (t.prototype.startTrackEvent = function (e) {
                                try {
                                    this._eventTracking.start(e);
                                } catch (t) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.StartTrackEventFailed, "startTrackEvent failed, event will not be collected: " + n.Util.getExceptionName(t), {
                                        exception: n.Util.dump(t),
                                    });
                                }
                            }),
                            (t.prototype.stopTrackEvent = function (e, t, i) {
                                try {
                                    this._eventTracking.stop(e, undefined, t, i);
                                } catch (a) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.StopTrackEventFailed, "stopTrackEvent failed, event will not be collected: " + n.Util.getExceptionName(a), {
                                        exception: n.Util.dump(a),
                                    });
                                }
                            }),
                            (t.prototype.trackEvent = function (e, t, i) {
                                try {
                                    var a = new n.Telemetry.Event(e, t, i),
                                        o = new n.Telemetry.Common.Data(n.Telemetry.Event.dataType, a),
                                        r = new n.Telemetry.Common.Envelope(o, n.Telemetry.Event.envelopeType);
                                    this.context.track(r);
                                } catch (s) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.TrackEventFailed, "trackEvent failed, event will not be collected: " + n.Util.getExceptionName(s), {
                                        exception: n.Util.dump(s),
                                    });
                                }
                            }),
                            (t.prototype.trackDependency = function (e, t, i, a, o, r, s, c, l) {
                                if (-1 === this.config.maxAjaxCallsPerView || this._trackAjaxAttempts < this.config.maxAjaxCallsPerView) {
                                    var d = new n.Telemetry.RemoteDependencyData(e, i, a, o, r, s, t, c, l),
                                        u = new n.Telemetry.Common.Data(n.Telemetry.RemoteDependencyData.dataType, d),
                                        p = new n.Telemetry.Common.Envelope(u, n.Telemetry.RemoteDependencyData.envelopeType);
                                    this.context.track(p);
                                } else
                                    this._trackAjaxAttempts === this.config.maxAjaxCallsPerView &&
                                        n._InternalLogging.throwInternal(
                                            n.LoggingSeverity.CRITICAL,
                                            n._InternalMessageId.MaxAjaxPerPVExceeded,
                                            "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.",
                                            !0
                                        );
                                ++this._trackAjaxAttempts;
                            }),
                            (t.prototype.trackAjax = function (e, n, t, i, a, o, r) {
                                this.trackDependency(e, null, n, t, i, a, o);
                            }),
                            (t.prototype.trackException = function (e, t, i, a, o) {
                                try {
                                    if (!n.Util.isError(e))
                                        try {
                                            throw new Error(e);
                                        } catch (l) {
                                            e = l;
                                        }
                                    var r = new n.Telemetry.Exception(e, t, i, a, o),
                                        s = new n.Telemetry.Common.Data(n.Telemetry.Exception.dataType, r),
                                        c = new n.Telemetry.Common.Envelope(s, n.Telemetry.Exception.envelopeType);
                                    this.context.track(c);
                                } catch (d) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.TrackExceptionFailed, "trackException failed, exception will not be collected: " + n.Util.getExceptionName(d), {
                                        exception: n.Util.dump(d),
                                    });
                                }
                            }),
                            (t.prototype.trackMetric = function (e, t, i, a, o, r) {
                                try {
                                    var s = new n.Telemetry.Metric(e, t, i, a, o, r),
                                        c = new n.Telemetry.Common.Data(n.Telemetry.Metric.dataType, s),
                                        l = new n.Telemetry.Common.Envelope(c, n.Telemetry.Metric.envelopeType);
                                    this.context.track(l);
                                } catch (d) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.TrackMetricFailed, "trackMetric failed, metric will not be collected: " + n.Util.getExceptionName(d), {
                                        exception: n.Util.dump(d),
                                    });
                                }
                            }),
                            (t.prototype.trackTrace = function (e, t, i) {
                                try {
                                    var a = new n.Telemetry.Trace(e, t, i),
                                        o = new n.Telemetry.Common.Data(n.Telemetry.Trace.dataType, a),
                                        r = new n.Telemetry.Common.Envelope(o, n.Telemetry.Trace.envelopeType);
                                    this.context.track(r);
                                } catch (s) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.WARNING, n._InternalMessageId.TrackTraceFailed, "trackTrace failed, trace will not be collected: " + n.Util.getExceptionName(s), {
                                        exception: n.Util.dump(s),
                                    });
                                }
                            }),
                            (t.prototype.trackPageVisitTime = function (e, n, t) {
                                var i = { PageName: e, PageUrl: n };
                                this.trackMetric("PageVisitTime", t, 1, t, t, i);
                            }),
                            (t.prototype.flush = function (e) {
                                void 0 === e && (e = !0);
                                try {
                                    this.context._sender.triggerSend(e);
                                } catch (t) {
                                    n._InternalLogging.throwInternal(n.LoggingSeverity.CRITICAL, n._InternalMessageId.FlushFailed, "flush failed, telemetry will not be collected: " + n.Util.getExceptionName(t), {
                                        exception: n.Util.dump(t),
                                    });
                                }
                            }),
                            (t.prototype.setAuthenticatedUserContext = function (e, t) {
                                try {
                                    this.context.user.setAuthenticatedUserContext(e, t);
                                } catch (i) {
                                    n._InternalLogging.throwInternal(
                                        n.LoggingSeverity.WARNING,
                                        n._InternalMessageId.SetAuthContextFailed,
                                        "Setting auth user context failed. " + n.Util.getExceptionName(i),
                                        { exception: n.Util.dump(i) },
                                        !0
                                    );
                                }
                            }),
                            (t.prototype.clearAuthenticatedUserContext = function () {
                                try {
                                    this.context.user.clearAuthenticatedUserContext();
                                } catch (e) {
                                    n._InternalLogging.throwInternal(
                                        n.LoggingSeverity.WARNING,
                                        n._InternalMessageId.SetAuthContextFailed,
                                        "Clearing auth user context failed. " + n.Util.getExceptionName(e),
                                        { exception: n.Util.dump(e) },
                                        !0
                                    );
                                }
                            }),
                            (t.prototype.SendCORSException = function (t) {
                                var i = e.ApplicationInsights.Telemetry.Exception.CreateSimpleException(
                                    "Script error.",
                                    "Error",
                                    "unknown",
                                    "unknown",
                                    "The browser's same-origin policy prevents us from getting the details of this exception. Consider using 'crossorigin' attribute.",
                                    0,
                                    null
                                );
                                i.properties = t;
                                var a = new n.Telemetry.Common.Data(n.Telemetry.Exception.dataType, i),
                                    o = new n.Telemetry.Common.Envelope(a, n.Telemetry.Exception.envelopeType);
                                this.context.track(o);
                            }),
                            (t.prototype._onerror = function (e, t, i, a, o) {
                                try {
                                    var r = { url: t || document.URL };
                                    if (n.Util.isCrossOriginError(e, t, i, a, o)) this.SendCORSException(r);
                                    else {
                                        if (!n.Util.isError(o)) {
                                            var s = "window.onerror@" + r.url + ":" + i + ":" + (a || 0);
                                            (o = new Error(e)).stack = s;
                                        }
                                        this.trackException(o, null, r);
                                    }
                                } catch (d) {
                                    var c = o ? o.name + ", " + o.message : "null",
                                        l = n.Util.dump(d);
                                    n._InternalLogging.throwInternal(
                                        n.LoggingSeverity.CRITICAL,
                                        n._InternalMessageId.ExceptionWhileLoggingError,
                                        "_onerror threw exception while logging error, error will not be collected: " + n.Util.getExceptionName(d),
                                        { exception: l, errorString: c }
                                    );
                                }
                            }),
                            t
                        );
                    })();
                    n.AppInsights = t;
                    var i = (function () {
                        function e(e) {
                            (this._name = e), (this._events = {});
                        }
                        return (
                            (e.prototype.start = function (e) {
                                "undefined" != typeof this._events[e] &&
                                    n._InternalLogging.throwInternal(
                                        n.LoggingSeverity.WARNING,
                                        n._InternalMessageId.StartCalledMoreThanOnce,
                                        "start was called more than once for this event without calling stop.",
                                        { name: this._name, key: e },
                                        !0
                                    ),
                                    (this._events[e] = +new Date());
                            }),
                            (e.prototype.stop = function (e, t, i, a) {
                                var o = this._events[e];
                                if (isNaN(o)) n._InternalLogging.throwInternal(n.LoggingSeverity.WARNING, n._InternalMessageId.StopCalledWithoutStart, "stop was called without a corresponding start.", { name: this._name, key: e }, !0);
                                else {
                                    var r = +new Date(),
                                        s = n.Telemetry.PageViewPerformance.getDuration(o, r);
                                    this.action(e, t, s, i, a);
                                }
                                delete this._events[e], (this._events[e] = undefined);
                            }),
                            e
                        );
                    })();
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (e) {
                    var n = (function () {
                        function n() {}
                        return (
                            (n.reset = function () {
                                n.isEnabled() && (e.Util.setSessionStorage(n.ITEMS_QUEUED_KEY, "0"), e.Util.setSessionStorage(n.ISSUES_REPORTED_KEY, "0"), (n.itemsRestoredFromSessionBuffer = 0));
                            }),
                            (n.isEnabled = function () {
                                return n.enabled && null != n.appInsights && n.appInsights.context._sender._XMLHttpRequestSupported && e.Util.canUseSessionStorage();
                            }),
                            (n.getIssuesReported = function () {
                                return !n.isEnabled() || isNaN(+e.Util.getSessionStorage(n.ISSUES_REPORTED_KEY)) ? 0 : +e.Util.getSessionStorage(n.ISSUES_REPORTED_KEY);
                            }),
                            (n.incrementItemsQueued = function () {
                                try {
                                    if (n.isEnabled()) {
                                        var t = n.getNumberOfLostItems();
                                        ++t, e.Util.setSessionStorage(n.ITEMS_QUEUED_KEY, t.toString());
                                    }
                                } catch (i) {}
                            }),
                            (n.decrementItemsQueued = function (t) {
                                try {
                                    if (n.isEnabled()) {
                                        var i = n.getNumberOfLostItems();
                                        (i -= t) < 0 && (i = 0), e.Util.setSessionStorage(n.ITEMS_QUEUED_KEY, i.toString());
                                    }
                                } catch (a) {}
                            }),
                            (n.getNumberOfLostItems = function () {
                                var t = 0;
                                try {
                                    n.isEnabled() && (t = isNaN(+e.Util.getSessionStorage(n.ITEMS_QUEUED_KEY)) ? 0 : +e.Util.getSessionStorage(n.ITEMS_QUEUED_KEY));
                                } catch (i) {
                                    t = 0;
                                }
                                return t;
                            }),
                            (n.reportLostItems = function () {
                                try {
                                    if (n.isEnabled() && n.getIssuesReported() < n.LIMIT_PER_SESSION && n.getNumberOfLostItems() > 0) {
                                        var t = n.getNumberOfLostItems() - n.itemsRestoredFromSessionBuffer;
                                        n.appInsights.trackTrace('AI (Internal): Internal report DATALOSS:"' + t + '"', null), n.appInsights.flush();
                                        var i = n.getIssuesReported();
                                        ++i, e.Util.setSessionStorage(n.ISSUES_REPORTED_KEY, i.toString());
                                    }
                                } catch (a) {
                                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.FailedToReportDataLoss, "Failed to report data loss: " + e.Util.getExceptionName(a), { exception: e.Util.dump(a) });
                                } finally {
                                    try {
                                        n.reset();
                                    } catch (a) {}
                                }
                            }),
                            (n.enabled = !1),
                            (n.itemsRestoredFromSessionBuffer = 0),
                            (n.LIMIT_PER_SESSION = 10),
                            (n.ITEMS_QUEUED_KEY = "AI_itemsQueued"),
                            (n.ISSUES_REPORTED_KEY = "AI_lossIssuesReported"),
                            n
                        );
                    })();
                    e.DataLossAnalyzer = n;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    var t = (function () {
                        function t(n) {
                            n.queue = n.queue || [];
                            var i = n.config || {};
                            if (i && !i.instrumentationKey)
                                if ((i = n).iKey) (e.ApplicationInsights.Version = "0.10.0.0"), (i.instrumentationKey = i.iKey);
                                else {
                                    if (!i.applicationInsightsId) throw new Error("Cannot load Application Insights SDK, no instrumentationKey was provided.");
                                    (e.ApplicationInsights.Version = "0.7.2.0"), (i.instrumentationKey = i.applicationInsightsId);
                                }
                            (i = t.getDefaultConfig(i)), (this.snippet = n), (this.config = i);
                        }
                        return (
                            (t.prototype.loadAppInsights = function () {
                                var n = new e.ApplicationInsights.AppInsights(this.config);
                                if (this.config.iKey) {
                                    var t = n.trackPageView;
                                    n.trackPageView = function (e, i, a) {
                                        t.apply(n, [null, e, i, a]);
                                    };
                                }
                                "function" == typeof this.snippet.logPageView &&
                                    (n.logPageView = function (e, t, i) {
                                        n.trackPageView(null, e, t, i);
                                    });
                                return (
                                    "function" == typeof this.snippet.logEvent &&
                                        (n.logEvent = function (e, t, i) {
                                            n.trackEvent(e, t, i);
                                        }),
                                    n
                                );
                            }),
                            (t.prototype.emptyQueue = function () {
                                try {
                                    if (e.ApplicationInsights.Util.isArray(this.snippet.queue)) {
                                        for (var t = this.snippet.queue.length, i = 0; i < t; i++) {
                                            (0, this.snippet.queue[i])();
                                        }
                                        (this.snippet.queue = undefined), delete this.snippet.queue;
                                    }
                                } catch (o) {
                                    var a = {};
                                    o && "function" == typeof o.toString && (a.exception = o.toString()),
                                        e.ApplicationInsights._InternalLogging.throwInternal(n.LoggingSeverity.WARNING, n._InternalMessageId.FailedToSendQueuedTelemetry, "Failed to send queued telemetry", a);
                                }
                            }),
                            (t.prototype.pollInteralLogs = function (n) {
                                return setInterval(function () {
                                    for (var t = e.ApplicationInsights._InternalLogging.queue, i = t.length, a = 0; a < i; a++) n.trackTrace(t[a].message);
                                    t.length = 0;
                                }, this.config.diagnosticLogInterval);
                            }),
                            (t.prototype.addHousekeepingBeforeUnload = function (n) {
                                if (!n.config.disableFlushOnBeforeUnload && "onbeforeunload" in window) {
                                    e.ApplicationInsights.Util.addEventHandler("beforeunload", function () {
                                        n.context._sender.triggerSend(), n.context._sessionManager.backup();
                                    }) ||
                                        e.ApplicationInsights._InternalLogging.throwInternal(
                                            e.ApplicationInsights.LoggingSeverity.CRITICAL,
                                            e.ApplicationInsights._InternalMessageId.FailedToAddHandlerForOnBeforeUnload,
                                            "Could not add handler for beforeunload"
                                        );
                                }
                            }),
                            (t.getDefaultConfig = function (e) {
                                return (
                                    e || (e = {}),
                                    (e.endpointUrl = e.endpointUrl || "https://dc.services.visualstudio.com/v2/track"),
                                    (e.sessionRenewalMs = 18e5),
                                    (e.sessionExpirationMs = 864e5),
                                    (e.maxBatchSizeInBytes = e.maxBatchSizeInBytes > 0 ? e.maxBatchSizeInBytes : 102400),
                                    (e.maxBatchInterval = isNaN(e.maxBatchInterval) ? 15e3 : e.maxBatchInterval),
                                    (e.enableDebug = n.Util.stringToBoolOrDefault(e.enableDebug)),
                                    (e.disableExceptionTracking = n.Util.stringToBoolOrDefault(e.disableExceptionTracking)),
                                    (e.disableTelemetry = n.Util.stringToBoolOrDefault(e.disableTelemetry)),
                                    (e.verboseLogging = n.Util.stringToBoolOrDefault(e.verboseLogging)),
                                    (e.emitLineDelimitedJson = n.Util.stringToBoolOrDefault(e.emitLineDelimitedJson)),
                                    (e.diagnosticLogInterval = e.diagnosticLogInterval || 1e4),
                                    (e.autoTrackPageVisitTime = n.Util.stringToBoolOrDefault(e.autoTrackPageVisitTime)),
                                    (isNaN(e.samplingPercentage) || e.samplingPercentage <= 0 || e.samplingPercentage >= 100) && (e.samplingPercentage = 100),
                                    (e.disableAjaxTracking = n.Util.stringToBoolOrDefault(e.disableAjaxTracking)),
                                    (e.maxAjaxCallsPerView = isNaN(e.maxAjaxCallsPerView) ? 500 : e.maxAjaxCallsPerView),
                                    (e.isBeaconApiDisabled = n.Util.stringToBoolOrDefault(e.isBeaconApiDisabled, !0)),
                                    (e.disableCorrelationHeaders = n.Util.stringToBoolOrDefault(e.disableCorrelationHeaders)),
                                    (e.disableFlushOnBeforeUnload = n.Util.stringToBoolOrDefault(e.disableFlushOnBeforeUnload)),
                                    (e.enableSessionStorageBuffer = n.Util.stringToBoolOrDefault(e.enableSessionStorageBuffer, !0)),
                                    (e.isRetryDisabled = n.Util.stringToBoolOrDefault(e.isRetryDisabled)),
                                    (e.isCookieUseDisabled = n.Util.stringToBoolOrDefault(e.isCookieUseDisabled)),
                                    (e.isStorageUseDisabled = n.Util.stringToBoolOrDefault(e.isStorageUseDisabled)),
                                    (e.isBrowserLinkTrackingEnabled = n.Util.stringToBoolOrDefault(e.isBrowserLinkTrackingEnabled)),
                                    e
                                );
                            }),
                            t
                        );
                    })();
                    n.Initialization = t;
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (function (e) {
                !(function (n) {
                    try {
                        if ("undefined" != typeof window && "undefined" != typeof JSON) {
                            if (window.appInsights === undefined) e.ApplicationInsights.AppInsights.defaultConfig = e.ApplicationInsights.Initialization.getDefaultConfig();
                            else {
                                var t = window.appInsights || {},
                                    i = new e.ApplicationInsights.Initialization(t),
                                    a = i.loadAppInsights();
                                for (var o in a) t[o] = a[o];
                                i.emptyQueue(), i.pollInteralLogs(a), i.addHousekeepingBeforeUnload(a);
                            }
                        }
                    } catch (r) {
                        e.ApplicationInsights._InternalLogging.warnToConsole("Failed to initialize AppInsights JS SDK: " + r.message);
                    }
                })(e.ApplicationInsights || (e.ApplicationInsights = {}));
            })(o || (o = {})),
            (n.Microsoft = o),
            (n.AI = a);
    },
    function (e, n) {
        e.exports =
            '<input type="hidden" name="i2" data-bind="value: clientMode" />\n<input type="hidden" name="i17" data-bind="value: srsFailed" />\n<input type="hidden" name="i18" data-bind="value: srsSuccess" />\n<input type="hidden" name="i19" data-bind="value: timeOnPage" />';
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8),
            ' --\x3e\n\n\x3c!-- ko if: bannerLogoUrl --\x3e\n<img class="banner-logo" role="presentation" data-bind="attr: { src: bannerLogoUrl }" />\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: !bannerLogoUrl && !isChinaDc --\x3e\n    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n    <img class="logo" role="img" pngSrc="') +
            t(287) +
            '" svgSrc="' +
            t(288) +
            '" data-bind="imgSrc, attr: { alt: str[\'MOBILE_STR_Footer_Microsoft\'] }" />\n    <img class="logo" role="img" pngSrc="' +
            t(289) +
            '" svgSrc="' +
            t(290) +
            '" data-bind="imgSrc, attr: { alt: str[\'MOBILE_STR_Footer_Microsoft\'] }" />\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/microsoft_logo_white_a2203a52ce0843427c69786e18841437.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/microsoft_logo_white_595e9206d4274c42c27b66e371fa633d.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg";
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8),
            ' --\x3e\n\n\x3c!-- ko if: useCssAnimation --\x3e\n<div></div><div></div><div></div><div></div><div></div>\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: useCssAnimation --\x3e\n    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n    <img role="presentation" src="') +
            t(292) +
            '" />\n    <img role="presentation" src="' +
            t(293) +
            '" />\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/marching_ants_white_166de53471265253ab3a456defe6da23.gif";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/marching_ants_b540a8e518037192e32c4fe58bf2dbab.gif";
    },
    function (e, n, t) {
        var i = {
            "./AppCentipede_Beam.png": 295,
            "./AppCentipede_Beam.svg": 296,
            "./AppCentipede_Beam_white.png": 297,
            "./AppCentipede_Beam_white.svg": 298,
            "./AppCentipede_Bing.png": 299,
            "./AppCentipede_Bing.svg": 300,
            "./AppCentipede_Bing_white.png": 301,
            "./AppCentipede_Bing_white.svg": 302,
            "./AppCentipede_Cortana.png": 303,
            "./AppCentipede_Cortana.svg": 304,
            "./AppCentipede_Cortana_white.png": 305,
            "./AppCentipede_Cortana_white.svg": 306,
            "./AppCentipede_Excel.png": 307,
            "./AppCentipede_Excel.svg": 308,
            "./AppCentipede_Excel_white.png": 309,
            "./AppCentipede_Excel_white.svg": 310,
            "./AppCentipede_Health.png": 311,
            "./AppCentipede_Health.svg": 312,
            "./AppCentipede_Health_white.png": 313,
            "./AppCentipede_Health_white.svg": 314,
            "./AppCentipede_MSN.png": 315,
            "./AppCentipede_MSN.svg": 316,
            "./AppCentipede_MSN_white.png": 317,
            "./AppCentipede_MSN_white.svg": 318,
            "./AppCentipede_Microsoft.png": 319,
            "./AppCentipede_Microsoft.svg": 320,
            "./AppCentipede_Microsoft_white.png": 321,
            "./AppCentipede_Microsoft_white.svg": 322,
            "./AppCentipede_MileIQ.png": 323,
            "./AppCentipede_MileIQ.svg": 324,
            "./AppCentipede_MileIQ_white.png": 325,
            "./AppCentipede_MileIQ_white.svg": 326,
            "./AppCentipede_Minecraft.png": 327,
            "./AppCentipede_Minecraft.svg": 328,
            "./AppCentipede_Minecraft_white.png": 329,
            "./AppCentipede_Minecraft_white.svg": 330,
            "./AppCentipede_Office.png": 331,
            "./AppCentipede_Office.svg": 332,
            "./AppCentipede_Office_white.png": 333,
            "./AppCentipede_Office_white.svg": 334,
            "./AppCentipede_OneDrive.svg": 335,
            "./AppCentipede_OneDrive_white.svg": 336,
            "./AppCentipede_Onedrive.png": 337,
            "./AppCentipede_Onedrive_white.png": 338,
            "./AppCentipede_Outlook.png": 339,
            "./AppCentipede_Outlook.svg": 340,
            "./AppCentipede_Outlook_white.png": 341,
            "./AppCentipede_Outlook_white.svg": 342,
            "./AppCentipede_PowerPoint.png": 343,
            "./AppCentipede_PowerPoint.svg": 344,
            "./AppCentipede_PowerPoint_white.png": 345,
            "./AppCentipede_PowerPoint_white.svg": 346,
            "./AppCentipede_Skype.png": 347,
            "./AppCentipede_Skype.svg": 348,
            "./AppCentipede_SkypeDialer.png": 349,
            "./AppCentipede_SkypeDialer.svg": 350,
            "./AppCentipede_SkypeDialer_white.png": 351,
            "./AppCentipede_SkypeDialer_white.svg": 352,
            "./AppCentipede_Skype_white.png": 353,
            "./AppCentipede_Skype_white.svg": 354,
            "./AppCentipede_Word.png": 355,
            "./AppCentipede_Word.svg": 356,
            "./AppCentipede_Word_white.png": 357,
            "./AppCentipede_Word_white.svg": 358,
            "./AppCentipede_Xbox.png": 359,
            "./AppCentipede_Xbox.svg": 360,
            "./AppCentipede_Xbox_white.png": 361,
            "./AppCentipede_Xbox_white.svg": 362,
        };
        function a(e) {
            var n = o(e);
            return t(n);
        }
        function o(e) {
            if (!t.o(i, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw ((n.code = "MODULE_NOT_FOUND"), n);
            }
            return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = o),
            (e.exports = a),
            (a.id = 294);
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_beam_897b992bc21661b1bb85563f9067daff.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_beam_919493bbf8a26e37ef09581a2d6c669e.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_beam_white_822e15e3cdacd76bd8c6715b11edd6ab.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_beam_white_4c19d9bdaa062a6d16dfa3ddf1a05cf6.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_bing_01509890278f938ba6070b34bd674e97.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_bing_9a24fa411a5f181b8e66a0fe6abfa325.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_bing_white_84563b48358d261f9e365ea347fa5fc7.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_bing_white_7876fa06353db7b26af550293e8fa831.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_60bc94b988f085b46cfa1946c9f13deb.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_288e96d92e1010de6612fb2594b3e29d.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_white_f9360a48d6fbcf39bcbe23f94239d6d6.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_cortana_white_f5f405824a0e680d7801300975082f93.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_excel_16121459dd2076b8e91df7db6ca028a8.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_excel_8101a2b4643129a8a7507145bd743390.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_excel_white_390010e0c6066f82d7981a320b12c99c.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_excel_white_a93b4b7c3ad9b0c3b94a4c4130ddcf69.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_health_5edbe76ae3b8ad56d0e898ad30f98e13.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_health_c4b0c6a5ad3fe1eb7efebcc8490e7c76.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_health_white_8c18837eed8b70be0652f5464c63baa8.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_health_white_7464188e4ed2feccc71ec58187448712.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_msn_f4bce5062c4ec41d46665befc63f6db6.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_msn_6e63d37ede80f5ce1dc037980261bbb5.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_msn_white_79471f10179f1b0a12b774891add64c0.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_msn_white_6a426568805318e8a39d73e79ec9aea0.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_2278f8442c770adab4e50d19a0d3b16f.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_aed5eb9ccea43f119a25b3b74c59c7e7.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_white_80fc460cfdfe07ed50208a6bb166b2d8.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_microsoft_white_b9f4589659563b0e18c8346229c06fc5.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_415637b21bafbcd5ea3663ff65d61b06.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_625e6e87eb5969f9afcaefed1dec05bc.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_white_5813dfac6d4e378019320f5fe311ff74.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_mileiq_white_481b25eba75580aaf5f80cacdf3620a9.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_56b9d60cbc29b3158c7f3a0f3e39feb8.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_f626dec90a3d3c9111b03ccf5f833688.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_white_36eb004e990195a2d2e6fb3ed668a829.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_minecraft_white_3de6cedead3af55e8a4dd56cbaa2d53c.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_office_ecf4fcc984a3f68b55ef1474c58df705.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_office_0c0427c2da7db70a7e64f64a2923cbef.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_office_white_0e4b310757601ca965a52a16e282d9cd.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_office_white_a738a0c0216680c36de4445b918f4476.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_13608923a0e316d264c0df5705875ac4.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_white_04be02cd92223e76076db4e8c2b03fdc.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_fc3aa12c812dc7b04f498eae71f33ea2.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_onedrive_white_cb16239838d9c1d0b8791ed37547e204.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_4af186a12cecea5a41dc4db81d3f5df5.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_64589f528a7a7802290b5e64727a43a5.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_white_2e74e3e6ff729cb1afb05a0ad70b5190.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_outlook_white_e06aa723e4775d33c168d0279d3190f3.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_6ff4dbdb1b8025edd88c74a3b91646b8.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_b682753de8344e19fd81ba14a9b15cd1.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_white_ad9010ae9f73d672b05dc0da3a52651a.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_powerpoint_white_228ee2d3e9222ab696ac793ce4d57ecd.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skype_d377f9ccd35a4470ccabea4b24688819.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skype_e84d948df1aa1f8dd0bf9404623ce490.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_aa161df2f39b5fbbd2483e6154952d85.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_09ad5cae937bb9160e367ae0c66c599c.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_white_78db1ad460c13f6cea9751b7d194000b.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skypedialer_white_95bcadd7a1eb1471340fca5a785c35b2.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skype_white_18064fc3bb9681cd2c6fcbd15ddb92f2.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_skype_white_20959b2d887dc005fc6e69d6bd72f4c8.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_word_2ed0b6c1934ddda271225cde00593605.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_word_2f6c9ed1251de316cebf0c172c51cf85.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_word_white_b5f8bc8af54c4ab4cddfa39bca9653ae.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_word_white_329f37b9a36eec17dd2429191689f112.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_1d4968015d72dcbecb1843c8ca89cb47.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_a3d54c28e8a88393c33c27972c1d97d5.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_white_6b92c1741d4d58ef89705046e5dda711.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/appcentipede/appcentipede_xbox_white_67d09ff8fa2d43a50b165ce32a5ff58c.svg";
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(364),
            ' --\x3e\n\n\x3c!-- ko ifnot: useLayoutTemplates --\x3e\n    \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: useLayoutTemplates --\x3e\n    \x3c!-- ko withProperties: { \'$page\': $parent } --\x3e\n        \x3c!-- ko ifnot: isVerticalSplitTemplate --\x3e\n        <div id="lightboxTemplateContainer" data-bind="component: { name: \'lightbox-template\', params: { serverData: svr } }">\n        </div>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: isVerticalSplitTemplate() && isVerticalSplitTemplateLoaded() --\x3e\n        <div id="verticalSplitTemplateContainer" data-bind="component: { name: \'vertical-split-template\', params: { serverData: svr } }">\n        </div>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e');
    },
    function (e, n, t) {
        var i = t(2),
            a = t(11),
            o = t(1),
            r = t(23),
            s = window;
        function c(e) {
            var n = this,
                t = null,
                o = e.serverData,
                s = o.staticTenantBranding,
                c = o.arrLivePreviewOrigins;
            function l(e) {
                var t = a.loadTenantBranding(e),
                    i = a.getLayoutTemplateConfig(t);
                n.showHeader(i.showHeader), n.headerLogo(t.HeaderLogo);
            }
            (n.showHeader = i.observable(!1)),
                (n.headerLogo = i.observable()),
                (n.dispose = function () {
                    t && t.removeListener(l);
                }),
                l(s),
                c && (t = r.getInstance(c)).addListener(l);
        }
        i.components.register("lightbox-template", {
            viewModel: c,
            template: t(365),
            synchronous: !s.ServerData.iMaxStackForKnockoutAsyncComponents || o.Helper.isStackSizeGreaterThan(s.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        }),
            (e.exports = c);
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(48),
            t(49),
            t(24),
            t(8),
            t(25),
            ' --\x3e\n\n<div data-bind="component: { name: \'background-image-control\',\n    publicMethods: $page.backgroundControlMethods }">\n</div>\n\n<div class="outer" data-bind="css: { \'app\': $page.backgroundLogoUrl }">\n    \x3c!-- ko if: showHeader --\x3e\n    <div class="template-section">\n        <div class="template-header-container">\n            <div id="header" data-bind="externalCss: { \'header\': true }">\n                <img id="headerLogo" role="presentation" data-bind="\n                    attr: { src: headerLogo },\n                    externalCss: { \'header-logo\': true }" />\n            </div>\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div class="template-section main-section">\n        <div class="middle" data-bind="css: { \'has-header\': showHeader }">\n            \x3c!-- ko if: $page.backgroundLogoUrl() && !($page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(\'hideLogo\')) --\x3e\n            <div class="background-logo-holder">\n                <img class="background-logo" role="presentation" data-bind="attr: { src: $page.backgroundLogoUrl }" />\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: svr.fShowPageLevelTitleAndDesc && !($page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(\'hidePageLevelTitleAndDesc\')) --\x3e\n            <div data-bind="component: \'page-level-title-control\'"></div>\n            \x3c!-- /ko --\x3e\n\n            <div id="lightbox" data-bind="\n                animationEnd: $page.paginationControlMethods() && $page.paginationControlMethods().view_onAnimationEnd,\n                externalCss: { \'sign-in-box\': true },\n                css: {\n                    \'app\': $page.backgroundLogoUrl(),\n                    \'wide\': $page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(\'wide\'),\n                    \'fade-in-lightbox\': $page.fadeInLightBox,\n                    \'has-popup\': $page.showFedCredButtons() || $page.newSession(),\n                    \'transparent-lightbox\': $page.backgroundControlMethods() && $page.backgroundControlMethods().useTransparentLightBox,\n                    \'lightbox-bottom-margin-debug\': $page.showDebugDetails }">\n\n                \x3c!-- ko template: { nodes: $parentContext.$componentTemplateNodes, data: $page } --\x3e\x3c!-- /ko --\x3e\n            </div>\n\n            \x3c!-- ko if: $page.showFedCredButtons --\x3e\n            <div class="promoted-fed-cred-box" data-bind="css: { \'app\': $page.backgroundLogoUrl }">\n                <div class="promoted-fed-cred-content" data-bind="css: {\n                    \'animate\': $page.useCssAnimations && $page.animate(),\n                    \'slide-out-next\': $page.animate.isSlideOutNext,\n                    \'slide-in-next\': $page.animate.isSlideInNext,\n                    \'slide-out-back\': $page.animate.isSlideOutBack,\n                    \'slide-in-back\': $page.animate.isSlideInBack,\n                    \'app\': $page.backgroundLogoUrl }">\n\n                    \x3c!-- ko foreach: $page.otherSigninOptions --\x3e\n                    <div class="row tile">\n                        <div class="table" role="button" tabindex="0" data-bind="\n                            pressEnter: $page.otherSigninOptionsButton_onClick,\n                            click: $page.otherSigninOptionsButton_onClick,\n                            ariaLabel: $data.text">\n\n                            <div class="table-row">\n                                <div class="table-cell tile-img medium">\n                                    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                                    <img class="tile-img medium" role="presentation" data-bind="attr: { src: $data.lightIconUrl }" />\n                                    <img class="tile-img medium" role="presentation" data-bind="attr: { src: $data.darkIconUrl }" />\n                                    \x3c!-- /ko --\x3e\n                                </div>\n                                <div class="table-cell text-left content">\n                                    <div data-bind="\n                                        text: $data.text,\n                                        attr: { \'data-test-id\': $data.testId }"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- /ko --\x3e\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: $page.newSession --\x3e\n            <div class="new-session-popup-v2sso" role="alert" data-bind="css: { \'app\': $page.backgroundLogoUrl }">\n                <div class="form-group" id="NewSessionTitle" data-bind="text: str[\'TILE_STR_AsyncTileText_Title\']"></div>\n\n                <div class="row tile">\n                    <div class="table" id="newSessionLink" data-bind="click: $page.newSession_onClick, ariaDescribedBy: \'NewSessionTitle\'" tabindex="0">\n                        <div class="table-row">\n                            <div class="table-cell tile-img">\n                                <img class="tile-img" role="presentation" pngSrc="') +
            t(33) +
            '" svgSrc="' +
            t(34) +
            '" data-bind="imgSrc" />\n                            </div>\n                            <div class="table-cell text-left content">\n                                <div data-bind="text: $page.newSessionInfo().unsafe_newSessionFullName"></div>\n\n                                \x3c!-- ko if: $page.newSessionInfo().unsafe_newSessionDisplayName --\x3e\n                                <div><small data-bind="text: $page.newSessionInfo().unsafe_newSessionDisplayName"></small></div>\n                                \x3c!-- /ko --\x3e\n\n                                <div><small data-bind="text: str[\'TILE_STR_Active\']"></small></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: $page.showDebugDetails --\x3e\n            <div data-bind="component: { name: \'debug-details-control\',\n                publicMethods: $page.debugDetailsMethods,\n                params: {\n                    serverData: svr,\n                    useWiderWidth: $page.paginationControlMethods() && $page.paginationControlMethods().currentViewHasMetadata(\'wide\'),\n                    isDebugTracingEnabled: $page.isDebugTracingEnabled },\n                event: {\n                    closeBanner: $page.closeDebugDetails_onClick,\n                    setDebugTracing: $page.setDebugTracing_onClick } }">\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: !svr.fHideFooter && $page.paginationControlMethods() && $page.paginationControlMethods().hasInitialViewShown() --\x3e\n            <div id="footer" role="contentinfo" data-bind="\n                externalCss: {\n                    \'footer\': true,\n                    \'has-background\': !$page.useDefaultBackground(),\n                    \'background-always-visible\': $page.backgroundLogoUrl }">\n\n                <div data-bind="component: { name: \'footer-control\',\n                    publicMethods: $page.footerMethods,\n                    params: {\n                        serverData: svr,\n                        useDefaultBackground: $page.useDefaultBackground(),\n                        hasDarkBackground: $page.backgroundLogoUrl(),\n                        showLinks: true },\n                    event: {\n                        agreementClick: $page.footer_agreementClick,\n                        showDebugDetails: $page.toggleDebugDetails_onClick } }">\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n    </div>\n</div>';
    },
    function (e, n) {
        e.exports =
            '<div class="background-image-holder" role="presentation" data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }">\n    \x3c!-- ko if: smallImageUrl --\x3e\n    <div class="background-image-small" data-bind="backgroundImage: smallImageUrl()"></div>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: backgroundImageUrl --\x3e\n    <div data-bind="backgroundImage: backgroundImageUrl(), externalCss: { \'background-image\': true }"></div>\n        \x3c!-- ko if: useImageMask --\x3e\n        <div class="background-overlay"></div>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n</div>';
    },
    function (e, n) {
        e.exports =
            '<div class="win-content-header">\n    <div class="win-body-header">\n        <h1 data-bind="text: str[\'CT_STR_Page_Title\']"></h1>\n    </div>\n    <div class="win-body-sub-header" data-bind="text: str[\'CT_STR_Page_SubTitle\']"></div>\n</div>';
    },
    function (e, n) {
        n.applyExtensions = function (e) {
            (e.bindingHandlers.copySource = {
                init: function (n, t, i, a, o) {
                    var r = e.unwrap(t()),
                        s = document.getElementById(r);
                    s ||
                        (((s = document.createElement("textarea")).id = r),
                        document.body.appendChild(s),
                        e.bindingHandlers.moveOffScreen.update(s, function () {
                            return !0;
                        })),
                        e.bindingEvent.subscribe(n, "descendantsComplete", function () {
                            s.value = n.innerText;
                        });
                    var c = e.bindingEvent.startPossiblyAsyncContentBinding(n, o);
                    return e.applyBindingsToDescendants(c, n), { controlsDescendantBindings: !0 };
                },
            }),
                (e.bindingHandlers.clickToCopy = {
                    init: function (n, t, i, a, o) {
                        var r = e.unwrap(t()),
                            s = r.textareaId,
                            c = r.showNotification;
                        e.bindingHandlers.click.init(
                            n,
                            function () {
                                return function () {
                                    !(function (e, n, t) {
                                        var i = document.getElementById(e);
                                        if (!i) return;
                                        i.select(),
                                            document.execCommand("copy"),
                                            t.focus(),
                                            (function (e) {
                                                e() && e(!1);
                                                setTimeout(function () {
                                                    e(!0);
                                                }, 0);
                                            })(n);
                                    })(s, c, n);
                                };
                            },
                            i,
                            a,
                            o
                        );
                    },
                });
        };
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(18),
            t(8),
            ' --\x3e\n\n\x3c!-- ko if: showBanner --\x3e\n<div id="debugDetailsBanner" class="debug-details-banner table" data-bind="css: { \'wide\': useWiderWidth }">\n    <div class="table-row">\n        <div class="table-cell">\n            \x3c!-- ko if: svr.fShowCopyDebugDetailsLink --\x3e\n            <div class="debug-details-header">\n                <div class="bold debug-details-heading-text" role="heading" data-bind="text: str[\'STR_Error_Details_Title\']"></div>\n                <div data-bind="text: str[\'STR_Error_Details_Instruction\']"></div>\n                <a id="idCopyToClipboard" href="#" role="button" data-bind="\n                    clickToCopy: { textareaId: \'debugDetailsText\', showNotification: showDebugDetailsCopyMessage },\n                    text: str[\'STR_Error_Details_CopyLink\'],\n                    ariaLabel: str[\'STR_Error_Details_CopyLink\'],\n                    hasFocus: isFocusActivated"></a>\n                <span id="debugDetailsCopyMessage" class="debug-details-notification fade-in-lightbox" data-bind="visible: showDebugDetailsCopyMessage">\n\n                    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                    <img role="presentation" pngSrc="') +
            t(370) +
            '" svgSrc="' +
            t(371) +
            '" data-bind="imgSrc" />\n                    <img role="presentation" pngSrc="' +
            t(372) +
            '" svgSrc="' +
            t(373) +
            '" data-bind="imgSrc" />\n                    \x3c!-- /ko --\x3e\n\n                    <span role="alert" data-bind="\n                        text: showDebugDetailsCopyMessage() ? str[\'STR_Error_Details_Notification\'] : null,\n                        ariaLabel: str[\'STR_Error_Details_Notification_ScreenReader\']"></span>\n                </span>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            <div class="override-ltr" data-bind="copySource: \'debugDetailsText\'">\n                \x3c!-- ko if: debugDetails.errorCode --\x3e\n                <div>\n                    <span class="bold">Error Code: </span>\n                    <span data-bind="text: debugDetails.errorCode"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: svr.sessionId --\x3e\n                <div>\n                    <span class="bold">Request Id: </span>\n                    <span data-bind="text: svr.sessionId"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n                <div>\n                    <span class="bold">Correlation Id: </span>\n                    <span data-bind="text: svr.correlationId"></span>\n                </div>\n                <div>\n                    <span class="bold">Timestamp: </span>\n                    <span data-bind="text: debugDetails.timestamp"></span>\n                </div>\n                \x3c!-- ko if: svr.strServiceExceptionMessage --\x3e\n                <div>\n                    <span class="bold">Message: </span>\n                    <span data-bind="text: unsafe_exceptionMessage"></span>\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $data } --\x3e\x3c!-- /ko --\x3e\n            </div>\n\n            \x3c!-- ko if: svr.urlSetDebugMode --\x3e\n            <div class="debug-trace-section">\n                <div>\n                    <span class="bold" data-bind="text: str[\'STR_Error_Details_Debug_Mode\']"></span>\n                    <a id="setDebugMode" data-bind="\n                        href: svr.urlSetDebugMode,\n                        text: isDebugTracingEnabled() ? str[\'STR_Error_Details_Debug_Mode_Disable\'] : str[\'STR_Error_Details_Debug_Mode_Enable\'],\n                        ariaLabel: isDebugTracingEnabled() ? str[\'STR_Error_Details_Debug_Mode_Disable_AriaLabel\'] : str[\'STR_Error_Details_Debug_Mode_Enable_AriaLabel\'],\n                        click: setDebugMode_onClick,\n                        hasFocus: isFocusActivated() && !svr.fShowCopyDebugDetailsLink"></a>\n                </div>\n                \x3c!-- ko if: sending --\x3e\n                <div class="progress-container-tile">\n                    <div class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n                </div>\n                \x3c!-- /ko --\x3e\n                \x3c!-- ko if: debugModeError --\x3e\n                <div role="alert" data-bind="text: debugModeError, externalCss: { \'error\': true }"></div>\n                \x3c!-- /ko --\x3e\n                <div data-bind="text: str[\'STR_Error_Details_Debug_Mode_Desc\']"></div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n        <div>\n            <a id="errorBannerCloseLink" role="button" href="#" data-bind="\n                click: hideBanner_onClick,\n                ariaLabel: str[\'CT_STR_Error_Details_Close_AltText\'],\n                hasFocus: isFocusActivated() && !svr.fShowCopyDebugDetailsLink && !svr.urlSetDebugMode">\n                \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                <img role="presentation" pngSrc="' +
            t(374) +
            '" svgSrc="' +
            t(375) +
            '" data-bind="imgSrc, attr: { alt: str[\'CT_STR_Error_Details_Close_AltText\'] }" />\n                <img role="presentation" pngSrc="' +
            t(376) +
            '" svgSrc="' +
            t(377) +
            '" data-bind="imgSrc, attr: { alt: str[\'CT_STR_Error_Details_Close_AltText\'] }" />\n                \x3c!-- /ko --\x3e\n            </a>\n        </div>\n    </div>\n</div>\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/check_small_white_9fff087606d5cf6ea6f2ee27b461bfc2.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/check_small_white_c442abc4ca38c5f04a23e3df1143641b.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/check_small_e1e685219f801b7c2c395594379fbc46.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/check_small_c36fa14790dfc6ca22068a958373c2ba.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/close_white_78782a80a32b23ea76f4e9e039610102.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/close_white_6b2eebc2feff2d8583fcc9ad7a9e375a.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/close_6278ec0ac116a229512ee5c448658b16.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/close_40eb39126300b56bf66c20ee75b54093.svg";
    },
    function (e, n) {
        e.exports =
            "\x3c!-- ko if: !hideFooter && (showLinks || impressumLink || showIcpLicense) --\x3e\n<div id=\"footerLinks\" class=\"footerNode text-secondary\">\n\n    \x3c!-- ko if: showFooter --\x3e\n        \x3c!-- ko if: !hideTOU --\x3e\n        <a id=\"ftrTerms\" data-bind=\"\n            text: termsText,\n            href: termsLink,\n            click: termsLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: !hidePrivacy --\x3e\n        <a id=\"ftrPrivacy\" data-bind=\"\n            text: privacyText,\n            href: privacyLink,\n            click: privacyLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: impressumLink --\x3e\n        <a id=\"ftrImpressum\" data-bind=\"\n            text: str['WF_STR_Footer_LinkDisclaimer_Text'],\n            href: impressumLink,\n            click: impressumLink_onClick,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: showIcpLicense --\x3e\n        <a id=\"ftrIcp\" href=\"#\" target=\"_blank\" data-bind=\"\n            text: str['STR_Footer_IcpLicense_Text'],\n            href: icpLink,\n            externalCss: {\n                'footer-content': true,\n                'footer-item': true,\n                'has-background': !useDefaultBackground,\n                'background-always-visible': hasDarkBackground }\"></a>\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- Set attr binding before hasFocusEx to prevent Narrator from losing focus --\x3e\n    <a id=\"moreOptions\" href=\"#\" role=\"button\" data-bind=\"\n        click: moreInfo_onClick,\n        ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'],\n        attr: { 'aria-expanded': showDebugDetails().toString() },\n        hasFocusEx: focusMoreInfo(),\n        externalCss: {\n            'footer-content': true,\n            'footer-item': true,\n            'debug-item': true,\n            'has-background': !useDefaultBackground,\n            'background-always-visible': hasDarkBackground }\">...</a>\n</div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: svr.fShowLegalMessagingInline && showLinks --\x3e\n<div class=\"text-caption\" data-bind=\"\n    htmlWithBindings: html['CT_STR_Inline_Legal_Message'],\n    childBindings: {\n        'ftrNext': {\n            css: 'bold' },\n        'ftrTerms': {\n            href: termsLink,\n            click: termsLink_onClick },\n        'ftrPrivacy': {\n            href: privacyLink,\n            click: privacyLink_onClick } }\"></div>\n\x3c!-- /ko --\x3e";
    },
    function (e, n, t) {
        var i = t(3),
            a = t(1),
            o = window,
            r = i.Object,
            s = a.Helper,
            c = s.history;
        e.exports = function (e, n, t) {
            var i = this,
                a = !1,
                l = e,
                d = n,
                u = t,
                p = [null],
                g = 0;
            function f(e) {
                if (e && "undefined" != typeof e.state && null !== e.state) {
                    var n = e.state;
                    n < g ? l() : d(), (g = n), u(i.getState());
                }
            }
            (i.dispose = function () {
                a && s.removeEventListener(o, "popstate", f);
            }),
                (i.pushState = function (e) {
                    g++, p.splice(g, p.length - g, r.clone(e)), a && c.pushState(g, "");
                }),
                (i.replaceState = function (e) {
                    p[g] = r.clone(e);
                }),
                (i.goBack = function () {
                    g > 0 && (a ? o.history.back() : f({ state: g - 1 }));
                }),
                (i.getState = function () {
                    return g > p.length ? (g = p.length - 1) : g < 0 && (g = 0), null === p[g] ? null : r.clone(p[g]);
                }),
                (a = s.isHistorySupported()) && (c.replaceState(g, ""), s.addEventListener(o, "popstate", f));
        };
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(381),
            " --\x3e\n\n<div data-bind=\"css: { 'zero-opacity': hidePaginatedView() }\">\n    \x3c!-- ko if: showIdentityBanner() && (sharedData.displayName || svr.sPOST_Username) --\x3e\n    <div data-bind=\"css: {\n        'animate': animate() && animate.animateBanner(),\n        'slide-out-next': animate.isSlideOutNext(),\n        'slide-in-next': animate.isSlideInNext(),\n        'slide-out-back': animate.isSlideOutBack(),\n        'slide-in-back': animate.isSlideInBack() }\">\n\n        <div data-bind=\"component: { name: 'identity-banner-control',\n            params: {\n                userTileUrl: svr.urlProfilePhoto,\n                displayName: sharedData.displayName || svr.sPOST_Username,\n                isBackButtonVisible: isBackButtonVisible(),\n                focusOnBackButton: isBackButtonFocused(),\n                backButtonDescribedBy: backButtonDescribedBy() },\n            event: {\n                backButtonClick: identityBanner_onBackButtonClick } }\">\n        </div>\n    </div>\n    \x3c!-- /ko --\x3e\n\n    <div class=\"pagination-view\" data-bind=\"css: {\n        'has-identity-banner': showIdentityBanner() && (sharedData.displayName || svr.sPOST_Username),\n        'zero-opacity': hidePaginatedView.hideSubView(),\n        'animate': animate(),\n        'slide-out-next': animate.isSlideOutNext(),\n        'slide-in-next': animate.isSlideInNext(),\n        'slide-out-back': animate.isSlideOutBack(),\n        'slide-in-back': animate.isSlideInBack() }\">\n\n        \x3c!-- ko foreach: views --\x3e\n            \x3c!-- ko if: $parent.currentViewIndex() === $index() --\x3e\n                \x3c!-- ko template: { nodes: [$data], data: $parent } --\x3e\x3c!-- /ko --\x3e\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    </div>\n</div>");
    },
    function (e, n, t) {
        var i = t(2),
            a = t(1),
            o = t(4),
            r = window,
            s = a.Helper;
        i.components.register("identity-banner-control", {
            viewModel: function (e) {
                var n = this,
                    t = e.displayName,
                    i = e.isBackButtonVisible,
                    a = e.backButtonId,
                    r = e.backButtonDescribedBy,
                    c = e.focusOnBackButton || !1;
                (n.onBackButtonClick = o.create()),
                    (n.unsafe_displayName = null),
                    (n.isBackButtonVisible = i),
                    (n.backButtonId = a),
                    (n.backButtonDescribedBy = r),
                    (n.focusOnBackButton = c),
                    (n.backButton_onClick = function () {
                        n.onBackButtonClick();
                    }),
                    (n.unsafe_displayName = s.htmlUnescape(t));
            },
            template: t(382),
            synchronous: !r.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(r.ServerData.iMaxStackForKnockoutAsyncComponents),
            enableExtensions: !0,
        });
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8),
            ' --\x3e\n\n<div class="identityBanner">\n    \x3c!-- ko if: isBackButtonVisible --\x3e\n    <button type="button" class="backButton" data-bind="\n        attr: { \'id\': backButtonId || \'idBtn_Back\' },\n        ariaLabel: str[\'CT_HRD_STR_Splitter_Back\'],\n        ariaDescribedBy: backButtonDescribedBy,\n        click: backButton_onClick,\n        hasFocus: focusOnBackButton">\n        \x3c!-- ko ifnot: svr.fIsRTLMarket --\x3e\n            \x3c!-- ko component: \'accessible-image-control\' --\x3e\n            <img role="presentation" pngSrc="') +
            t(383) +
            '"\n                svgSrc="' +
            t(384) +
            '" data-bind="imgSrc" />\n            <img role="presentation" pngSrc="' +
            t(385) +
            '"\n                svgSrc="' +
            t(386) +
            '" data-bind="imgSrc" />\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: svr.fIsRTLMarket --\x3e\n            \x3c!-- ko component: \'accessible-image-control\' --\x3e\n            <img role="presentation" pngSrc="' +
            t(387) +
            '"\n                svgSrc="' +
            t(388) +
            '" data-bind="imgSrc" />\n            <img role="presentation" pngSrc="' +
            t(389) +
            '"\n                svgSrc="' +
            t(390) +
            '" data-bind="imgSrc" />\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    </button>\n    \x3c!-- /ko --\x3e\n\n    <div id="displayName" class="identity" data-bind="text: unsafe_displayName, attr: { \'title\': unsafe_displayName }"></div>\n</div>';
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_left_white_8c958f210f9d174621c2a5f436be7147.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_left_white_e3c710be3052253ad7caa53c27077683.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_right_white_40cef7b01626a78de03a282c689979be.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_right_white_04243c9ea4f194a9c82ede290ad84363.svg";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_right_ddba4d9629cb501a88a6a49b7ec60c2d.png";
    },
    function (e, n, t) {
        e.exports = t.p + "content/images/arrow_right_686a7399afdaf4d5f060eeb08b320c42.svg";
    },
    function (e, n, t) {
        var i = t(2),
            a = t(0),
            o = t(11),
            r = t(1),
            s = t(3),
            c = t(20),
            l = t(5),
            d = t(10),
            u = t(4),
            p = t(35),
            g = t(9),
            f = t(30),
            m = t(6),
            h = t(28),
            v = t(14),
            b = t(19),
            S = t(15),
            _ = t(13).getInstance(window.ServerData),
            y = t(7);
        var w = window,
            C = a.PaginatedState,
            T = a.LoginMode,
            x = a.CredentialType,
            I = a.ApiErrorCodes,
            k = r.Helper,
            P = r.Cookies,
            D = r.QueryString,
            E = s.String,
            A = m.AllowedIdentitiesType,
            R = c.GctResultAction;
        function L(e) {
            var n = this,
                t = e.serverData,
                r = e.serverError,
                s = e.isInitialView,
                h = e.displayName,
                w = e.prefillNames,
                L = e.flowToken,
                N = e.otherIdpRedirectUrl,
                U = e.availableSignupCreds || [],
                F = t.str,
                O = t.fAllowPhoneSignIn || t.fAllowPhoneInput,
                B = t.fAllowSkypeNameLogin,
                M = t.fCheckWindowsUsernameFormat,
                V = t.urlResetPassword,
                j = t.urlGetOneTimeCode,
                H = t.urlSkipZtd,
                W = t.sCtx,
                G = t.staticTenantBranding,
                q = t.iAllowedIdentities,
                z = t.sRemoteConnectAppName,
                $ = t.iLoginMode,
                K = t.sRemoteClientIp,
                X = t.sRemoteAppLocation,
                J = t.remoteLoginConfig,
                Q = t.userRoutingCookieConfig,
                Y = t.fAllowCancel,
                Z = !!t.fIsFidoSupported,
                ee = t.fCheckApiCanary,
                ne = t.urlLinkedInFed,
                te = t.urlGitHubFed,
                ie = t.urlGoogleFed,
                ae = t.urlFacebookFed,
                oe = t.urlOtherIdpSignup,
                re = (t.fIsTokenBroker, t.fPreferAssociate, t.sZtdTenantName),
                se = t.iPromotedFedCredType,
                ce = !!t.fShowSignInWithGitHubOnlyOnCredPicker,
                le = !!t.fShowSignInWithFidoOnUsernameView,
                de = !!t.fShowOfflineAccountLearnMore,
                ue = t.sUnauthSessionID,
                pe = t.iRequestLCID,
                ge = (t.fHideOfflineAccountNewTitleString, t.oGetCredTypeResult),
                fe = t.urlSignUp,
                me = t.urlAadSignup,
                he = t.urlForgotUsername,
                ve = t.sSiteId,
                be = t.sClientId,
                Se = t.sForwardedClientId,
                _e = t.sNoPaBubbleVersion,
                ye = t.showCantAccessAccountLink,
                we = !!j,
                Ce = {},
                Te = null,
                xe = !1,
                Ie = null,
                ke = {},
                Pe = {},
                De = i.observable(!1),
                Ee = i.observable(L).extend({ flowTokenUpdate: t });
            function Ae(e, n) {
                return (we
                    ? (function (e) {
                          return new l(function (n, t) {
                              Ne(!0);
                              var i = { OriginalRequest: W, FlowToken: Ee() };
                              e && (i.Channel = e), new g({ checkApiCanary: ee }).Json({ url: j, eventId: y.EventIds.Api_GetOneTimeCode }, i, n, t, a.DefaultRequestTimeout);
                          });
                      })(e)
                    : (function (e) {
                          return new l(function (n, t) {
                              Ne(!0);
                              var i = { purpose: e, flowToken: Ee(), unauthSessionId: ue, lcid: pe, siteId: ve, clientId: be, forwardedClientId: Se, noPaBubbleVersion: _e, successCallback: n, failureCallback: t };
                              new b(i).sendRequest();
                          });
                      })(n)
                ).then(Re, Le);
            }
            function Re(e) {
                return Ne(!1), !we && e.getResponseJson && (e = e.getResponseJson()), { success: !0, userCode: e.UserCode, deviceCode: e.DeviceCode || e.SessionLookupKey };
            }
            function Le(e) {
                if ((Ne(!1), we && e && e.error))
                    switch (e.error.code) {
                        case I.AuthFailure:
                            n.usernameTextbox.error.setNonBlockingError(F.CT_PWD_STR_Error_FlowTokenExpired);
                            break;
                        default:
                            n.usernameTextbox.error.setNonBlockingError(F.CT_PWD_STR_Error_GetOneTimeCodeError);
                    }
                else n.usernameTextbox.error.setNonBlockingError(F.CT_PWD_STR_Error_GetOneTimeCodeError);
                return n.setDefaultFocus(), { success: !1 };
            }
            function Ne(e) {
                n.isRequestPending(e), n.onSetPendingRequest(e);
            }
            function Ue(e) {
                n.onRedirect({ url: e.redirectUrl, eventOptions: { eventId: e.eventId } }, e.redirectPostParams, e.isIdpRedirect);
            }
            function Fe(e) {
                n.hasFido(e),
                    n.availableCredsWithoutUsername(
                        [].concat(
                            !z && J ? { credType: x.RemoteLogin } : [],
                            e ? { credType: x.Fido } : [],
                            N && oe ? { credType: x.OtherMicrosoftIdpFederation, redirectUrl: N } : [],
                            ne && !oe && se !== x.LinkedIn ? { credType: x.LinkedIn, redirectUrl: ne } : [],
                            te && !oe && se !== x.GitHub ? { credType: x.GitHub, redirectUrl: te, shownOnlyOnPicker: ce } : [],
                            ie ? { credType: x.Google, redirectUrl: ie } : [],
                            ae ? { credType: x.Facebook, redirectUrl: ae } : []
                        )
                    ),
                    n.onUpdateAvailableCredsWithoutUsername(n.availableCredsWithoutUsername()),
                    e &&
                        (n.fidoLinkText(F.CT_PWD_STR_SwitchToFidoCrossPlatform_Link),
                        d.throwUnhandledExceptionOnRejection(
                            S.isPlatformAuthenticatorAvailable()
                                .then(null, function () {
                                    return !1;
                                })
                                .then(function (e) {
                                    e && (n.fidoLinkText(F.CT_PWD_STR_SwitchToFido_Link), n.isPlatformAuthenticatorAvailable(!0));
                                })
                        ));
            }
            (n.onSwitchView = u.create()),
                (n.onRedirect = u.create()),
                (n.onSetPendingRequest = u.create()),
                (n.onRegisterDialog = u.create()),
                (n.onUnregisterDialog = u.create()),
                (n.onShowDialog = u.create(_.getDefaultEventTracingOptions(m.ClientTracingEventIds.ComponentEvent_LoginPaginatedUsernameView_onShowDialog, !0))),
                (n.onAgreementClick = u.create(_.getDefaultEventTracingOptions(m.ClientTracingEventIds.ComponentEvent_LoginPaginatedUsernameView_onAgreementClick, !0))),
                (n.onUpdateAvailableCredsWithoutUsername = u.create()),
                (n.usernameTextbox = new f(
                    p.errorComputed(function () {
                        if (!De()) {
                            var e = r || null;
                            return (r = null), e;
                        }
                        return (function () {
                            var e = n.usernameTextbox.value();
                            if (M && e && e.indexOf("\\") > 0) return F.CT_PWD_STR_Error_InvalidUsername_WindowsFormat;
                            if (!e || !(E.isEmailAddress(e) || (O && E.isPhoneNumber(e)) || (B && E.isSkypeName(e)))) return F.CT_PWD_STR_Error_InvalidUsername;
                            if (!E.isEmailAddress(e) && (!B || !E.isSkypeName(e)) && E.isPhoneNumber(e) && !e.match(a.Regex.PhoneNumberValidation)) return F.CT_PWD_STR_Error_InvalidPhoneFormatting;
                            return null;
                        })();
                    })
                )),
                n.usernameTextbox.value.extend({ logValue: _.getPIITextBoxPropertyLogOption(n, { eventId: m.ClientTracingEventIds.PropertyValue_LoginPaginatedUsernameView_Username }) }),
                n.usernameTextbox.error.extend({ logValue: _.getPropertyLogOption(n, { eventId: m.ClientTracingEventIds.PropertyValue_LoginPaginatedUsernameView_ClientError }) }),
                (n.passwordBrowserPrefill = i.observable()),
                (n.prefillNames = i.observableArray()),
                (n.isRequestPending = i.observable(!1)),
                (n.isBackButtonVisible = i.observable(!1)),
                (n.secondaryButtonText = i.observable()),
                (n.isSkipLinkVisible = i.observable(!1)),
                (n.showTileLogo = i.observable(!1)),
                (n.isPlatformAuthenticatorAvailable = i.observable(!1)),
                (n.fidoLinkText = i.observable()),
                (n.hasFido = i.observable(!1)),
                (n.availableCredsWithoutUsername = i.observableArray([])),
                (n.tenantBranding = null),
                (n.isInitialView = s),
                (n.pageDescription = null),
                (n.unsafe_pageTitle = null),
                (n.unsafe_subHeader = null),
                (n.showFidoLinkInline = le),
                (n.hideSignInOptions = !1),
                (n.accessRecoveryLink = null),
                _.attachViewLoadClientTracingOptions(n, { eventId: m.ClientTracingEventIds.Event_LoginPaginatedUsernameView_onLoad }),
                (n.showCantAccessAccountLink = ye),
                (n.saveSharedData = function (e) {
                    var t = Ce.result,
                        a = xe ? "" : n.usernameTextbox.value();
                    (e.flowToken = Ee()),
                        (e.username = E.cleanseUsername(a)),
                        (e.displayName = a),
                        (e.passwordBrowserPrefill = n.passwordBrowserPrefill()),
                        (e.remoteLoginUserCode = t ? t.userCode : null),
                        (e.remoteLoginDeviceCode = t ? t.deviceCode : null),
                        (e.proofConfirmation = ""),
                        (e.useEvictedCredentials = !1),
                        (e.showCredViewBrandingDesc = !1),
                        (e.isSignupPost = !1),
                        xe && (e.availableCreds = n.availableCredsWithoutUsername()),
                        i.utils.extend(e, ke);
                }),
                (n.getState = function () {
                    return { unsafe_displayName: n.usernameTextbox.value(), gctRequestHelperState: Ie.getState() };
                }),
                (n.restoreState = function (e) {
                    e && (Ie.restoreState(e.gctRequestHelperState), n.usernameTextbox.value(e.unsafe_displayName));
                }),
                (n.setDefaultFocus = function () {
                    n.usernameTextbox.focused(!0);
                }),
                (n.primaryButton_onClick = function () {
                    if ((De(!0), n.usernameTextbox.error.isBlocking())) n.setDefaultFocus();
                    else {
                        var e,
                            t = n.usernameTextbox.value();
                        (e = t),
                            Q && P.isCookieSafeValue(e) && P.writeWithExpiration(Q.name, e, Q.secure, P.getPersistDate(), Q.domain, Q.path),
                            Ne(!0),
                            d.throwUnhandledExceptionOnRejection(
                                Ie.sendAsync(N, t, Ee()).then(function (e) {
                                    switch ((Ne(!1), e.flowToken && Ee(e.flowToken), e.action)) {
                                        case R.ShowError:
                                            n.usernameTextbox.error.setError(e.error, e.isBlockingError), (Pe = i.utils.extend(e.sharedData, e.viewParams || {})), n.setDefaultFocus();
                                            break;
                                        case R.SwitchView:
                                            (ke = i.utils.extend(e.sharedData, e.viewParams || {})), e.viewId === C.RemoteLoginPolling ? n.remoteLogin_onClick() : n.onSwitchView(e.viewId);
                                            break;
                                        case R.Redirect:
                                            Ue(e);
                                    }
                                })
                            );
                    }
                }),
                (n.secondaryButton_onClick = function () {
                    de ? n.onSwitchView(C.LearnMoreOfflineAccount) : n.onSwitchView(C.Previous);
                }),
                (n.signup_onClick = function () {
                    fe ? Ue(Ie.getSignupRedirectGctResult(n.usernameTextbox.value())) : n.onSwitchView(U.length > 0 ? C.SignupCredentialPicker : C.SignupUsername);
                }),
                (n.aadSignup_onClick = function () {
                    n.onRedirect({ url: D.appendOrReplace(me, "email", encodeURIComponent(n.usernameTextbox.value())), eventOptions: { eventId: y.EventIds.Redirect_AADSignUpPage } });
                }),
                (n.otherIdpLogin_onClick = function () {
                    Ue(Ie.getOtherIdpRedirectGctResult(N, n.usernameTextbox.value()));
                }),
                (n.sendOtcLink_onClick = function () {
                    d.throwUnhandledExceptionOnRejection(
                        Ae(v.Channel.EmailAddress).then(function (e) {
                            e.success && ((ke = Pe), n.onSwitchView(C.OneTimeCode));
                        })
                    );
                }),
                (n.recoverUsername_onClick = function () {
                    var e = D.appendOrReplace(he, "mn", encodeURIComponent(n.usernameTextbox.value()));
                    n.onRedirect({ url: e, eventOptions: { eventId: y.EventIds.Redirect_MSAUserRecoveryPage } });
                }),
                (n.skip_onClick = function () {
                    null;
                }),
                (n.skipZtd_onClick = function () {
                    n.onRedirect({ url: H, eventOptions: { eventId: y.EventIds.Redirect_SkipZeroTouch } });
                }),
                (n.privacy_onClick = function () {
                    n.onSwitchView(C.ViewAgreement);
                }),
                (n.tou_onClick = function () {
                    n.onSwitchView(C.TermsOfUse);
                }),
                (n.footer_agreementClick = function (e) {
                    n.onAgreementClick(e);
                }),
                (n.remoteLogin_onClick = function () {
                    d.throwUnhandledExceptionOnRejection(
                        Ae(null, v.Purpose.XboxRemoteConnect).then(function (e) {
                            e.success && ((Ce.result = e), n.onSwitchView(C.RemoteLoginPolling));
                        })
                    );
                }),
                (n.learnMore_onClick = function () {
                    n.onSwitchView(C.LearnMore);
                }),
                (n.cantAccessAccount_onClick = function () {
                    q === A.Both ? n.onSwitchView(C.ResetPasswordSplitter) : n.onRedirect({ url: V, eventOptions: { eventId: y.EventIds.Redirect_ResetPasswordPage } });
                }),
                (n.switchToFidoCredLink_onClick = function () {
                    n.onSwitchView(C.Fido);
                }),
                (n.noUsernameCredSwitchLink_onSwitchView = function (e) {
                    switch (((xe = !0), e)) {
                        case C.RemoteLoginPolling:
                            n.remoteLogin_onClick();
                            break;
                        default:
                            n.onSwitchView(e);
                    }
                }),
                (n.tileLogo_onLoad = function () {
                    n.showTileLogo(!0);
                }),
                (function () {
                    (Ie = new c(t)),
                        ge && ge.Username && Ie.cacheResponse(ge.Username, ge),
                        d.throwUnhandledExceptionOnRejection(
                            k.isFidoSupportedAsync(Z).then(Fe, function () {
                                Fe(!1);
                            })
                        );
                    var e,
                        a = o.loadTenantBranding(G);
                    if (((n.tenantBranding = a), re)) {
                        var r = k.htmlUnescape(re);
                        (n.unsafe_pageTitle = E.format(F.CT_Win10_STR_Username_Title_WithOrgDomain, r)), (n.unsafe_subHeader = E.format(F.CT_Win10_STR_Username_SubHeader_WithOrgDomain, r));
                    } else (n.unsafe_pageTitle = F.WF_STR_HeaderDefault_Title_With_Brand), (n.unsafe_subHeader = F.CT_Win10_STR_SignInPage_UsernameLabel);
                    F.WF_STR_Default_Desc && $ !== T.RemoteConnectLocation && (n.pageDescription = E.format(F.WF_STR_Default_Desc, z, K || X)),
                        h
                            ? n.usernameTextbox.value(k.htmlUnescape(h))
                            : w &&
                              0 !== w.length &&
                              (n.usernameTextbox.value(w[0]),
                              w.length > 1 &&
                                  (i.utils.arrayForEach(w, function (e) {
                                      n.prefillNames.push({ text: e, value: e });
                                  }),
                                  n.prefillNames.push({ text: F.CT_WPIL_STR_Android_UseDifferentAddress, value: null }),
                                  (e = n.usernameTextbox.value.subscribe(function (t) {
                                      null === t && (n.prefillNames.removeAll(), e.dispose(), De(!1), n.usernameTextbox.value(""), n.usernameTextbox.focused(!0));
                                  })))),
                        n.usernameTextbox.value.subscribe(function (e) {
                            e && (Te ? e.toLowerCase() !== Te.toLowerCase() && n.passwordBrowserPrefill(null) : (Te = e));
                        }),
                        s ? Y && n.isBackButtonVisible(!0) : n.isBackButtonVisible(!0);
                    var l = o.getLayoutTemplateConfig(a);
                    (n.hideSignInOptions = l.hideSignInOptions), (n.accessRecoveryLink = a.AccessRecoveryLink), l.hideAccessRecovery && (n.showCantAccessAccountLink = !1);
                })();
        }
        h.applyExtenders(i),
            i.components.register("login-paginated-username-view", {
                viewModel: L,
                template: t(392),
                synchronous: !w.ServerData.iMaxStackForKnockoutAsyncComponents || r.Helper.isStackSizeGreaterThan(w.ServerData.iMaxStackForKnockoutAsyncComponents),
                enableExtensions: !0,
            }),
            (e.exports = L);
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(25),
            t(31),
            t(17),
            t(29),
            t(32),
            t(27),
            ' --\x3e\n\n<div data-bind="component: { name: \'header-control\',\n    params: {\n        serverData: svr,\n        title: str[\'WF_STR_HeaderDefault_Title\'] } }">\n</div>\n\n\x3c!-- ko if: pageDescription && !svr.fHideLoginDesc --\x3e\n<div class="row text-body no-margin-top">\n    <div id="loginDescription" data-bind="\n        htmlWithBindings: pageDescription,\n        childBindings: {\n            \'appName\': { css: { \'bold\': true } },\n            \'ipAddress\': { css: { \'bold\': true } },\n            \'location\': { css: { \'bold\': true } },\n            \'learnMoreLink\': {\n                click: learnMore_onClick,\n                ariaLabel: str[\'MOBILE_STR_SignIn_MSAcctHelpHeading\'],\n                visible: !svr.fHideLearnMoreLink } }">\n    </div>\n</div>\n\x3c!-- /ko --\x3e\n\n<div class="row">\n    <div role="alert" aria-live="assertive">\n        \x3c!-- ko if: usernameTextbox.error --\x3e\n        <div class="col-md-24" id="usernameError" data-bind="\n            externalCss: { \'error\': true },\n            htmlWithBindings: usernameTextbox.error,\n            childBindings: {\n                \'idA_PWD_SignUp\': { href: svr.urlSignUp, click: signup_onClick },\n                \'aadSignup\': { href: svr.urlAadSignup, click: aadSignup_onClick },\n                \'aadSelfSignup\': { click: signup_onClick },\n                \'otherIdpLogin\': { href: svr.urlGoToAADError, click: otherIdpLogin_onClick },\n                \'sendOtcLink\': { click: sendOtcLink_onClick },\n                \'recoverUsername\': { href: svr.urlForgotUsername, click: recoverUsername_onClick } }">\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n\n    <div class="form-group col-md-24">\n        \x3c!-- ko if: prefillNames().length > 1 --\x3e\n        <select id="usernames" class="form-control"\n            data-bind="options: prefillNames, optionsText: \'text\', optionsValue: \'value\', value: usernameTextbox.value, externalCss: { \'has-error\': usernameTextbox.error }">\n        </select>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko ifnot: prefillNames().length > 1 --\x3e\n        <div class="placeholderContainer" data-bind="component: { name: \'placeholder-textbox-field\',\n            publicMethods: usernameTextbox.placeholderTextboxMethods,\n            params: {\n                serverData: svr,\n                hintText: tenantBranding.UserIdLabel || str[\'CT_PWD_STR_Email_Example\'],\n                hintCss: \'placeholder\' + (!svr.fAllowPhoneSignIn ? \' ltr_override\' : \'\') },\n            event: {\n                updateFocus: usernameTextbox.textbox_onUpdateFocus } }">\n\n            <input type="email" name="loginfmt" id="i0116" maxlength="113" lang="en" class="form-control ltr_override" aria-required="true"\n                data-bind="\n                    externalCss: {\n                        \'input\': true,\n                        \'text-box\': true,\n                        \'has-error\': usernameTextbox.error },\n                    ariaLabel: tenantBranding.UserIdLabel || str[\'CT_PWD_STR_Username_AriaLabel\'],\n                    ariaDescribedBy: \'loginHeader\' + (pageDescription && !svr.fHideLoginDesc ? \' loginDescription\' : \'\'),\n                    textInput: usernameTextbox.value,\n                    hasFocusEx: usernameTextbox.focused,\n                    placeholder: $placeholderText" />\n\n            <input name="passwd" type="password" id="i0118" autocomplete="off" data-bind="moveOffScreen, textInput: passwordBrowserPrefill" />\n        </div>\n        \x3c!-- /ko --\x3e\n    </div>\n</div>\n\n<div data-bind="css: { \'position-buttons\': !tenantBranding.BoilerPlateText }">\n    <div class="row">\n        <div class="col-md-24">\n            <div class="text-13">\n                \x3c!-- ko if: svr.fCBShowSignUp && !svr.fDoIfExists && !svr.fCheckProofForAliases --\x3e\n                <div class="form-group" data-bind="\n                    htmlWithBindings: html[\'WF_STR_SignUpLink_Text\'],\n                    childBindings: {\n                        \'signup\': {\n                            href: svr.urlSignUp || \'#\',\n                            ariaLabel: svr.urlSignUp ? str[\'WF_STR_SignupLink_AriaLabel_Text\'] : str[\'WF_STR_SignupLink_AriaLabel_Generic_Text\'],\n                            click: signup_onClick } }">\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: showCantAccessAccountLink --\x3e\n                <div class="form-group">\n                    <a id="cantAccessAccount" name="cannotAccessAccount" data-bind="\n                        text: str[\'WF_STR_CantAccessAccount_Text\'],\n                        click: accessRecoveryLink ? null : cantAccessAccount_onClick,\n                        attr: { target: accessRecoveryLink && \'_blank\' },\n                        href: accessRecoveryLink || \'#\'"></a>\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: showFidoLinkInline && hasFido() && (availableCredsWithoutUsername().length >= 2 || svr.fShowForgotUsernameLink) --\x3e\n                <div class="form-group">\n                    <a id="idA_PWD_SwitchToFido" name="switchToFido" href="#" data-bind="\n                        text: fidoLinkText,\n                        click: switchToFidoCredLink_onClick"></a>\n\n                    \x3c!-- ko component: { name: \'fido-help-button-control\',\n                        params: {\n                            isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable() },\n                        event: {\n                            registerDialog: onRegisterDialog,\n                            unregisterDialog: onUnregisterDialog,\n                            showDialog: onShowDialog } } --\x3e\n                    \x3c!-- /ko --\x3e\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: (availableCredsWithoutUsername().length > 0 || svr.fShowForgotUsernameLink) && !hideSignInOptions --\x3e\n                <div class="form-group" data-bind="\n                    component: { name: \'cred-switch-link-control\',\n                        params: {\n                            serverData: svr,\n                            availableCreds: availableCredsWithoutUsername(),\n                            showForgotUsername: svr.fShowForgotUsernameLink },\n                        event: {\n                            switchView: noUsernameCredSwitchLink_onSwitchView,\n                            redirect: onRedirect,\n                            registerDialog: onRegisterDialog,\n                            unregisterDialog: onUnregisterDialog,\n                            showDialog: onShowDialog } }">\n                </div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: !svr.urlSkipZtd && svr.fIsOOBE && !svr.fHideLocalAccount --\x3e\n                <div class="form-group">\n                    <a id="idSkipLink" name="switchToOfflineAccount" href="#" data-bind="\n                        text: str[\'WIN10OOBE_STR_OfflineAccount\'],\n                        click: skip_onClick"></a>\n                </div>\n                \x3c!-- /ko --\x3e\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\x3c!-- ko if: svr.fShowLegalMessagingInline --\x3e\n<div data-bind="component: { name: \'footer-control\',\n    params: {\n        serverData: svr,\n        showLinks: true,\n        hideFooter: true },\n    event: {\n        agreementClick: footer_agreementClick } }">\n</div>\n\x3c!-- /ko --\x3e\n\n<div class="win-button-pin-bottom" data-bind="css : { \'boilerplate-button-bottom\': tenantBranding.BoilerPlateText }">\n    <div class="row" data-bind="css: { \'move-buttons\': tenantBranding.BoilerPlateText }">\n        <div data-bind="component: { name: \'footer-buttons-field\',\n            params: {\n                serverData: svr,\n                isPrimaryButtonEnabled: !isRequestPending(),\n                isPrimaryButtonVisible: svr.fShowButtons,\n                isSecondaryButtonEnabled: true,\n                isSecondaryButtonVisible: svr.fShowButtons && isBackButtonVisible(),\n                secondaryButtonText: secondaryButtonText() },\n            event: {\n                primaryButtonClick: primaryButton_onClick,\n                secondaryButtonClick: secondaryButton_onClick } }">\n        </div>\n    </div>\n</div>\n\n\x3c!-- ko if: tenantBranding.BoilerPlateText --\x3e\n<div id="idBoilerPlateText" class="wrap-content" data-bind="\n    htmlWithMods: tenantBranding.BoilerPlateText,\n    htmlMods: { filterLinks: svr.fIsHosted },\n    css: { \'transparent-lightbox\': tenantBranding.UseTransparentLightBox },\n    externalCss: { \'boilerplate-text\': true }"></div>\n\x3c!-- /ko --\x3e');
    },
    function (e, n) {
        e.exports =
            '\x3c!-- ko withProperties: { \'$placeholderText\': placeholderText } --\x3e\n    \x3c!-- ko template: { nodes: $componentTemplateNodes, data: $parent } --\x3e\x3c!-- /ko --\x3e\n\x3c!-- /ko --\x3e\n\x3c!-- ko ifnot: usePlaceholderAttribute --\x3e\n<div class="placeholderInnerContainer" data-bind="visible: placeholderVisible, click: placeholder_onClick">\n    <div class="placeholder" aria-hidden="true" data-bind="text: hintText, css: hintCss"></div>\n</div>\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(27),
            ' --\x3e\n\n<div class="form-group">\n    \x3c!-- ko if: showSwitchToCredPickerLink --\x3e\n    <a id="idA_PWD_SwitchToCredPicker" href="#" data-bind="\n        text: isUserKnown ? str[\'CT_PWD_STR_SwitchToCredPicker_Link\'] : str[\'CT_PWD_STR_SwitchToCredPicker_Link_NoUser\'],\n        click: switchToCredPicker_onClick"></a>\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: credentialCount === 1 && !(showForgotUsername || selectedCredShownOnlyOnPicker) --\x3e\n        \x3c!-- ko ifnot: hideCredSwitchLink --\x3e\n        <a href="#" data-bind="\n            attr: { \'id\': switchToCredId },\n            text: switchToCredText,\n            click: switchToCred_onClick"></a>\n        \x3c!-- /ko --\x3e\n\n        \x3c!-- ko if: displayHelp && selectedCredType === ') +
            t(0).CredentialType.Fido +
            ' --\x3e\n            \x3c!-- ko component: { name: \'fido-help-button-control\',\n                params: {\n                    isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable() },\n                event: {\n                    registerDialog: onRegisterDialog,\n                    unregisterDialog: onUnregisterDialog,\n                    showDialog: onShowDialog } } --\x3e\n            \x3c!-- /ko --\x3e\n        \x3c!-- /ko --\x3e\n    \x3c!-- /ko --\x3e\n\n    \x3c!-- ko if: credentialCount === 0 && showForgotUsername --\x3e\n    <a id="forgotUsername" data-bind="\n        href: svr.urlForgotUsername,\n        text: str[\'WF_STR_ForgotUsernameLink_Text\']"></a>\n    \x3c!-- /ko --\x3e\n</div>\n\n\x3c!-- ko if: credLinkError --\x3e\n<div class="row">\n    <div class="col-md-24 alert-margin-bottom" role="alert" aria-live="assertive" data-bind="text: credLinkError, externalCss: { \'error\': true }"></div>\n</div>\n\x3c!-- /ko --\x3e';
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8),
            t(51),
            ' --\x3e\n\n<span class="help-button" role="button" tabindex="0" data-bind="\n    click: fidoHelp_onClick,\n    pressEnter: fidoHelp_onClick,\n    hasFocus: hasFocus,\n    ariaLabel: isPlatformAuthenticatorAvailable ? str[\'CT_STR_CredentialPicker_Help_Desc_Fido\'] : str[\'CT_STR_CredentialPicker_Help_Desc_FidoCrossPlatform\']">\n\n    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n    <img role="presentation" pngSrc="') +
            t(53) +
            '" svgSrc="' +
            t(54) +
            '" data-bind="imgSrc" />\n    <img role="presentation" pngSrc="' +
            t(55) +
            '" svgSrc="' +
            t(56) +
            '" data-bind="imgSrc" />\n    \x3c!-- /ko --\x3e\n</span>\n\n<div data-bind="component: { name: \'fido-help-dialog-content-control\',\n    params: {\n        isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable },\n    event: {\n        registerDialog: onRegisterDialog,\n        unregisterDialog: onUnregisterDialog } }">\n</div>';
    },
    function (e, n, t) {
        e.exports =
            "\x3c!-- " +
            (t(8), t(52), " --\x3e\n\n<div data-bind=\"component: { name: 'dialog-content-control',\n    params: {\n        dialogId: ") +
            t(0).DialogId.FidoHelp +
            ",\n        data: {\n            labelledBy: 'fidoDialogTitle',\n            describedBy: 'fidoDialogDesc fidoDialogDesc2',\n            primaryButtonPreventTabbing: { direction: 'down' },\n            isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable } },\n    event: {\n        registerDialog: onRegisterDialog,\n        unregisterDialog: onUnregisterDialog } }\">\n\n    <div id=\"fidoDialogTitle\" class=\"row\" data-bind=\"externalCss: { 'title': true }\">\n        \x3c!-- ko component: 'accessible-image-control' --\x3e\n        <img role=\"presentation\" pngSrc=\"" +
            t(37) +
            '" svgSrc="' +
            t(38) +
            '" data-bind="imgSrc" />\n        <img role="presentation" pngSrc="' +
            t(39) +
            '" svgSrc="' +
            t(40) +
            "\" data-bind=\"imgSrc\" />\n        \x3c!-- /ko --\x3e\n\n        <span data-bind=\"text: isPlatformAuthenticatorAvailable ? str['CT_PWD_STR_SwitchToFido_Link'] : str['CT_PWD_STR_SwitchToFidoCrossPlatform_Link']\"></span>\n    </div>\n\n    <div id=\"fidoDialogDesc\" class=\"row text-body no-margin-top\" data-bind=\"\n        text: isPlatformAuthenticatorAvailable ? str['CT_STR_FidoDialog_Desc'] : str['CT_STR_FidoDialog_Desc_CrossPlatform']\">\n    </div>\n\n    <div id=\"fidoDialogDesc2\" class=\"row text-body\" data-bind=\"\n        htmlWithBindings: html['CT_STR_FidoDialog_Desc2'],\n        childBindings: {\n            'fidoHelpLink': {\n                href: svr.urlFidoHelp,\n                preventTabbing: { direction: 'up' },\n                attr: { 'target': '_blank' } } }\">\n    </div>\n</div>";
    },
    function (e, n) {
        e.exports =
            '<div class="row" id="loginHeader" data-bind="externalCss: { \'title\': true }">\n    <div role="heading" aria-level="1" data-bind="text: title"></div>\n    \x3c!-- ko if: isSubtitleVisible --\x3e\n    <div role="heading" aria-level="2" data-bind="text: str[\'WF_STR_App_Title\'], externalCss: { \'subtitle\': true }"></div>\n    \x3c!-- /ko --\x3e\n</div>';
    },
]),
    (window.__ConvergedLogin_PCore = !0);
//# sourceMappingURL=8e27e0920f0d29c7faa3.map
