import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { Collapse } from '@material-ui/core'
import CompanieDataService from '../../../../services/companies.services';
import IcompaniesData from '../../../../types/companies.type';
import { AxiosError } from 'axios';

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    marginBottom: 20,
    marginLeft: 15
  }
}));



export default function CompanieCreate() {

  const [razao_social, setRazao_social] = useState('');
  const [nome_fantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [logradouro, setlogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');

  function IsEmailValid() {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      const msg: string = "Informe um e-mail valido";
      return true;
    }
    return false;
  }

  function IsValid() {
    var re = /\S+@\S+\.\S+/;
    if (razao_social.length > 3 && cnpj.length > 13 && celular.length > 9 && (re.test(email) && email.length > 3) && logradouro.length > 3 && bairro.length > 3 && cidade.length >= 3 && uf !== '', cep !== '') {
      return true;
    }
    return false;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (IsValid() && IsEmailValid()) {
      const data: IcompaniesData = {
        razao_social, nome_fantasia, cnpj, telefone, celular, email, logradouro, numero, complemento, bairro, cidade, uf, cep
      }
      CompanieDataService.createCompanie(data)
        .then((res) => {
          setMessage("Empresa Cadastrada com sucesso!")
          setTimeout(() => {
            window.location.href = "/empresas"
          }, 3000)
          console.log(res.data);
        })
        .catch((error) => {
          const err = error as AxiosError
          setMessage("Error: " + JSON.stringify(err.response?.data.errors))
          console.log(err.response?.data.errors)
        })
    } else {
      setMessage("Algo deu errado, tente novamente")
    }

  }


  const classes = useStyles();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2 },
        width: '100%',
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          id="razao_social"
          name='razao_social'
          label="Razão Social"
          type="text"
          variant="standard"
          sx={{ width: '60ch' }}
          value={razao_social}
          onChange={e => setRazao_social(e.target.value)}
        />
        <TextField
          id="nome_fantasia"
          name='nome_fantasia'
          label="Nome Fantasia"
          type="text"
          variant="standard"
          sx={{ width: '60ch' }}
          value={nome_fantasia}
          onChange={e => setNomeFantasia(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="cnpj"
          name='cnpj'
          label="CNPJ"
          type="text"
          variant="standard"
          value={cnpj}
          onChange={e => setCnpj(e.target.value.replace(/[^\d\s]/g, ""))}
          helperText="Informe apenas Números"
          inputProps={{ maxLength: 14 }}
        />
        <TextField
          id="telefone"
          name='telefone'
          label="Telefone"
          type="text"
          variant="standard"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
        <TextField
          required
          id="celular"
          name='celular'
          label="Celular"
          type="text"
          variant="standard"
          value={celular}
          onChange={e => setCelular(e.target.value)}
        />
        <TextField
          required
          id="email"
          name='email'
          label="E-mail"
          type="email"
          variant="standard"
          sx={{ width: '42ch' }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          helperText={!IsEmailValid() ? 'Informe um e-mail válido' : ""}
        />
      </div>
      <div>
        <TextField
          required
          id="logradouro"
          name='logradouro'
          label="Logradouro"
          type="text"
          variant="standard"
          value={logradouro}
          onChange={e => setlogradouro(e.target.value)}
        />
        <TextField
          id="numero"
          name='numero'
          label="Numero"
          type="text"
          variant="standard"
          value={numero}
          onChange={e => setNumero(e.target.value)}
        />
        <TextField
          id="complemento"
          name='complemento'
          label="Complemento"
          type="text"
          variant="standard"
          value={complemento}
          onChange={e => setComplemento(e.target.value)}
        />
        <TextField
          required
          id="bairro"
          name='bairro'
          label="Bairro"
          type="text"
          variant="standard"
          value={bairro}
          onChange={e => setBairro(e.target.value)}
        />
        <TextField
          required
          id="cidade"
          name='cidade'
          label="Cidade"
          type="text"
          variant="standard"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
        />
        <TextField
          required
          id="uf"
          name='uf'
          label="UF"
          type="text"
          variant="standard"
          value={uf}
          onChange={e => setUf(e.target.value)}
        />
        <TextField
          required
          id="cep"
          name='cep'
          label="CEP"
          type="text"
          variant="standard"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
      </div>
      <Button disabled={!IsValid()} type="submit" className={classes.buttonAdd} variant="contained" color="primary">
        Adicionar Empresa
      </Button>
      <div>
        <span>{message ? message : ""}</span>
      </div>
    </Box>
  );
}
