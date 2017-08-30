const request = require('request');
module.exports = {
    do: (options) => {
        return new Promise((resolve, reject) => {
            request(options, (err, response) => {
                try {
                    if (err) {
                        if (err.code == 'ECONNREFUSED') {
                            return reject({
                                message: {
                                    developerMessage: `A conexão foi recusada pelo servidor ${err.address}:${err.port}, aparentemente está off-line.`,
                                    userMessage: 'Não conseguimos nos comunicar com alguma Api, tente novamente.'
                                },
                                statusCode: 500,
                                stack: err.stack
                            })
                            return;
                        }
                        else if (err.code !== 'ETIMEDOUT' && err.code !== 'ESOCKETTIMEDOUT') {
                            return reject({
                                message: {
                                    developerMessage: 'Erro não esperado pelo sistema',
                                    userMessage: 'Ocorreu alguma falha inesperada em alguma api, tente novamente'
                                },
                                statusCode: 500,
                                stack: err.stack
                            })
                        }
                        else {
                            return reject({
                                message: {
                                    developerMessage: err.message,
                                    userMessage: 'Ocorreu alguma falha inesperada em alguma api, tente novamente'
                                },
                                statusCode: 500,
                                stack: err.stack
                            })
                        }
                    }

                    if (!response) {
                        return reject({
                            message: {
                                developerMessage: err.message,
                                userMessage: 'Ocorreu alguma falha inesperada em alguma api, tente novamente'
                            },
                            statusCode: 500,
                            stack: new Error().stack
                        })
                    }

                    if (response.headers && response.headers["content-type"].indexOf("application/json") !== 0) {
                        return reject({
                            message: {
                                developerMessage: 'O Content Type esperado é diferente do formato JSON',
                                userMessage: 'Erro na chamada de Api! Tente outra vez.'
                            },
                            statusCode: 500,
                            stack: new Error().stack
                        })
                    }

                    return resolve(typeof (response.body) == 'object') ? response.body : JSON.parse(response.body);
                }
                catch (err) {
                    return reject({
                        message: {
                            developerMessage: err.message,
                            userMessage: 'Ocorreu alguma falha inesperada em alguma api, tente novamente'
                        },
                        statusCode: 500,
                        stack: err.stack
                    })
                }
            });
        })
    }
};