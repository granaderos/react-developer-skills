
// $(document).ready({


//     $("#formDeveloper").validate({
//         rules: {
//             firstName: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 255
//             },
//             lastName: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 255
//             },
//             middleName: {
//                 required: false,
//                 maxlength: 255
//             },
//             birthDate: {
//                 required: true,
//             },
//             position: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 255
//             }
//         },
//         messages: {
//             firstName: {
//                 required: "Please provide a first name.",
//                 minlength: "First name must be at least 2 characters long.",
//                 maxlength: "First name  must be at most 255 characters long."
//             },
//             lastName: {
//                 required: "Please provide a last name.",
//                 minlength: "Last name must be at least 2 characters long.",
//                 maxlength: "Last name  must be at most 255 characters long."
//             },
//             middleName: {
//                 required: "Please provide a password",
//                 maxlength: "Middle name  must be at most 255 characters long."
//             },
//             birthDate: {
//                 required: "Please provide a birth date."
//             },
//             position: {
//                 required: "Please provide a position.",
//                 minlength: "Position must be at least 2 characters long.",
//                 maxlength: "Position  must be at most 255 characters long."
//             }
//         }
//     });

//     $("#formSkill").validate({
//         rules: {
//             skill: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 255
//             },
//         },
//         messages: {
//             skill: {
//                 required: "Please provide a skill.",
//                 minlength: "Skill must be at least 2 characters long.",
//                 maxlength: "Skill  must be at most 255 characters long."
//             }
//         }
//     });

//     $("#formSkillAssessment").validate({
//         rules: {
//             saDeveloper: {
//                 required: true
//             },
//             saSkill: {
//                 required: true
//             },
//             saSkillLevel: {
//                 required: true
//             },
//             saMonthsOfExperience: {
//                 required: true,
//                 digits: true
//             }
//         },
//         messages: {
//             saDeveloper: {
//                 required: "Please select a developer."
//             },
//             saSkill: {
//                 required: "Please select a skill."
//             },
//             saSkillLevel: {
//                 required: "Please select a skill level."
//             },
//             saMonthsOfExperience: {
//                 required: "Please provide months of experience.",
//                 digits: "Please provide a valid months of experience."
//             }
//         }
//     });
// })