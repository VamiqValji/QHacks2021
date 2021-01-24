import React from "react";
import './Dashboard.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 17,
  },
  pos: {
    marginBottom: 12,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Mcdonalds', 'Febuary 15, 2021', 6.0, '(647)-314-4330', 'mcdonalds@gmail.com'),
  createData('Harveys', 'January 15, 2021', 9.0, '(905)-321-6400', 'harveys@gmail.com'),
  createData('KFC', 'July 17, 2020', 16.0, '(647)-510-9981', 'kfc@gmail.com'),
  createData('Swiss Chalet', 'Febuary 12, 2019', 3.7, '(647)-252-8181', 'swisschalet@gmail.com'),
  createData('White oaks','January 15, 2019', 16.0, '(647)-219-4320', 'whiteoaks@hdsb.ca'),
];
 export default function Dashboard(){
  let user = (sessionStorage.getItem("user").split(","));
  let recent = (sessionStorage.getItem("recent").split(","));
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
  <div className="containingContainer">
  <div className="container">
 <div className="flex-box-dashboard">
 <h1 className = "dashboardName">Dash Board</h1>
 <div className="account">{user[1]} Account</div>
 <Avatar className = "avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 

 <h2 className = "activeorder">Active Order(s):</h2>

 
 <Card id = "card" className={classes.root}>
      <CardContent>

        <Typography variant="h8" component="h4">
          Restaurant Contact Information:
        </Typography>
       
        <Typography variant="body2" component="p">
          Owner Name: {recent[0]}
        </Typography>
        <Typography variant="body2" component="p">
          Restaurant Name: {recent[1]}
        </Typography>
        <Typography variant="body2" component="p">
          Postal Code: {recent[2]}
        </Typography>
        <Typography variant="body2" component="p">
          Address: {recent[3]}
        </Typography>
        <Typography variant="body2" component="p">
          Phone Number: {recent[4]}
        </Typography>
        <Typography variant="h8" component="h4">
          Pick Up Time: {recent[5]} 
        </Typography>


      </CardContent>
      <CardActions>
        <Button size="small">Your pickup/order status</Button>
      </CardActions>
    </Card>
      <h2 className = "recentorders">Recent Order(s):</h2>
    <div className="table">
    <TableContainer className = "hello" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Restaurant Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Food&nbsp;(lbs)</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
</div>
</div>
</div>
  );
};
