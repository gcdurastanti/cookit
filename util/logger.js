import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.cli({ colors: { info: 'blue' }}),
  transports: [
    new winston.transports.Console({
      format: winston.format.cli({ colors: { info: 'blue' }})
    })
  ]
});

export default logger;
