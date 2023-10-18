import React, {CSSProperties, ReactElement, Suspense} from "react";
import {CircularProgress} from "@mui/material";
import {isTestEnv} from "@pepfar-react-lib/datim-api";
import {checkSuperUser} from "../services/checkSuperUser.service";
import {CustomMethod} from "../types/testConsole.types";

const Menu = React.lazy(() => import('./menu'));

const styles = {
    root: {
        position: 'fixed',
        top: 50,
        right: 9,
        zIndex: 10000,
        fontSize: 13
    } as CSSProperties,
    loading: {
        marginTop: 300
    }
};

export let openViaTest;

export class TestConsole extends React.Component<{
    buildDate:string,
    testMethods:CustomMethod[],
    customComponents?: ReactElement|ReactElement[]
}, {isSuperUser:boolean, menuOpen: boolean}>{
    constructor(props:any) {
        super(props);
        this.checkSuperUser();
        this.state = {isSuperUser:false, menuOpen: false}
        window.addEventListener('keydown', this.keypress as any);
        openViaTest = this.keypress;
    }

    keypress = (e:React.KeyboardEvent<Element>)=>{
        if (e.key!==`\``||!e.ctrlKey) return;
        if (!this.state.isSuperUser) console.log(`Can't open Dev-Tools. Not a superuser.`)
        this.setState({menuOpen: true})
    }

    async checkSuperUser(){
        let isSuperUser = await checkSuperUser();
        this.setState({isSuperUser});
    }

    render(){
        if (!this.state.isSuperUser) return null;
        return <div style={styles.root} data-testid={'root'}>
            {this.state.menuOpen && <Suspense fallback={<CircularProgress style={styles.loading}/>}>
                <Menu
                    open={this.state.menuOpen}
                    onClose={()=>this.setState({menuOpen: false})}
                    customMethods={this.props.testMethods}
                    customComponents={this.props.customComponents}
                    buildDate={this.props.buildDate}
                />
            </Suspense>}
        </div>;
    }
}




