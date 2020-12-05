interface IMailConfig {
  driver: 'nodomailer';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
};

export default {
  driver: 'nodomailer',

  defaults: {
    from: {
      email: 'atendimento@va3.com.br',
      name: 'Atendimento',
    }
  }
} as IMailConfig;
