<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>
          <nuxt-link :to="{name: 'home'}">E-Store</nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{name: 'catalog'}">Catalog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{name: 'catalog'}">Contacts</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{name: 'catalog'}">Privacy & Policy</nuxt-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-navbar-nav>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Cart({{totalCartCount}})</nuxt-link>
              </li>
            </b-navbar-nav>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'default',
    computed: mapGetters({
      totalCartCount: 'Cart/getCartCount'
    })
  }
</script>
