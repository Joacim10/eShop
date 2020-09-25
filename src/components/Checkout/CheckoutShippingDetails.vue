<template>
  <div>
    <p class="font-weight-bold text-uppercase">Billing details</p>

    <div class="form-row">
      <!--  Förnamn -->

      <div class="col-md-6 mb-3">
        <label for="firstName">
          First name
          <span class="theme">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
          v-on:blur="$v.firstName.$touch()"
          v-bind:class="{invalid: $v.firstName.$error}"
        />
        <p
          class="m-0 p-0"
          v-if="!$v.firstName.minLength || !$v.firstName.maxLength"
        >please use between {{$v.firstName.$params.minLength.min}} and {{$v.firstName.$params.maxLength.max}} char.</p>
        <p class="m-0 p-0" v-if="!$v.firstName.alpha">please use alpha char.</p>
        <!-- <div class="valid-feedback">Looks good!</div> -->
        <!-- <div class="invalid-feedback">Please insert your first name</div> -->
      </div>

      <!--  Last name -->
      <div class="col-md-6 mb-3">
        <label for="lastName">
          Last name
          <span class="theme">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
          v-on:blur="$v.lastName.$touch()"
          v-bind:class="{invalid: $v.lastName.$error}"
        />
        <p
          class="m-0 p-0"
          v-if="!$v.lastName.minLength || !$v.lastName.maxLength"
        >please use between {{$v.lastName.$params.minLength.min}} and {{$v.lastName.$params.maxLength.max}} char.</p>
        <p class="m-0 p-0" v-if="!$v.lastName.alpha">please use alpha char.</p>
        <!-- <div class="valid-feedback">Looks good!</div> -->
        <!-- <div class="invalid-feedback">lease insert your last name</div> -->
      </div>

      <!--  Company -->
      <div class="col-12 mb-3">
        <label for="company">Company name (optional)</label>
        <input type="text" class="form-control" id="company" v-model="companyName" />
      </div>

      <!--  Country / Region -->
      <div class="col-12 mb-3">
        <label for="country">
          Country / Region
          <span class="theme">*</span>
        </label>
        <select
          class="custom-select"
          id="country"
          v-model="country"
          v-on:blur="$v.country.$touch()"
          v-bind:class="{invalid: $v.country.$error}"
        >
          <option selected disabled value>Select</option>
          <option>sweden</option>
          <option>norway</option>
          <option>finland</option>
          <option>denmark</option>
        </select>
        <!-- <div class="invalid-feedback">Please select a Country / Region.</div> -->
      </div>

      <!--  Street address -->
      <div class="col-12 mb-3">
        <label for="address">
          Street address
          <span class="theme">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="House number and street name"
          v-model="streetAddress"
          v-on:blur="$v.streetAddress.$touch()"
          v-bind:class="{invalid: $v.streetAddress.$error}"
        />
        <!-- <div class="valid-feedback">Looks good!</div> -->
        <!-- <div class="invalid-feedback">Please insert your street address</div> -->
      </div>

      <!--  apartment number -->
      <div class="col-12 mb-3">
        <input
          type="text"
          class="form-control"
          id="apartment"
          placeholder="Apartment, suite, unit, etc. (optional)"
          v-model="apartmentNumber"
          v-on:blur="$v.apartmentNumber.$touch()"
          v-bind:class="{invalid: $v.apartmentNumber.$error}"
        />
      </div>

      <!--  Town / City -->

      <div class="col-12 mb-3">
        <label for="city">
          Town / City
          <span class="theme">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="city"
          v-model="city"
          v-on:blur="$v.city.$touch()"
          v-bind:class="{invalid: $v.city.$error}"
        />
      </div>

      <!--  State -->

      <div class="col-12 mb-3">
        <label for="state">
          State (optional)
          <span class="theme"></span>
        </label>
        <select class="custom-select" id="state" v-model="state">
          <option selected disabled value></option>
          <option>state1</option>
          <option>state2</option>
          <option>state3</option>
        </select>
      </div>

      <!--  Zip -->
      <div class="col-12 mb-3">
        <label for="zip">
          Zip
          <span class="theme">*</span>
        </label>
        <input
          type="number"
          class="form-control"
          id="zip"
          v-model="zipCode"
          v-on:blur="$v.zipCode.$touch()"
          v-bind:class="{invalid: $v.zipCode.$error}"
        />
      </div>

      <!--  Phone -->
      <div class="col-12 mb-3">
        <label for="tel">
          Phone
          <span class="theme">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="tel"
          placeholder="format +xx xx xxxxx or (xx) xxx xxxxxx"
          v-model="phoneNumber"
          v-on:blur="$v.phoneNumber.$touch()"
          v-bind:class="{invalid: $v.phoneNumber.$error}"
        />
        <p
          class="m-0 p-0"
          v-if="!$v.phoneNumber.validnumber && $v.phoneNumber.$error"
        >please fill in valid phone number</p>
      </div>

      <!--  Email -->
      <div class="col-12 mb-3">
        <label for="email">
          Email
          <span class="theme">*</span>
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          v-on:blur="$v.email.$touch()"
          v-bind:class="{invalid: $v.email.$error}"
        />
        <!-- <div class="invalid-feedback">Please insert your e-mail</div> -->
      </div>
    </div>

    <!--  Checkbox account -->

    <!-- <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="account" >
      <label class="form-check-label" for="account">
       Create an account?
      </label>
    </div>
    </div>-->

    <hr />

    <!--  Checkbox adress2 -->
    <div class="form-group">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value
          id="adress2"
          v-model="shipToDifferentAddress"
        />
        <label
          class="form-check-label font-weight-bold text-uppercase"
          for="account"
        >Ship to a different address?</label>
      </div>
    </div>

    <!-- alternativ address för leverans -->
    <!-- visas bara om checkbox shipToDifferentAddress är ikryssad -->
    <div v-if="shipToDifferentAddress">
      <p>Please fill in data of alternative recipient</p>
      <!-- namn på mottagare -->
      <div class="form-row">
        <div class="col-lg-8 col-md-6 mb-3">
          <label for="altShippingrecipient">
            Name of alt. recipient
            <span class="theme">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="altShippingrecipient"
            v-model="altShippingrecipient"
          />
        </div>
      </div>
      <!-- address -->
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="altShippingStreetAddress">
            Street address
            <span class="theme">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="altShippingStreetAddress"
            v-model="altShippingStreetAddress"
          />
        </div>
      </div>
      <!--  Zip -->
      <div class="form-row">
        <div class="col-4 mb-3">
          <label for="alterzip">
            Zip
            <span class="theme">*</span>
          </label>
          <input type="text" class="form-control" id="alterzip" v-model="alterZipCode" />
        </div>
      </div>
      <!-- alter city -->
      <div class="form-row">
        <div class="col-4 mb-3">
          <label for="alterCity">
            City
            <span class="theme">*</span>
          </label>
          <input type="text" class="form-control" id="alterCity" v-model="alterCity" />
        </div>
      </div>
      <!--  -->
    </div>
    <!-- alternativ address för leverans end -->

    <!-- test -->
    <!-- <p>form invalid: {{ $v.$invalid }}</p> -->
    <!--  -->

    <!--  textbox Notes  -->
    <div class="form-group">
      <label for="notes">Order notes (optional)</label>
      <textarea
        class="form-control"
        id="notes"
        rows="8"
        placeholder="Notes about your order, e.g. special notes for delivery."
      ></textarea>
    </div>
  </div>
