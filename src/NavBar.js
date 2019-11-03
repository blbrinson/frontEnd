import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';

class NavBar extends Component {
    render(){
        return (
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Todos
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Posts
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Albums
                        </TypoGraphy>
                    </ListItemText>
                   
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Photos
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Users
                        </TypoGraphy>
                    </ListItemText>
                </ListItem >
            </List>
        )
    }
}
export default NavBar;
