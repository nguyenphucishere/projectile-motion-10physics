<script setup></script>

<template>
  <div class="columns">
    <div class="column is-three-quarters p-0">
      <div class="calculator" ref="calc" style="height: 100vh"></div>
    </div>
    <div class="column columns is-mobile is-flex-direction-column">

      <div class="column is-full mt-2">
        <h1 class="title is-4">Initial attributes</h1>
      </div>
      <div class="column columns py-0 is-mobile">
        <div class="column pr-0 is-flex-direction-column">
          <div class="field is-horizontal">

            <div class="field-label is-normal py-2">
              <label class="label is-pulled-left" for="#g">
                <math-jax latex="g = "></math-jax>
              </label>
            </div>
          </div>

          <div class="field is-horizontal">

            <div class="field-label is-normal py-2">
              <label class="label is-pulled-left" for="#v0">
                <math-jax latex="v_0 = "></math-jax>
              </label>
            </div>
          </div>

          <div class="field is-horizontal">

            <div class="field-label is-normal py-2">
              <label class="label is-pulled-left" for="#alpha">
                <math-jax latex="\alpha = "></math-jax>
              </label>
            </div>
          </div>


        </div>

        <div class="column is-half px-0">

          <div class="field is-horizontal">

            <div class="field-body mr-2">
              <div class="field">
                <p class="control">
                  <input class="input" ref="g" id="g" type="number" v-model="g" />
                </p>
              </div>
            </div>

          </div>

          <div class="field is-horizontal is-flex-direction-column">

            <div class="field-body mr-2">
              <div class="field">
                <p class="control">
                  <input class="input" ref="v0" id="v0" type="number" v-model="v0" />
                </p>
              </div>
            </div>

          </div>

          <div class="field is-horizontal">

            <div class="field-body mr-2">
              <div class="field">
                <p class="control">
                  <input class="input" ref="alpha" id="alpha" type="number" max="89" v-model="alpha" />
                </p>
              </div>
            </div>

          </div>

        </div>

        <div class="column pl-0">
          <div class="field is-horizontal">

            <div class="field-label is-normal mr-2 py-2">
              <label class="label is-pulled-left" for="#g">
                <math-jax latex="m/s^2"></math-jax>
              </label>
            </div>
          </div>

          <div class="field is-horizontal">

            <div class="field-label is-normal mr-2 py-2">
              <label class="label is-pulled-left" for="#v0">
                <math-jax latex="m/s"></math-jax>
              </label>
            </div>
          </div>

          <div class="field is-horizontal">

            <div class="field-label is-normal mr-2 py-2">
              <label class="label is-pulled-left" for="#alpha">
                <math-jax latex="°"></math-jax>
              </label>
            </div>
          </div>


        </div>

      </div>


      <div class="column is-full mt-2 my-0 py-0">
        <h1 class="title is-4">Object information</h1>
      </div>
      <div class="column columns is-mobile mb-0 pb-0">
        <div class="column is-half attribute">
          <div class="p-2">
            <math-jax :latex="'x = ' + m"></math-jax>
          </div>
          <div class="p-2">
            <math-jax :latex="'y = ' + m_y"></math-jax>
          </div>
          <div class="p-2">
            <math-jax :latex="'t = ' + t"></math-jax>
          </div>
          <div class="p-2">
            <math-jax :latex="'v_x = ' + v_x"></math-jax>
          </div>
          <div class="p-2">
            <math-jax :latex="'v_y = ' + v_y"></math-jax>
          </div>
          <div class="p-2">
            <math-jax :latex="'v_{total} = ' + v"></math-jax>
          </div>
        </div>

        <div class="column is-half">
          <div class="p-2">
            <math-jax latex="m"></math-jax>
          </div>
          <div class="p-2">
            <math-jax latex="m"></math-jax>
          </div>
          <div class="p-2">
            <math-jax latex="s"></math-jax>
          </div>
          <div class="p-2">
            <math-jax latex="m/s"></math-jax>
          </div>
          <div class="p-2">
            <math-jax latex="m/s"></math-jax>
          </div>
          <div class="p-2">
            <math-jax latex="m/s"></math-jax>
          </div>
        </div>
      </div>


      <div class="column is-mobile mt-0 pt-0">
        <h6 class="subtitle is-6 mt-0 pt-0">
          At  <math-jax :latex="'(' + m + ', ' + m_y + ')'"></math-jax>, the object's velocity is 
          <math-jax :latex="v + ' m/s'"></math-jax>
          <br/>
          Traveling time <math-jax :latex="t + ' s'"></math-jax>
          <br/>
          
        </h6>
      </div>

      <div class="column is-full mt-2">
        <h1 class="title is-4">Overall statistics</h1>
      </div>
      <div class="column is-mobile pt-0">
        <math-jax :latex="'t_{total} = ' + totalTime.toFixed(2) + ' s'"></math-jax><br/>
        <math-jax :latex="'H_{max} = ' + maxHeight.toFixed(2) + ' m'"></math-jax><br/>
        <math-jax :latex="'L_{max} = ' + maxLength.toFixed(2) + ' m'"></math-jax>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      g: 9.80665,
      v0: 25,
      alpha: 45,
      m: 0,
      calculator: null,
      helper: null
    }
  },
  computed: {
    maxLength() {
      return (this.v0 ** 2 * Math.sin(2 * this.toDegrees(this.alpha))) / this.g
    },
    maxHeight() {
      return (
        (this.v0 ** 2 * Math.sin(this.toDegrees(this.alpha)) ** 2) /
        (2 * this.g)
      )
    },
    totalTime() {
      return ((this.v0 * Math.sin(this.toDegrees(this.alpha))) / this.g)+Math.sqrt(2*this.maxHeight/this.g)
    },
    vy_ratio() {
      return 1 / 5
    },
    vx_ratio() {
      return 1 / 5
    },
    m_y() {
      return (
        (-this.g /
          (2 * this.v0 ** 2 * Math.cos(this.toDegrees(this.alpha)) ** 2)) *
          this.m ** 2 +
        this.m * Math.tan(this.toDegrees(this.alpha))
      ).toFixed(2)
    },
    v_x() {
      return (this.v0 * Math.cos(this.toDegrees(this.alpha))).toFixed(2)
    },
    v_y() {
      if (this.m > this.maxLength / 2) {
        return (-this.g * this.t).toFixed(2)
      }
      return (
        this.v0 * Math.sin(this.toDegrees(this.alpha)) -
        this.g * this.t
      ).toFixed(2)
    },
    v() {
      const sts = this.m > this.maxLength / 2 ? -1 : 1
      return (Math.sqrt(this.v_x ** 2 + this.v_y ** 2) * sts).toFixed(2)
    },
    t(){
      return (this.m / this.v_x).toFixed(2);
    },
  },
  watch:{
    g(){
      this.drawNewGraph('g')
    },
    v0(){
      this.drawNewGraph('v0')
    },
    alpha(){
      this.drawNewGraph('alpha')
    }
  },
  methods: {
    drawNewGraph(focusVar){
      this.calculator?.destroy()
      this.drawGraph(this.$refs.calc)
      this.$refs[focusVar].focus()
    },
    setExpressions(calc, arr) {
      arr.forEach((item) => {
        //item.secret = true
        calc.setExpression(item)
      })
    },
    toDegrees(angle) {
      return (angle * Math.PI) / 180
    },
    setObservers(helper) {

      helper.observe("numericValue", () => {
        this.calculator.setExpression({
          id: "d_vy",
          latex:
            `d_{vy} =` +
            (helper.numericValue <= this.maxLength / 2
              ? `${this.v0}*\\sin{${this.alpha}}`
              : ``) +
            `-${this.g} * m / (${this.v0}*\\cos{${this.alpha}})`,
        })
        this.m = helper.numericValue.toFixed(2)
      })
    },
    drawGraph(elt) {
      this.calculator = Desmos.GraphingCalculator(elt, {
        degreeMode: true,
        zoomButtons: false,
        settingsMenu: false,
        expressionsTopbar: false,
        expressionsCollapsed: true,
      })

      const f = (x) =>
        `(-${this.g}/ (2*${this.v0}^2*\\cos^2{${this.alpha}})) * ${x}^2 + ${x} * \\tan{${this.alpha}}`

      this.setExpressions(this.calculator, [
        {
          id: "m",
          latex: "m = 0",
          sliderBounds: {
            min: "0",
            max: this.maxLength.toString(),
          },
        },
        {
          id: "orbit",
          latex: `p=(t, ${f("t")})`,
          parametricDomain: {
            min: "0",
            max: this.maxLength.toString(),
          },
          color: "#2d70b3",
        },
        {
          id: "highestPoint",
          latex: `I = (${this.maxLength / 2}, ${this.maxHeight})`,
          showLabel: true,
          label: "I",
          dragMode: Desmos.DragModes.NONE,
          color: Desmos.Colors.RED,
          pointSize: 9,
        },
        {
          id: "m_y",
          latex: `m_y = ${f("m")}`,
        },
        {
          id: "movingObject",
          latex: `O = (m, m_y)`,
          showLabel: true,
          label: "O",
          pointSize: 9,
          dragMode: Desmos.DragModes.XY,
        },
        {
          id: "xOfVx",
          latex: `x_{vx} = (${this.v0}*\\cos{${this.alpha}}) * ${this.vx_ratio}`,
        },
        {
          id: "yOfVy",
          latex: `y_{vy} = d_{vy} * ${this.vy_ratio}`,
        },
        {
          id: "d_vy",
          latex: `d_{vy} = ${this.v0}*\\sin{${this.alpha}} - ${this.g} * m / (${this.v0}*\\cos{${this.alpha}})`,
        },
        {
          id: "v_x",
          latex: `(x_{vx} * t + m, m_y)`,
          color: "#d40622",
        },
        {
          id: "v_y",
          latex: `(m, y_{vy} * t + m_y)`,
          color: "#d40622",
        },
        {
          id: "totalV",
          latex: `(x_{vx} * t + m, y_{vy} * t + m_y)`,
          color: "#d40622",
        },
        {
          id: "pointVtotal",
          latex: `(x_{vx} + m, y_{vy} + m_y)`,
          color: "#d40622",
          dragMode: Desmos.DragModes.NONE,
        },
        {
          id: "dotLineVx",
          latex: `(m + x_{vx} * t, y_{vy} + m_y)`,
          color: "#000",
          lineStyle: Desmos.Styles.DASHED,
        },
        {
          id: "dotLineVy",
          latex: `(m + x_{vx}, y_{vy} * t + m_y)`,
          color: "#000",
          lineStyle: Desmos.Styles.DASHED,
        },
      ])

      this.centralizeViewport()

      const helper = this.calculator.HelperExpression({ latex: "m" })
      this.setObservers(helper)

      this.hideExpressionListButton()
      
    },
    hideExpressionListButton(){
      this.$el
        .querySelector("#app > div > div.column.is-three-quarters.p-0 > div > div > div > div > div.dcg-overgraph-icon-container > div > div")
        .style.display = 'none'
    },
    centralizeViewport(){
      const state = this.calculator.getState()
      state.graph.viewport.xmax = this.maxLength + Math.ceil(Math.log10(this.maxLength))**2
      state.graph.viewport.xmin = - 3 / 100 * state.graph.viewport.xmax
      
      this.calculator.setState(state)
    },
  },

  mounted() {
    const elt = this.$refs.calc

    this.drawGraph(elt)
  },
}
</script>
