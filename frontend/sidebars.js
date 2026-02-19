// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Part 1: Foundation of Medical Imaging',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Introduction to Radiology',
          items: [
            'part-1-foundations/chapter-01-introduction/History and evolution of medical imaging',
            'part-1-foundations/chapter-01-introduction/Role of radiology in modern medicine',
            {
              type: 'category',
              label: 'Career Pathways in Radiology',
              items: [
                'part-1-foundations/chapter-01-introduction/Radiologist career pathway',
                'part-1-foundations/chapter-01-introduction/Technician career pathway'
              ]
            },
            'part-1-foundations/chapter-01-introduction/Overview of the textbook structure'
          ]
        },
        {
          type: 'category',
          label: 'Chapter 2: Physics of Medical Imaging',
          items: [
            'part-1-foundations/chapter-02-physics-of-medical-imaging/basic-principles-of-x-ray-production',
            'part-1-foundations/chapter-02-physics-of-medical-imaging/image-forming-process',
            'part-1-foundations/chapter-02-physics-of-medical-imaging/image-quality',
            {
              type: 'category',
              label: 'Physics of CT Scanning',
              items: [
                'part-1-foundations/chapter-02-physics-of-medical-imaging/Physics of CT scanning'
              ]
            },
            {
              type: 'category',
              label: 'MRI Physics and Signal Generation',
              items: [
                'part-1-foundations/chapter-02-physics-of-medical-imaging/MRI physics and signal generation'
              ]
            },
            {
              type: 'category',
              label: 'Ultrasound Physics and Doppler Principles',
              items: [
                'part-1-foundations/chapter-02-physics-of-medical-imaging/Ultrasound physics and Doppler principles'
              ]
            },
            {
              type: 'category',
              label: 'Nuclear Medicine Basics (PET, SPECT)',
              items: [
                'part-1-foundations/chapter-02-physics-of-medical-imaging/Nuclear medicine basics (PET, SPECT)'
              ]
            }
          ]
        },
        'part-1-foundations/chapter-03-radiation-safety',
        'part-1-foundations/chapter-04-contrast-agents',
        'part-1-foundations/chapter-05-appropriateness-criteria'
      ],
      link: {
        type: 'generated-index',
        title: 'Part 1: Foundation of Medical Imaging',
        description: 'Learn the fundamental principles of radiology including physics, safety, and image quality.',
        slug: '/part-1-foundations'
      }
    },
    {
      type: 'category',
      label: 'Part 2: Patient Positioning and Radiographic Techniques',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Fundamentals of Patient Positioning',
          items: [
            'part-2-positioning/chapter-01-anatomical-terminology-and-planes',
            'part-2-positioning/anatomical-terminology-and-planes'
          ]
        },
        'part-2-positioning/chapter-02-chest-radiography-positioning',
        'part-2-positioning/chapter-03-abdominal-pelvic-positioning',
        'part-2-positioning/chapter-04-upper-extremity-positioning',
        'part-2-positioning/chapter-05-lower-extremity-positioning',
        'part-2-positioning/chapter-06-spine-positioning',
        'part-2-positioning/chapter-07-trauma-mobile-radiography',
        'part-2-positioning/chapter-08-pediatric-geriatric-positioning'
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
        'part-3-chest/chapter-01-chest-anatomy',
        'part-3-chest/Chapter-02-chest-physiology',
        'part-3-chest/Chapter-15-approach-to-reading-chest-x-rays',
        'part-3-chest/chapter-03-pulmonary-consolidation',
        'part-3-chest/chapter-04-interstitial-lung-disease',
        'part-3-chest/chapter-05-pleural-diseases',
        'part-3-chest/chapter-06-mediastinal-hilar',
        'part-3-chest/chapter-07-cardiac-imaging',
        'part-3-chest/chapter-08-pulmonary-nodules',
        'part-3-chest/chapter-09-chest-ct',
        {
          type: 'category',
          label: 'Pathology Cases',
          items: [
            'part-3-chest/pathology/Pulmonary-Consolidation-and-Airspace-Disease',
            'part-3-chest/pathology/Pneumothorax',
            'part-3-chest/pathology/Pleural-Effusion',
            'part-3-chest/pathology/Lung-Nodules-and-Masses'
          ]
        }
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
        'part-4-abdomen/chapter-01-abdominal-anatomy',
        'part-4-abdomen/chapter-02-abdominal-radiograph-interpretation',
        'part-4-abdomen/chapter-03-gi-contrast-studies',
        'part-4-abdomen/chapter-04-ct-abdomen-pelvis',
        'part-4-abdomen/chapter-05-liver-biliary',
        'part-4-abdomen/chapter-06-gi-pathology',
        'part-4-abdomen/chapter-07-genitourinary-imaging',
        'part-4-abdomen/chapter-08-pelvic-imaging',
        'part-4-abdomen/chapter-09-trauma-abdomen-pelvis',
        {
          type: 'category',
          label: 'Pathology Cases',
          items: [
            'part-4-abdomen/pathology/Appendicitis',
            'part-4-abdomen/pathology/Bowel-Obstruction',
            'part-4-abdomen/pathology/Liver-Masses'
          ]
        }
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
        'part-5-msk/chapter-01-msk-anatomy',
        'part-5-msk/chapter-02-skeletal-trauma-approach',
        'part-5-msk/chapter-03-upper-extremity-fractures',
        'part-5-msk/chapter-04-lower-extremity-fractures',
        'part-5-msk/chapter-05-spine-fractures',
        'part-5-msk/chapter-06-pediatric-fractures',
        'part-5-msk/chapter-07-joint-disorders',
        'part-5-msk/chapter-08-soft-tissue-sports-injuries',
        'part-5-msk/chapter-09-bone-tumors-infections'
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
        'part-6-neuro/chapter-01-neuro-anatomy',
        'part-6-neuro/chapter-02-head-trauma',
        'part-6-neuro/chapter-03-stroke-imaging',
        'part-6-neuro/chapter-04-intracranial-hemorrhage',
        'part-6-neuro/chapter-05-brain-tumors',
        'part-6-neuro/chapter-06-mri-brain-sequences',
        'part-6-neuro/chapter-07-spine-imaging',
        'part-6-neuro/chapter-08-spinal-cord-pathology',
        'part-6-neuro/chapter-09-cns-infections'
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
        'part-7-specialized/chapter-01-specialized-procedures',
        'part-7-specialized/chapter-02-pediatric-radiology',
        'part-7-specialized/chapter-03-emergency-radiology',
        'part-7-specialized/chapter-04-interventional-radiology',
        'part-7-specialized/chapter-05-nuclear-medicine',
        'part-7-specialized/chapter-06-breast-imaging',
        'part-7-specialized/chapter-07-communication-radiology',
        'part-7-specialized/chapter-08-ai-future-radiology',
        'part-7-specialized/chapter-09-clinical-correlation'
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
