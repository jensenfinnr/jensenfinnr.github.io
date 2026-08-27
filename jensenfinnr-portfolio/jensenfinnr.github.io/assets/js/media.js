/* ==========================================================================
   IMAGE MANIFEST — the only file you edit to add, remove, or reorder photos.

   How it works
   ------------
   1. Drop a photo into the matching folder, e.g.
        assets/images/corvette-1954/my-new-photo.jpg
   2. Add a line to that project's list below:
        { file: "my-new-photo.jpg", caption: "What it shows" }
   3. Save, commit, push.

   The FIRST photo in each list is also the thumbnail on the home page.

   Options per photo
   -----------------
     file      required — filename only, no folder path
     caption   optional — one short line, printed under the photo
     wide      optional — true makes it span the full gallery width
     alt       optional — screen-reader text; falls back to the caption

   Filenames: lowercase, dashes instead of spaces, .jpg / .png / .webp.
   GitHub Pages is case-sensitive, and spaces break links.
   ========================================================================== */

window.PROJECT_MEDIA = {

  "corvette-1954": [
    { file: "electronics-panel-lit.jpg", wide: true,
      caption: "The finished panel in the car, LED strip lit around the recessed edge",
      alt: "Rear quarter panel of the Corvette open, LED strip glowing around its perimeter, electronics visible behind" },
    { file: "panel-cad.jpg",
      caption: "SolidWorks model — recessed channel sized for a 5 mm LED strip",
      alt: "CAD render of the sheet-metal panel annotated for LED strip illumination" },
    { file: "electronics-bay.jpg",
      caption: "Panel open, electronics and relay board behind it",
      alt: "Electronics bay of the Corvette with the access panel swung open" },
    { file: "panel-closed.jpg",
      caption: "Closed, sitting flush to the body",
      alt: "The access panel closed against the black body of the car" },
    { file: "hood-open.jpg",
      caption: "Front clip tilted forward on the chassis",
      alt: "1954 Corvette in the shop with the front clip hinged open" },
    { file: "interior.jpg",
      caption: "Finished interior",
      alt: "Tan leather interior of the finished 1954 Corvette restomod" },
    { file: "soft-close-trunk.jpg",
      caption: "Custom soft-close trunk",
      alt: "Open trunk of the Corvette showing carpeted compartment" },
    { file: "hidden-gas-cap.jpg",
      caption: "Hidden fuel filler behind the tail lamp",
      alt: "Tail lamp of the Corvette hinged aside to reveal the concealed fuel filler" },
  ],

  "airfolio": [
    { file: "in-hand.jpg", wide: true,
      caption: "Held in one hand — watch running the music, AirPods docked below",
      alt: "Airfolio held in a hand, Apple Watch screen showing a music player, AirPods seated in the base" },
    { file: "airpods-docked.jpg",
      caption: "Watch in the top, AirPods in the base",
      alt: "Airfolio with AirPods docked in the lower bay" },
    { file: "product-shot.jpg",
      caption: "The part on its own",
      alt: "Airfolio housing with an Apple Watch installed" },
    { file: "airpods-out.jpg",
      caption: "AirPods out, ready to go back in",
      alt: "Airfolio beside a pair of loose AirPods" },
    { file: "patent-figures.jpg",
      caption: "Figures from the provisional patent filing",
      alt: "Line drawings of the Airfolio from multiple views, as filed" },
  ],

  "bmw-f10-lighting": [
    { file: "interior-lit.jpg", wide: true,
      caption: "Interior at night, color and brightness set from the dash switch",
      alt: "BMW F10 interior lit in blue along the dash, doors, and footwells" },
    { file: "mounting-clip-cad.jpg",
      caption: "SolidWorks model of the clip that clamps the light tube and snaps into the trim",
      alt: "CAD model of a printed clamp-style mounting clip" },
    { file: "strip-bench-test.jpg",
      caption: "Bench test before anything went in the car",
      alt: "Light tube glowing blue during a bench test alongside the driver module" },
    { file: "fuse-box-1.jpg",
      caption: "Tapping in behind the dash",
      alt: "Fuse and relay panel behind the dash with the harness exposed" },
    { file: "fuse-box-2.jpg",
      caption: "Harness routed behind the trim",
      alt: "Wiring harness and connectors behind the dash trim" },
  ],

  "c4-corvette": [
    { file: "engine-optispark.jpg", wide: true,
      caption: "Front of the engine opened up to reach the Optispark",
      alt: "Engine bay of a 1990 Corvette partly disassembled at the front of the engine" },
  ],

  "design-studies": [
    { file: "wire-model-on-drawing.jpg", wide: true,
      caption: "Wire model built to the drawing, checked back against it",
      alt: "Soldered wire car model sitting on top of the orthographic drawing it was built from" },
    { file: "orthographic-views.jpg",
      caption: "Side, plan, and front views drawn freehand",
      alt: "Sketchbook page with multiple orthographic views of a car" },
    { file: "wire-model-front.jpg",
      caption: "Front three-quarter, where the compromises show",
      alt: "Front three-quarter view of the soldered wire car model" },
  ],

};
