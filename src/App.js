import './App.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DashboardStyles from './DashboardStyles'


export default function SimpleCard() {
  const dashboardStyleClasses = DashboardStyles();

  return (
    <div className={`${dashboardStyleClasses.tile_container}`}>
    <Card className={`${dashboardStyleClasses.common_card} ${dashboardStyleClasses.create_db_card}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Create Database
        </Typography>
      </CardContent>
    </Card>
    <Card className={`${dashboardStyleClasses.common_card} ${dashboardStyleClasses.create_schema_card}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Create Schema
        </Typography>
      </CardContent>
    </Card>
    <Card className={`${dashboardStyleClasses.common_card} ${dashboardStyleClasses.create_db_user_card}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Create DB User
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
