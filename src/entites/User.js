export default class User {
  id;
  name;
  email;
  yearsOld;
  dtNascimento;
  address;
  constructor() {
    this.id = null;
    this.name = "";
    this.email = "";
    this.yearsOld = "";
    this.dtNascimento = "";
    this.address = "";
  }

  save = async (id, name, email, date, zipCode) => {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    user.yearsOld = `${this.calcYear(date)} anos`;
    user.dtNascimento = new Date(date).toLocaleDateString();
    user.address = await this.saveAddress(zipCode);
    return user;
  };

  calcYear(date) {
    const dtYear = new Date(date).getFullYear();
    let calc = new Date().getFullYear() - dtYear;
    return calc;
  }

  saveAddress = async (zipCode) => {
    const address = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = await address.json();

    return {
      logradouro: data.logradouro,
      bairro: data.bairro,
      estado: data.estado,
    };
  };
}
