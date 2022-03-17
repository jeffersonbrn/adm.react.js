import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../components/menu/footer';
import MenuList from '../../components/menu/menu-list';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CreateCompanie from './components/forms/CreateCompanieTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  buttonAdd: {
    marginBottom: 20
  }
}));

export default function CompaniesCreate() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <MenuList title={'Cadastrar Empresa'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item sm={12} >
            <Button href='/empresas' className={classes.buttonAdd} variant="contained" color="primary">
              Retornar para Listagem
            </Button>
            <Paper className={classes.paper}>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={12}>
                  <CreateCompanie />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}