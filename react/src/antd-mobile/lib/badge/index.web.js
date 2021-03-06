'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Badge = function (_React$Component) {
    (0, _inherits3["default"])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3["default"])(this, Badge);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Badge.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            text = _props.text,
            prefixCls = _props.prefixCls,
            overflowCount = _props.overflowCount,
            className = _props.className,
            style = _props.style,
            children = _props.children;

        var dot = this.props.dot;
        var size = this.props.size;
        var corner = this.props.corner;
        text = text > overflowCount ? overflowCount + '+' : text;
        // dot mode don't need text
        if (dot) {
            text = '';
        }
        // null undefined "" "0" 0
        var hidden = (!text || text === '0') && !dot;
        var scrollNumberCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot', dot), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot-large', dot && size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-text', !dot && !corner), (0, _defineProperty3["default"])(_classNames, prefixCls + '-corner', corner), (0, _defineProperty3["default"])(_classNames, prefixCls + '-corner-large', corner && size === 'large'), _classNames));
        var badgeCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, className, !!className), (0, _defineProperty3["default"])(_classNames2, prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-not-a-wrapper', !children), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-corner-wrapper', corner), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-corner-wrapper-large', corner && size === 'large'), _classNames2));
        return _react2["default"].createElement("span", { className: badgeCls, title: text }, children, !hidden && _react2["default"].createElement("sup", { className: scrollNumberCls, style: style }, text));
    };

    return Badge;
}(_react2["default"].Component);

exports["default"] = Badge;

Badge.defaultProps = {
    prefixCls: 'am-badge',
    text: null,
    dot: false,
    corner: false,
    overflowCount: 99,
    size: null
};
module.exports = exports['default'];