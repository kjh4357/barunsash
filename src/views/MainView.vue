<template>
  <div>
    <BarunHeader/>
    <MainSection1 />
    <MainSection2 />
    <MainSection3 />
    <MainSection4 />
    <MainSection5 />
    <MainSection6 />
    <MainSection7 />
    <BarunFooter style="margin-top: 35px"/>
  </div>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import MainSection1 from "@/components/main/MainSection1";
import MainSection2 from "@/components/main/MainSection2";
import MainSection3 from "@/components/main/MainSection3";
import MainSection4 from "@/components/main/MainSection4";
import MainSection5 from "@/components/main/MainSection5";
import MainSection6 from "@/components/main/MainSection6";
import MainSection7 from "@/components/main/MainSection7";
import BarunFooter from "@/components/BarunFooter";

export default {
  name: "MainView",
  components: {
    BarunFooter,
    MainSection7,
    MainSection6,
    MainSection5,
    MainSection4,
    MainSection3,
    MainSection2,
    MainSection1,
    BarunHeader
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>

</style>
