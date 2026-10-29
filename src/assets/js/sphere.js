    const Skills = [
        'HTML5', 'CSS3', 'JavaScript',
        'React JS', 'Java',
        'Python', 'SASS', 'SQL',
        'Django', 'Node JS', 'Redux', 'Mongo DB', 'Git',  ,
        'Express JS', 'GSAP' , 'MYSQL', 'Bootstrap', 'npm' , 'Tailwind CSS', 'Github', 'SCSS', 'Versioning', 'NoSQL', 'Java', 'C++'
    ];

    var tagCloud = TagCloud('.Sphere', Skills, {

        // Sphere radius in px
        // radius: 227,
        radius: window.innerWidth < 950 ? 200 : 260,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'fast',

        // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
        direction: 135,

        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
        keep:window.innerWidth < 700 ? false : true

    });


    // console.log('width here: ', window.innerWidth)
    // console.log('height here: ', window.innerHeight)
    // Giving color to each text in sphere
    // var color = 'rgb(17, 238, 238)';
    // let color = '#88f7b6';
     let color = '#55e076';
    // let color = '#efe6dd';
    document.querySelector('.Sphere').style.color = color;