import React, { Component } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class TodoList extends Component {
    render(){
        return(
            <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">
                {this.props.todoList.map((todo) => (
                    <Grid item key={todo.title}>
                        <Card>
                          <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://bit.ly/2WNi2Ml"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {todo.title.substr(0,10)}
                              </Typography>
                              <Typography component="p">{todo.title}</Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Share
                            </Button>
                            <Button size="small" color="primary">
                              Learn More
                            </Button>
                          </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </div>
        )
    }
}
export default TodoList