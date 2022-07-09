    const sidebar = document.querySelector(".sidebar")
      const menu = document.querySelector("#toggle")

      menu.addEventListener("click", () => {
        sidebar.classList.toggle('active');

        if(openSideBar){
        
        menu.checked = true;
        sidebarSubSections.forEach(subsection => {
            subsection.classList.remove('active')
        })
        openSideBar = false;
        }
        console.log(menu.checked)
      })    

      let openSideBar = false;

      const sidebarMain = document.querySelector("#sidebar")
      const sidebarSections = [...document.querySelectorAll('[data-sidebar')]
      console.log(sidebarSections)

      const sidebarSubSections = [...document.querySelectorAll('[data-subsidebar')]
      console.log(sidebarSubSections)

      sidebarSections.forEach(section => {
          section.addEventListener("click", (e) => {
                e.preventDefault();
                openSideBar = true;

                console.log(openSideBar)

                let currentSubSidebar = sidebarSubSections.find(subsection => {
                    console.log(subsection.dataset.subsidebar)
                    console.log(e.target.dataset.sidebar)
                    return subsection.dataset.subsidebar == e.target.dataset.sidebar
                })
                sidebarMain.classList.remove('active')
                currentSubSidebar.classList.add("active")
          })
      })

    // const bruh = document.querySelector("#a")
    // const a1 = document.getElementById('a1')


     // a1.addEventListener("click", (e) => {
    // //     e.preventDefault();

    // //     console.log('here')
    // //     bruh.classList.toggle('tooltip-before');
    // //     bruh.classList.toggle('tooltip');

    // //   })  



      //go through each link and select all links

      //then add event listener to each link

        //event listener will toggle a class for every other link -> displays: none
      //event listener on click will toggle a class active -> displays: flex
      
      const navLinks = [...document.querySelectorAll('[data-linkNumber]')]
      console.log(navLinks)
      const tooltips = [...document.querySelectorAll('[data-tooltipNumber]')]
      console.log(navLinks)

      const arrows = [...document.querySelectorAll('[data-arrow]')]
      const arrowsBefore = [...document.querySelectorAll('[data-arrowbefore]')]
      const arrowsAfter = [...document.querySelectorAll('[data-arrowafter]')]

      console.log(arrows)
      console.log(arrowsBefore)
      console.log(arrowsAfter)



      navLinks.forEach(navLink => {
          
          navLink.addEventListener("click", (e) => {
            e.preventDefault();
            let link = e.target

            let x = link.dataset.linknumber;
            console.log(x)

            let currentToolTip = tooltips.find(tooltip => {
                console.log(tooltip.dataset.tooltipnumber)
                return x == tooltip.dataset.tooltipnumber
            })

            
            tooltips.forEach(tooltip => {

                //if same tooltip is clicked, dont remove anything -> let next code do its thing
                if(tooltip == currentToolTip) {
                    return 
                }
                //else reset it
                else{
                tooltip.classList.remove('tooltip')
                tooltip.classList.add('tooltip-before')
                }
            })
            //when clicked change the class
            currentToolTip.classList.toggle('tooltip-before')
            currentToolTip.classList.toggle('tooltip')

            //when clicked if arrow matches then don't change anything
            arrows.forEach(a => {
                if(a.dataset.arrow == x) {
                    return 
                }
                //else reset it
                else{
                    a.classList.remove('arrow-dropdown-hover')
                    a.classList.add('arrow-dropdown')
                }
            })

            arrowsBefore.forEach(a => {
                if(a.dataset.arrowbefore == x) {
                    return 
                }
                else{
                    a.classList.remove('arrow-dropdown-before-hover')
                    a.classList.add('arrow-dropdown-before')
                }
            })

            arrowsAfter.forEach(a => {
                if(a.dataset.arrowafter == x) {
                    return 
                }
                else{
                    a.classList.remove('arrow-dropdown-after-hover')
                    a.classList.add('arrow-dropdown-after')
                }
            })

            //change it when clicked

            arrows.forEach(a => {
                if(a.dataset.arrow == x){
                    a.classList.toggle('arrow-dropdown')
                    a.classList.toggle('arrow-dropdown-hover')
                } 
            })
            arrowsBefore.forEach(a => {
                if(a.dataset.arrowbefore == x){
                    a.classList.toggle('arrow-dropdown-before')
                    a.classList.toggle('arrow-dropdown-before-hover')
                } 
            })
            arrowsAfter.forEach(a => {
                if(a.dataset.arrowafter == x){
                    a.classList.toggle('arrow-dropdown-after')
                    a.classList.toggle('arrow-dropdown-after-hover')
                } 
            })
          })
      })

      