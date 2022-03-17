import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export const mainListItems = (
    <div>
        <ListItem button component="a" href='/home'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Configurações</ListSubheader>
        <ListItem button component="a" href='/empresas' >
            <ListItemIcon>
                <EmojiTransportationIcon />
            </ListItemIcon>
            <ListItemText primary="Empresas" />
        </ListItem>
        <ListItem button component="a" href="/admin/users" >
            <ListItemIcon>
                <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Usuários" />
        </ListItem>
    </div>
);