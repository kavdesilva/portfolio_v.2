export default (req, res) => {
    const projectsArray = [
        {
            title: 'Moonsweepr',
            url: 'http://moonsweepr.surge.sh/',
            github_url: 'https://github.com/kavdesilva/moonsweepr',
            img_src: '#',
            img_alt: '',
            description: 'A space-themed minesweeper game.',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: `Author Website Template`,
            url: '#',
            github_url: 'https://github.com/kavdesilva/author_website',
            img_src: '#',
            img_alt: '',
            description: `An interactive website for an author's collection of works.`,
            tags: ['React', 'MongoDB', 'Express', 'Node']
        },
        {
            title: 'CycleList',
            url: 'https://mighty-scrubland-76268.herokuapp.com/',
            github_url: 'https://github.com/frank-booth/CycleList_Frontend',
            github_url_2: 'https://github.com/frank-booth/CycleList_Backend',
            img_src: '#',
            img_alt: '',
            description: 'A collaborative effort by a team of three developers, CycleList is a web application for creating cycle routines to your favorite tunes.',
            tags: ['React', 'SQL', 'PostgreSQL', 'Express', 'Node']
        },
        {
            title: 'Hekate',
            url: '#',
            github_url: 'https://github.com/kavdesilva/Hekate',
            img_src: '#',
            img_alt: '',
            description: 'A period tracking app focused on gender-neutrality and data security.',
            tags: ['Vue', 'Pinia', 'SQL', 'PostgreSQL', 'Express', 'Node']
        }
    ];
    res.status(200).json(projectsArray);
  };
  