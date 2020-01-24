'use strict';

const CustomError = require('./custom');
const http = require('http-constants');

class Continue extends CustomError {
    constructor (message = 'Continue', extra) {
        super(message, http.codes.CONTINUE, extra);
    }
}

class SwitchingProtocols extends CustomError {
    constructor (message = 'Switching Protocols', extra) {
        super(message, http.codes.SWITCHING_PROTOCOLS, extra);
    }
}

class Processing extends CustomError {
    constructor (message = 'Processing', extra) {
        super(message, http.codes.PROCESSING, extra);
    }
}

class Ok extends CustomError {
    constructor (message = 'Ok', extra) {
        super(message, http.codes.OK, extra);
    }
}

class Created extends CustomError {
    constructor (message = 'Created', extra) {
        super(message, http.codes.CREATED, extra);
    }
}

class Accepted extends CustomError {
    constructor (message = 'Accepted', extra) {
        super(message, http.codes.ACCEPTED, extra);
    }
}

class NonAuthoritativeInformation extends CustomError {
    constructor (message = 'Non Authoritative Information', extra) {
        super(message, http.codes.NON_AUTHORITATIVE_INFORMATION, extra);
    }
}

class NoContent extends CustomError {
    constructor (message = 'No Content', extra) {
        super(message, http.codes.NO_CONTENT, extra);
    }
}

class ResetContent extends CustomError {
    constructor (message = 'Reset Content', extra) {
        super(message, http.codes.RESET_CONTENT, extra);
    }
}

class PartialContent extends CustomError {
    constructor (message = 'Partial Content', extra) {
        super(message, http.codes.PARTIAL_CONTENT, extra);
    }
}

class MultiStatus extends CustomError {
    constructor (message = 'Multi Status', extra) {
        super(message, http.codes.MULTI_STATUS, extra);
    }
}

class AlreadyReported extends CustomError {
    constructor (message = 'Already Reported', extra) {
        super(message, http.codes.ALREADY_REPORTED, extra);
    }
}

class ImUsed extends CustomError {
    constructor (message = 'I\'m Used', extra) {
        super(message, http.codes.IM_USED, extra);
    }
}

class MultipleChoices extends CustomError {
    constructor (message = 'Multiple Choices', extra) {
        super(message, http.codes.MULTIPLE_CHOICES, extra);
    }
}

class MovedPermanently extends CustomError {
    constructor (message = 'Moved Permanently', extra) {
        super(message, http.codes.MOVED_PERMANENTLY, extra);
    }
}

class Found extends CustomError {
    constructor (message = 'Found', extra) {
        super(message, http.codes.FOUND, extra);
    }
}

class SeeOther extends CustomError {
    constructor (message = 'See Other', extra) {
        super(message, http.codes.SEE_OTHER, extra);
    }
}

class NotModified extends CustomError {
    constructor (message = 'Not Modified', extra) {
        super(message, http.codes.NOT_MODIFIED, extra);
    }
}

class UseProxy extends CustomError {
    constructor (message = 'Use Proxy', extra) {
        super(message, http.codes.USE_PROXY, extra);
    }
}

class SwitchProxy extends CustomError {
    constructor (message = 'Switch Proxy', extra) {
        super(message, http.codes.SWITCH_PROXY, extra);
    }
}

class TemporaryRedirect extends CustomError {
    constructor (message = 'Temporary Redirect', extra) {
        super(message, http.codes.TEMPORARY_REDIRECT, extra);
    }
}

class PermanentRedirect extends CustomError {
    constructor (message = 'Permanent Redirect', extra) {
        super(message, http.codes.PERMANENT_REDIRECT, extra);
    }
}

class ResumeIncomplete extends CustomError {
    constructor (message = 'Resume Incomplete', extra) {
        super(message, http.codes.RESUME_INCOMPLETE, extra);
    }
}

class BadRequest extends CustomError {
    constructor (message = 'Bad Request', extra) {
        super(message, http.codes.BAD_REQUEST, extra);
    }
}

class Unauthorized extends CustomError {
    constructor (message = 'Unauthorized', extra) {
        super(message, http.codes.UNAUTHORIZED, extra);
    }
}

