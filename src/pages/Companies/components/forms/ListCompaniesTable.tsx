import React, { useState, useEffect, Component, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useAuth } from '../../../../contexts/auth';
import CompanieDataService from '../../../../services/companies.services';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Spinner from '../../../../components/loadingage'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CompaniesList() {
  const classes = useStyles();
  const { signOut } = useAuth();
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCompanies() {
      const response = await CompanieDataService.getAllCompanies();
      setCompanies(response.data.empresas);
      setLoading(false);
    }
    loadCompanies()
  }, [])

  async function handleDelete(id: number) {
    if(window.confirm("Deseja realmente excluir o registro?")) {
      var result = await CompanieDataService.deleteCompanie(id);
      if(result.status === 200) {
        window.location.href = '/empresas';
      } else {
        alert("Ocorreu um erro. Por favor, tente novamente")
      }
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        {loading ? <Spinner /> : ""}
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Razão Social</TableCell>
              <TableCell align="center">CNPJ</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Data de Cadastro</TableCell>
              <TableCell align="center">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.razao_social}
                </TableCell>
                <TableCell align="right">{row.cnpj}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{new Date(row.created_at).toLocaleString('pt-br')}</TableCell>
                <TableCell align="center">
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button color="primary" href={`empresas/${row.id}/update`} >Atualizar</Button>
                    <Button color="secondary" onClick={() => handleDelete(row.id)} >Excluir</Button>
                  </ButtonGroup>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
