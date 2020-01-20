<template>
<div id="app">

    <!-- Navegación-->
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/">
                <img src="./assets/logo.png" width="50px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                </b-navbar-nav>

                <!-- buscador y más -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="REDES" right>

                        <b-dropdown-item href="#">RED 1</b-dropdown-item>
                        <b-dropdown-item href="#">RED 2</b-dropdown-item>

                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>

                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>MAIL</em>
                            <b-icon-envelope-open></b-icon-envelope-open>
                        </template>
                        <b-dropdown-item href="#">user@test1.com</b-dropdown-item>
                        <b-dropdown-item href="#">user@test2.com</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

    <b-container fluid class="text-light text-center mt-3">
        <b-row class="mb-3">

            <b-col sm="12" md="4" lg="3" class="p-3 bg-light">

                <div id="nav">
                    <b-list-group>
                        <router-link to="/menuprincipal">Menu Principal</router-link>
                        <router-link to="/perfil">Perfil</router-link>
                    </b-list-group>
                </div>

            </b-col>

            <b-col sm="12" md="8" lg="9" class="p-3 bg-info">
                <router-view />

            </b-col>

        </b-row>
    </b-container>
</div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
