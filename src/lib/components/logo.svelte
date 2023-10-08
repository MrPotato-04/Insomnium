<script lang="ts">
    import { onMount } from "svelte";

    const stroke_linejoin = "round";
    const stroke_linecap = "square";

    export let height: string | number = 100;

    let hidden = true;

    onMount(() => {
      const logo = document.querySelector("svg.title#main") as SVGSVGElement;
      const paths = logo.querySelectorAll("path") as NodeListOf<SVGPathElement>;
      paths.forEach((path, index) => {
          
            path.style.strokeDasharray = path.getTotalLength() + " " + path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength() + "";
            setTimeout(() => {
                if (hidden) hidden = false;
                path.style.strokeDashoffset = "0";
            }, index * 50);
        });
    });

</script>

<svg
    class="title"
    id="main"
    viewBox="0 0 750 100"
    height="{height}"
    display="{hidden ? 'none' : 'block'}"
    xmlns="http://www.w3.org/2000/svg"
>
    <!-- Letter I -->
    <path
        d="M 5 0 L 5 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter N -->
    <path
        d="M 40 0 L 40 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 41 0 L 99 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 100 0 L 100 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter S -->
    <path
        d="M 135 0 L 135 50"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 136 5 L 194 5"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 195 55 L 195 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 135.5 52.5 L 195 52.5"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 136 95 L 194 95"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter O-->
    <path
        d="M 230 0 L 230 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 231 5 L 289 5"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 290 0 L 290 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 231 95 L 289 95"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter M -->
    <path
        d="M 325 0 L 325 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 326 0 L 364 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 403 0 L 365 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 404 0 L 404 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- letter N -->
    <path
        d="M 440 0 L 440 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 441 0 L 499 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 500 0 L 500 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter I -->
    <path
        d="M 535 0 L 535 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter U -->
    <path
        d="M 570 0 L 570 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 571 95 L 629 95"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 629 0 L 629 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <!-- Letter M -->
    <path
        d="M 665 0 L 665 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 666 0 L 704 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 744 0 L 706 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
    <path
        d="M 744 0 L 744 100"
        stroke="white"
        stroke-width="10"
        stroke-linejoin="{stroke_linejoin}"
        stroke-linecap="{stroke_linecap}"></path>
</svg>
