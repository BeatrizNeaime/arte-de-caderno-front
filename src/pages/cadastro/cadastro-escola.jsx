import CadastroEscolaView from "../../views/cadastro-escola";

const CadastroEscola = () => {
  // const getCep = async (e) => {
  //   const cep = e.target.value.replace(/\D/g, "");
  //   const url = `http://localhost:8080/cep/${cep}`;

  //   try {
  //     const a = await fetch(url);
  //     const b = await a.json();
  //     console.log(b);
  //     if (b.erro) {
  //       toast.error("CEP incorreto!");
  //     } else if (b.logradouro === "" || b.bairro === "") {
  //       toast.warn(
  //         "Notamos que o CEP não possui dados de Rua e Bairro. Por favor, preencha manualmente!"
  //       );
  //       setEscola((escola) => ({
  //         ...escola,
  //         cep: b.cep,
  //         cidade: b.localidade,
  //         uf: b.uf,
  //         rua: "",
  //         bairro: "",
  //       }));
  //       setDesabilitado(false);
  //     } else {
  //       setEscola((escola) => ({
  //         ...escola,
  //         cep: b.cep,
  //         rua: b.logradouro,
  //         bairro: b.bairro,
  //         cidade: b.localidade,
  //         uf: b.uf,
  //       }));
  //       setDesabilitado(true);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return <CadastroEscolaView />;
};

export default CadastroEscola;