class PaymentRequired extends CustomError {
    constructor (message = 'Payment Required', extra) {
        super(message, http.codes.PAYMENT_REQUIRED, extra);
    }
}

class Forbidden extends CustomError {
    constructor (message = 'Forbidden', extra) {
        super(message, http.codes.FORBIDDEN, extra);
    }
}

class NotFound extends CustomError {
    constructor (message = 'Not Found', extra) {
        super(message, http.codes.NOT_FOUND, extra);
    }
}

class MethodNotAllowed extends CustomError {
    constructor (message = 'Method Not Allowed', extra) {
        super(message, http.codes.METHOD_NOT_ALLOWED, extra);
    }
}

class NotAcceptable extends CustomError {
    constructor (message = 'Not Acceptable', extra) {
        super(message, http.codes.NOT_ACCEPTABLE, extra);
    }
}

class ProxyAuthenticationRequired extends CustomError {
    constructor (message = 'Proxy Authentication Required', extra) {
        super(message, http.codes.PROXY_AUTHENTICATION_REQUIRED, extra);
    }
}

class RequestTimeout extends CustomError {
    constructor (message = 'Request Timeout', extra) {
        super(message, http.codes.REQUEST_TIMEOUT, extra);
    }
}

class Conflict extends CustomError {
    constructor (message = 'Conflict', extra) {
        super(message, http.codes.CONFLICT, extra);
    }
}

class Gone extends CustomError {
    constructor (message = 'Gone', extra) {
        super(message, http.codes.GONE, extra);
    }
}

class LengthRequired extends CustomError {
    constructor (message = 'Length Required', extra) {
        super(message, http.codes.LENGTH_REQUIRED, extra);
    }
}

class PreconditionFailed extends CustomError {
    constructor (message = 'Precondition Failed', extra) {
        super(message, http.codes.PRECONDITION_FAILED, extra);
    }
}

class PayloadTooLarge extends CustomError {
    constructor (message = 'Payload TooLarge', extra) {
        super(message, http.codes.PAYLOAD_TOO_LARGE, extra);
    }
}

class UriTooLong extends CustomError {
    constructor (message = 'Uri Too Long', extra) {
        super(message, http.codes.URI_TOO_LONG, extra);
    }
}

class UnsupportedMediaType extends CustomError {
    constructor (message = 'Unsupported Media Type', extra) {
        super(message, http.codes.UNSUPPORTED_MEDIA_TYPE, extra);
    }
}

class RangeNotSatisfiable extends CustomError {
    constructor (message = 'Range Not Satisfiable', extra) {
        super(message, http.codes.RANGE_NOT_SATISFIABLE, extra);
    }
}

class ExpectationFailed extends CustomError {
    constructor (message = 'Expectation Failed', extra) {
        super(message, http.codes.EXPECTATION_FAILED, extra);
    }
}

class ImATeapot extends CustomError {
    constructor (message = 'I\'m a Teapot', extra) {
        super(message, http.codes.IM_A_TEAPOT, extra);
    }
}

class AuthenticationTimeout extends CustomError {
    constructor (message = 'Authentication Timeout', extra) {
        super(message, http.codes.AUTHENTICATION_TIMEOUT, extra);
    }
}

class MethodFailure extends CustomError {
    constructor (message = 'Method Failure', extra) {
        super(message, http.codes.METHOD_FAILURE, extra);
    }
}

class EnhanceYourCalm extends CustomError {
    constructor (message = 'Enhance Your Calm', extra) {
        super(message, http.codes.ENHANCE_YOUR_CALM, extra);
    }
}

class MisdirectedRequest extends CustomError {
    constructor (message = 'Misdirected Request', extra) {
        super(message, http.codes.MISDIRECTED_REQUEST, extra);
    }
}

class UnprocessableEntity extends CustomError {
    constructor (message = 'Unprocessable Entity', extra) {
        super(message, http.codes.UNPROCESSABLE_ENTITY, extra);
    }
}

class Locked extends CustomError {
    constructor (message = 'Locked', extra) {
        super(message, http.codes.LOCKED, extra);
    }
}

class FailedDependency extends CustomError {
    constructor (message = 'Failed Dependency', extra) {
        super(message, http.codes.FAILED_DEPENDENCY, extra);
    }
}

