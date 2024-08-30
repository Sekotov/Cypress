describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим почту
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#forgotEmailButton').click(); // жмем кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // вводим почту
        cy.get('#restoreEmailButton').click(); // жмем кнопку восстановить пароль
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим почту
        cy.get('#pass').type('iLoveqastudio2'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type('german@dolnikowww.ru'); // вводим почту
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })

    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type('germandolnikov.ru'); // вводим почту
        cy.get('#pass').type('iLoveqastudio'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем текст
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // вводим почту
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })
})