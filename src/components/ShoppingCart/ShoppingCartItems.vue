<template>
  <div>
    
    <table class="table table-hover ">
      <tbody v-for="info in object" :key="info">
        <tr>
          <th scope="row">
            <i class="fas fa-times-circle mr-2"></i>

            <img src="/image/ShoppingCart/Group 1158.png" />
            <span class="ml-2 verticalCenter">{{info.desc}}</span>
          </th>
          <td class=" bTop">
            <span>{{info.price}}</span>
          </td>

          <td class="bTop">
            <button class="border rounded px-2 bgWhite">-</button>
            <span class="border bgWhite px-2 py-1 rounded">0</span>
            <button class="bgWhite border px-2 rounded">+</button>
          </td>

          <td class="theme bTop">
            <span>$380.00</span>
          </td>
        </tr>
      </tbody>
      
    </table>
    <div class="d-flex justify-content-end">
        <button class=" px-4 py-2 btn  btnRadius bgDarkBlue text-uppercase text-white font-weight-bold">UPDATE CART</button>
      </div>
    
  </div>
</template>

<script>
export default {
data: () => {
    return {
      object: [
        { desc: "Women smart high heal", price: "$120.00" },
        { desc: "Kalle Karlsson skor", price: "$110.00" },
        { desc: "Greta Gris väska", price: "$10.00" },
        { desc: "Pippi Långströms tröja", price: "$50.00" },
     
       
        
       
       
      ]
    };
  }
}
</script>

<style scoped>
.table td {
  vertical-align: middle;
}
th, td {
  border-top: 0;
  border-bottom: 0 !important;
}
.btnRadius{
  border-radius: 30px ;
}
.fa-times-circle {
  color: gray;
  font-size: 20px;
}
</style>