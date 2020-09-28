<template>
<div>
     <div class="container-fluid bgDarkBlueOpac">
    <div class="container">
    <div class=" py-5 pyTeam">
        <div class="text-white">
            <h2 class="mb-0">An <span class="theme">Awsome Team</span></h2>
            <h2 >Behind Our Online store</h2>
        </div>
    </div>
    </div>
  </div>
    <TeamCard />
    <BannerSpecialMoments />
    <SubscribeNow />

  </div>
</template>

<script>
import TeamCard from "../Teams/TeamCard"
import BannerSpecialMoments from './BannerSpecialMoments'
import SubscribeNow from '../SubscribeNow'
export default {
components: {
    TeamCard,
    BannerSpecialMoments,
    SubscribeNow,
}
}
</script>

<style scope>
.bgDarkBlueOpac{
    opacity: 0.70;
    background-color: #0E153D;
}
.pyTeam{
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}

</style>