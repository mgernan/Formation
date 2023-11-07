describe('Suite de tests A', function(){

    it('Cas de test 1', ()=>{
        
        cy.intercept('**/entries',{
            body : {
                "Items": [
                    {
                        "cat": "phone",
                        "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
                        "id": 1,
                        "img": "imgs/galaxy_s6.jpg",
                        "price": 3600,
                        "title": "Samsung galaxy s6"
                    },
                ],
                    "LastEvaluatedKey": {
                        "id": "1"
                    }
                }
        }).as('getProducts')
           
        

        cy.intercept('/bycat',{
            body : {
                "Items": [
                    {
                        "cat": "phone",
                        "desc": "This is a laptop oui oui. ",
                        "id": 1,
                        "img": "imgs/galaxy_s6.jpg",
                        "price": 3600,
                        "title": "Samsung galaxy s6"
                    },
                ],
            }
        }).as('catFilter')

        cy.visit('https://www.demoblaze.com/')
        cy.wait('@getProducts')
        cy.contains('Laptops').click()
            
    })
})