class UpgradeRequired extends CustomError {
    constructor (message = 'Upgrade Required', extra) {
        super(message, http.codes.UPGRADE_REQUIRED, extra);
    }
}

class PreconditionRequired extends CustomError {
    constructor (message = 'Precondition Required', extra) {
        super(message, http.codes.PRECONDITION_REQUIRED, extra);
    }
}

class TooManyRequests extends CustomError {
    constructor (message = 'Too Many Requests', extra) {
        super(message, http.codes.TOO_MANY_REQUESTS, extra);
    }
}

class RequestHeaderFieldsTooLarge extends CustomError {
    constructor (message = 'Request Header Fields Too Large', extra) {
        super(message, http.codes.REQUEST_HEADER_FIELDS_TOO_LARGE, extra);
    }
}

class LoginTimeout extends CustomError {
    constructor (message = 'Login Timeout', extra) {
        super(message, http.codes.LOGIN_TIMEOUT, extra);
    }
}

class NoResponse extends CustomError {
    constructor (message = 'No Response', extra) {
        super(message, http.codes.NO_RESPONSE, extra);
    }
}

class RetryWith extends CustomError {
    constructor (message = 'Retry With', extra) {
        super(message, http.codes.RETRY_WITH, extra);
    }
}

class BlockedByWindowsParentalControls extends CustomError {
    constructor (message = 'Blocked By Windows Parental Controls', extra) {
        super(message, http.codes.BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS, extra);
    }
}

class UnavailableForLegalReasons extends CustomError {
    constructor (message = 'Unavailable For Legal Reasons', extra) {
        super(message, http.codes.UNAVAILABLE_FOR_LEGAL_REASONS, extra);
    }
}

class Redirect extends CustomError {
    constructor (message = 'Redirect', extra) {
        super(message, http.codes.REDIRECT, extra);
    }
}

class RequestHeaderTooLarge extends CustomError {
    constructor (message = 'Request Header Too Large', extra) {
        super(message, http.codes.REQUEST_HEADER_TOO_LARGE, extra);
    }
}

class CertError extends CustomError {
    constructor (message = 'Cert Error', extra) {
        super(message, http.codes.CERT_ERROR, extra);
    }
}

class NoCert extends CustomError {
    constructor (message = 'No Cert', extra) {
        super(message, http.codes.NO_CERT, extra);
    }
}

class HttpToHttps extends CustomError {
    constructor (message = 'Http To Https', extra) {
        super(message, http.codes.HTTP_TO_HTTPS, extra);
    }
}

class TokenExpiredInvalid extends CustomError {
    constructor (message = 'Token Expired Invalid', extra) {
        super(message, http.codes.TOKEN_EXPIRED_INVALID, extra);
    }
}

class ClientClosedRequest extends CustomError {
    constructor (message = 'Client Closed Request', extra) {
        super(message, http.codes.CLIENT_CLOSED_REQUEST, extra);
    }
}

class TokenRequired extends CustomError {
    constructor (message = 'Token Required', extra) {
        super(message, http.codes.TOKEN_REQUIRED, extra);
    }
}

class InternalServerError extends CustomError {
    constructor (message = 'Internal Server Error', extra) {
        super(message, http.codes.INTERNAL_SERVER_ERROR, extra);
    }
}

class NotImplemented extends CustomError {
    constructor (message = 'Not Implemented', extra) {
        super(message, http.codes.NOT_IMPLEMENTED, extra);
    }
}

class BadGateway extends CustomError {
    constructor (message = 'Bad Gateway', extra) {
        super(message, http.codes.BAD_GATEWAY, extra);
    }
}

class ServiceUnavailable extends CustomError {
    constructor (message = 'Service Unavailable', extra) {
        super(message, http.codes.SERVICE_UNAVAILABLE, extra);
    }
}

class GatewayTimeout extends CustomError {
    constructor (message = 'Gateway Timeout', extra) {
        super(message, http.codes.GATEWAY_TIMEOUT, extra);
    }
}

class HttpVersionNotSupported extends CustomError {
    constructor (message = 'Http Version Not Supported', extra) {
        super(message, http.codes.HTTP_VERSION_NOT_SUPPORTED, extra);
    }
}

