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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Mcdonalds', 'January 15, 2020', 6.0, 24, 4.0),
  createData('Harveys', 237, 9.0, 37, 4.3),
  createData('KFC', 262, 16.0, 24, 6.0),
  createData('Swiss Chalet', 305, 3.7, 67, 4.3),
  createData('White oaks', 356, 16.0, 49, 3.9),
];


 export default function Dashboard(){
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
 <div className="flex-box-dashboard">
 <h1>Dash Board</h1>
 <Avatar className = "avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
 <Card className={classes.root}>
      <CardContent>

        <Typography variant="h8" component="h4">
          Restaurant contact information:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>

        <Typography variant="body2" component="p">
          Phone number
        </Typography>
        <Typography variant="body2" component="p">
          Business email 
        </Typography>
        <Typography variant="body2" component="p">
          Address
        </Typography>
        <Typography variant="body2" component="p">
          Postal Code
        </Typography>
        <Typography variant="h8" component="h4">
          Pick up time 
        </Typography>


      </CardContent>
      <CardActions>
        <Button size="small">Your pickup/order status</Button>
      </CardActions>
    </Card>
      
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
    
  );
};