/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Drawer extends React.Component<tsPropsType, any> {
    static defaultProps: {
        position: string;
        onOpenChange: () => void;
        drawerWidth: number;
    };
    drawer: any;
    render(): JSX.Element;
}