</template>


<script>
// store
import { mapActions, mapGetters } from "vuex";

// /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
//  /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
const phoneno = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

// function som används av vuelidate för data "phoneNumber"
const validnumber = (value) => {
  if (value.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

// alphaNum,
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "CheckoutShippingdetails",
  phoneno: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,

  data() {
    return {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      apartmentNumber: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",

      // optional
      orderNotes: "",

      // bool
      shipToDifferentAddress: false,

      // alter. recipient name
      altShippingrecipient: "",
      altShippingStreetAddress: "",
      alterZipCode: "",
      alterCity: "",

      message: "",

      validnumber: "",
    };
  },

  methods: {
    ...mapActions(["storeShippingData","storeShippingDataValid","clearShippingData"]),

    updateShippingData() {
      const shippingData = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,

        companyName: this.companyName,

        streetAddress: this.streetAddress,
        apartmentNumber: this.apartmentNumber,
        zipCode: this.zipCode,
        city: this.city,
        state: this.state,
        country: this.country,

        orderNotes: this.orderNotes,

        shipToDifferentAddress: this.shipToDifferentAddress,
        altShippingrecipient: this.altShippingrecipient,
        altShippingStreetAddress: this.altShippingStreetAddress,
        alterZipCode: this.alterZipCode,
        alterCity: this.alterCity,
      };

      // console.log(shippingData);
      // sparar till storeOrders
      this.storeShippingData(shippingData)
    },
  },

  validations: {
    firstName: {
      required,
      alpha,
      minLength: minLength(2),
      maxLength: maxLength(20),
    },
    lastName: {
      required,
      alpha,
      minLength: minLength(2),
      maxLength: maxLength(20),
    },
    country: {
      required,
      alpha,
    },
    streetAddress: {
      required,
    },
    apartmentNumber: {
      maxLength: maxLength(6),
    },
    city: {
      required,
      alpha,
      maxLength: maxLength(20),
    },
    zipCode: {
      required,
      numeric,
      maxLength: maxLength(20),
    },
    phoneNumber: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(30),
      validnumber,
    },
    email: {
      required,
      email,
      minLength: minLength(6),
      maxLength: maxLength(50),
      unique: (val) => {
        if (val === "") return true;
        // här kan man kontakta databas och se om email redan finns
        return val !== "test@test.com";
      },
    },
  },
  updated: function () {
    if (this.$v.$invalid == false) {
      // om formuläret är valid så skickar vi data till store
      console.log("shipping data ok");
      this.updateShippingData();
    } else {
      // data saknas i formulär/ej korrekt, spärra "Place Order"
      this.storeShippingDataValid(false);
    }
  },

  computed: {
    ...mapGetters(["shippingDataValid"]),
  },
  beforeMount: function () {
    this.clearShippingData();
  }

};
</script>





<style scoped>
/* klasser för vuelidate */
.invalid {
  border: 1px solid #f77272 !important;
  background-color: #f8b1b1 !important;
}
.valid {
  background-color: #6fffab !important;
}

.btndisabled {
  background-color: #8ab8b3 !important;
}
</style>