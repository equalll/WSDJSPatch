/// <reference types="react" />
import React from 'react';
export interface CardFooterProps {
    content?: any;
    extra?: any;
    style?: {};
}
export default class CardFooter extends React.Component<CardFooterProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
