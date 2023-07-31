<template>
  <div>
    <BarunHeader />
    <SashSection1 />
    <SashSection2 />
    <SashSection3 />
    <SashSection4 />
    <SashSection5 />
    <SashSection6 />
    <SashSection7 />
    <SashSection8 />
    <SashSection9 />
    <BarunFooter style="margin-top: 35px"/>
  </div>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import BarunFooter from "@/components/BarunFooter";
import SashSection1 from "@/components/sash/SashSection1";
import SashSection2 from "@/components/sash/SashSection2";
import SashSection3 from "@/components/sash/SashSection3";
import SashSection4 from "@/components/sash/SashSection4";
import SashSection5 from "@/components/sash/SashSection5";
import SashSection6 from "@/components/sash/SashSection6";
import SashSection7 from "@/components/sash/SashSection7";
import SashSection8 from "@/components/sash/SashSection8";
import SashSection9 from "@/components/sash/SashSection9";
export default {
  name: "SashView",
  components: {
    SashSection1,
    SashSection2,
    SashSection3,
    SashSection4,
    SashSection5,
    SashSection6,
    SashSection7,
    SashSection8,
    SashSection9,
    BarunFooter,
    BarunHeader
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>

</style>
