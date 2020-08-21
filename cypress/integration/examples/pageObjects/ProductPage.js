class ProductPage
{
    checkOutButton()
    {
        //click on checkOutButton - > open list elements selected items(phones)
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}
export default ProductPage;