class VariantAlsoNegotiates extends CustomError {
    constructor (message = 'Variant Also Negotiates', extra) {
        super(message, http.codes.VARIANT_ALSO_NEGOTIATES, extra);
    }
}

class InsufficientStorage extends CustomError {
    constructor (message = 'Insufficient Storage', extra) {
        super(message, http.codes.INSUFFICIENT_STORAGE, extra);
    }
}

class LoopDetected extends CustomError {
    constructor (message = 'Loop Detected', extra) {
        super(message, http.codes.LOOP_DETECTED, extra);
    }
}

class BandwidthLimitExceeded extends CustomError {
    constructor (message = 'Bandwidth Limit Exceeded', extra) {
        super(message, http.codes.BANDWIDTH_LIMIT_EXCEEDED, extra);
    }
}

class NotExtended extends CustomError {
    constructor (message = 'Not Extended', extra) {
        super(message, http.codes.NOT_EXTENDED, extra);
    }
}

class NetworkAuthenticationRequired extends CustomError {
    constructor (message = 'Network Authentication Required', extra) {
        super(message, http.codes.NETWORK_AUTHENTICATION_REQUIRED, extra);
    }
}

class UnknownError extends CustomError {
    constructor (message = 'Unknown Error', extra) {
        super(message, http.codes.UNKNOWN_ERROR, extra);
    }
}

class OriginConnectionTimeout extends CustomError {
    constructor (message = 'Origin Connection Timeout', extra) {
        super(message, http.codes.ORIGIN_CONNECTION_TIMEOUT, extra);
    }
}

class NetworkReadTimeout extends CustomError {
    constructor (message = 'Network Read Timeout', extra) {
        super(message, http.codes.NETWORK_READ_TIMEOUT, extra);
    }
}

class NetworkConnectTimeoutError extends CustomError {
    constructor (message = 'Network Connect Timeout Error', extra) {
        super(message, http.codes.NETWORK_CONNECT_TIMEOUT_ERROR, extra);
    }
}

class JsonErrorResponse extends CustomError {
    constructor (json, status = http.codes.INTERNAL_SERVER_ERROR, message = 'Json Error Response') {
        super(message, status);
        this.extra = json;
    }

    toJson () {
        return this.extra;
    }
}

module.exports = {
    Continue,
    SwitchingProtocols,
    Processing,
    Ok,
    Created,
    Accepted,
    NonAuthoritativeInformation,
    NoContent,
    ResetContent,
    PartialContent,
    MultiStatus,
    AlreadyReported,
    ImUsed,
    MultipleChoices,
    MovedPermanently,
    Found,
    SeeOther,
    NotModified,
    UseProxy,
    SwitchProxy,
    TemporaryRedirect,
    PermanentRedirect,
    ResumeIncomplete,
    BadRequest,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    NotAcceptable,
    ProxyAuthenticationRequired,
    RequestTimeout,
    Conflict,
    Gone,
    LengthRequired,
    PreconditionFailed,
    PayloadTooLarge,
    UriTooLong,
    UnsupportedMediaType,
    RangeNotSatisfiable,
    ExpectationFailed,
    ImATeapot,
    AuthenticationTimeout,
    MethodFailure,
    EnhanceYourCalm,
    MisdirectedRequest,
    UnprocessableEntity,
    Locked,
    FailedDependency,
    UpgradeRequired,
    PreconditionRequired,
    TooManyRequests,
    RequestHeaderFieldsTooLarge,
    LoginTimeout,
    NoResponse,
    RetryWith,
    BlockedByWindowsParentalControls,
    UnavailableForLegalReasons,
    Redirect,
    RequestHeaderTooLarge,
    CertError,
    NoCert,
    HttpToHttps,
    TokenExpiredInvalid,
    ClientClosedRequest,
    TokenRequired,
    InternalServerError,
    NotImplemented,
    BadGateway,
    ServiceUnavailable,
    GatewayTimeout,
    HttpVersionNotSupported,
    VariantAlsoNegotiates,
    InsufficientStorage,
    LoopDetected,
    BandwidthLimitExceeded,
    NotExtended,
    NetworkAuthenticationRequired,
    UnknownError,
    OriginConnectionTimeout,
    NetworkReadTimeout,
    NetworkConnectTimeoutError,
    JsonErrorResponse,
    CustomError
};
