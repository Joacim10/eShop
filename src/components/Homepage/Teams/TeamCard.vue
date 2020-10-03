<template>
  <div class="container">
    <div class="text-center mt-5 theme">
      <h2 class="f-play font-weight-bold">
        Behind in every succesful buisness,
        <br />there have a strong qualified person
      </h2>
      <p class="text-dark">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        <br />the industry's standard dummy text ever since the 1500s, when an unknown printer took.
      </p>
    </div>

    


    <div class="row d-flex justify-content-center mb-5">
    
    <div v-for="member in members" :key="member" class="card mt-3 borderCard rounded mr-3 " style="width: 16.5rem;" id="teamCard">
      <img class="card-img-top" src="/image/Team/Doe.png" alt="Card image cap" />
      <div  class="card-body themeBg text-center text-white" >
        <p class="card-title mb-1">{{member.name}}</p>
        <p class="card-text">{{member.role}}</p>

        <a href="#" class="btn bgDarkBlue py-0 text-white radiusTeam py-1 px-3">
          <i class="fab fa-facebook-f mr-3"></i>
          <i class="fab fa-twitter mr-3"></i>
          <i class="fab fa-instagram mr-3"></i>
          <i class="fab fa-pinterest-p mr-3"></i>
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div> 
    </div> 
  </div>
</template>

<script>
export default {
    data () {
        return{
            members: [
            { image : "", name : "JOHN DOE", role : "Managin Director" },
            { image : "", name : "SHAKIL HASAN", role : "Managin Manager" },
            { image : "", name : "MICHAEL JORDAN", role : "Basket player" },
            { image : "", name : "WILLIUM CARRY", role : "Actor" },
            { image : "", name : "KALLE KARLSSON", role : "Worker" },
            { image : "", name : "JANNE JANQVIRRE", role : "Worker" },
            { image : "", name : "GREGER JOSEFSSON", role : "Worker" },
            { image : "", name : "LAST MAN", role : "Worker" },
        ]
        }
        
    }
};
</script>

<style scoped>
.radiusTeam {
  border-radius: 40px !important;
}
.borderCard{
    border: 2px solid var(--theme);
}

.full-border {
  border: 2px solid var(--theme);
}

.custom-radius {
    border-radius: 25px;
}

#teamCard:hover {
  border: 2px solid var(--darkBlue);
}

#teamCard:hover .themeBg {
  background-color: var(--darkBlue);
}

#teamCard:hover .bgDarkBlue {
  background-color: #FFFFFF;
}

#teamCard:hover .fab {
  color: var(--theme);
}


</style>