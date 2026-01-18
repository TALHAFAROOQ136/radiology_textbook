// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Part 1: Foundations',
      items: [
        'part-1-foundations/chapter-01-introduction'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 1: Foundations',
        description: 'Learn the fundamental principles of radiology including physics, safety, and image quality.',
        slug: '/part-1-foundations'
      }
    },
    {
      type: 'category',
      label: 'Part 2: Positioning and Technique',
      items: [
        'part-2-positioning/chapter-01-positioning-principles'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 2: Positioning and Technique',
        description: 'Master proper patient positioning and imaging techniques.',
        slug: '/part-2-positioning'
      }
    },
    {
      type: 'category',
      label: 'Part 3: Chest Radiology',
      items: [
        'part-3-chest/chapter-01-chest-anatomy'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 3: Chest Radiology',
        description: 'Understand chest imaging techniques and interpret common pathologies.',
        slug: '/part-3-chest'
      }
    },
    {
      type: 'category',
      label: 'Part 4: Abdomen and GI Radiology',
      items: [
        'part-4-abdomen/chapter-01-abdominal-anatomy'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 4: Abdomen and GI Radiology',
        description: 'Learn abdominal imaging techniques and interpret gastrointestinal pathologies.',
        slug: '/part-4-abdomen'
      }
    },
    {
      type: 'category',
      label: 'Part 5: Musculoskeletal Radiology',
      items: [
        'part-5-msk/chapter-01-msk-anatomy'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 5: Musculoskeletal Radiology',
        description: 'Study musculoskeletal imaging and interpretation of bone and joint pathology.',
        slug: '/part-5-msk'
      }
    },
    {
      type: 'category',
      label: 'Part 6: Neuroradiology',
      items: [
        'part-6-neuro/chapter-01-neuro-anatomy'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 6: Neuroradiology',
        description: 'Explore neurological imaging techniques and interpretation of brain and spine pathologies.',
        slug: '/part-6-neuro'
      }
    },
    {
      type: 'category',
      label: 'Part 7: Specialized Radiology',
      items: [
        'part-7-specialized/chapter-01-specialized-procedures'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 7: Specialized Radiology',
        description: 'Advanced topics in specialized radiology disciplines.',
        slug: '/part-7-specialized'
      }
    }
  ],
};

export default sidebars;