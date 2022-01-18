import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const DashboardStyles = makeStyles({
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
    tile_container: {
      display: 'flex',
      margin: '16px 8px',
    },
    
    common_card: {
      width: '280px',
      height: '150px',
      display: 'flex',
      alignProperty : 'center',
      color: 'white',
      fontSize: '30px',
      margin: '0px 8px',
      cursor: 'pointer',
    },
    
    create_db_card: {
      background: '#57b8dd',
    },
    
    create_schema_card: {
      background:'#65e770',
    },
    
    create_db_user_card: {
      background: '#222b23',
    }
  });

  export default DashboardStyles;