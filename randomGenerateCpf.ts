function gerarCPF(qdt: number): string[] {
  const randomDigit = () => Math.floor(Math.random() * 9);

  const generateCPFArray = (): number[] => {
    const cpfArray = Array.from({ length: 9 }, randomDigit);

    const digito1 =
      cpfArray.reduce((acc, digit, index) => acc + digit * (index + 1), 0) % 11;
    cpfArray.push(digito1 < 10 ? digito1 : 0);

    const digito2 =
      cpfArray.reduce((acc, digit, index) => acc + digit * (index + 1), 0) % 11;
    cpfArray.push(digito2 < 10 ? digito2 : 0);

    return cpfArray;
  };

  const listCpf: string[] = [];
  for (let i = 0; i < qdt; i++) {
    const cpfArray = generateCPFArray();
    const cpfGerado = cpfArray.join("");
    listCpf.push(cpfGerado);
  }

  return listCpf;
}
const qtdCPFs = process.argv[2] ? parseInt(process.argv[2]) : 1;
const cpfsGerados = gerarCPF(5);

console.log(cpfsGerados);
