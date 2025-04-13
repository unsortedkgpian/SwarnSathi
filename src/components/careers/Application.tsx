"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./JobApplicationForm.css";

interface FormData {
    personalInfo: {
        fullName: string;
        dob: string;
        email: string;
        phone: string;
        currentAddress: string;
        permanentAddress: string;
    };
    positionDetails: {
        positionApplied: string;
        expectedSalary: string;
        availableJoiningDate: string;
        preferredLocation: string;
        willingToRelocate: boolean;
    };
    educationalBackground: {
        qualification: string;
        institution: string;
        yearPassing: string;
        percentage: string;
    }[];
    workExperience: {
        organization: string;
        jobTitle: string;
        duration: { from: string; to: string };
        responsibilities: string[];
        reasonLeaving: string;
    }[];
    skills: string[];
    references: { name: string; contact: string; relation: string }[];
    declaration: { signature: string; date: string };
    resume: File | null;
}

interface JobApplicationFormProps {
    defaultPosition?: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ defaultPosition = '' }) => {
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const initialFormData: FormData = {
        personalInfo: {
            fullName: "",
            dob: "",
            email: "",
            phone: "",
            currentAddress: "",
            permanentAddress: "",
        },
        positionDetails: {
            positionApplied: defaultPosition,
            expectedSalary: "",
            availableJoiningDate: "",
            preferredLocation: "",
            willingToRelocate: false,
        },
        educationalBackground: [
            {
                qualification: "",
                institution: "",
                yearPassing: "",
                percentage: "",
            },
        ],
        workExperience: [
            {
                organization: "",
                jobTitle: "",
                duration: { from: "", to: "" },
                responsibilities: [""],
                reasonLeaving: "",
            },
        ],
        skills: [""],
        references: [{ name: "", contact: "", relation: "" }],
        declaration: { signature: "", date: "" },
        resume: null,
    };

    const steps: (keyof FormData)[] = [
        "personalInfo",
        "positionDetails",
        "educationalBackground",
        "workExperience",
        "skills",
        "resume",
    ];

    const stepTitles = {
        personalInfo: "Personal Information",
        positionDetails: "Position Details",
        educationalBackground: "Educational Background",
        workExperience: "Work Experience",
        skills: "Skills & Expertise",
        resume: "Resume Upload",
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>(
        {}
    );

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
        section: keyof FormData,
        index?: number,
        subField?: string
    ) => {
        const { name, value, type } = e.target;
        setFieldErrors({}); // Clear errors on change

        if (type === "file") {
            const file = (e.target as HTMLInputElement).files?.[0];
            setFormData((prev) => ({ ...prev, resume: file || null }));
            return;
        }

        if (index !== undefined && Array.isArray(formData[section])) {
            const updatedArray = [...(formData[section] as any[])];

            if (subField) {
                const fieldParts = subField.split(".");
                const updatedItem = { ...updatedArray[index] };
                let current: any = updatedItem;

                for (let i = 0; i < fieldParts.length - 1; i++) {
                    const part = fieldParts[i];
                    current[part] = current[part] ? { ...current[part] } : {};
                    current = current[part];
                }

                current[fieldParts[fieldParts.length - 1]] =
                    type === "checkbox"
                        ? (e.target as HTMLInputElement).checked
                        : value;

                updatedArray[index] = updatedItem;
            } else {
                updatedArray[index] = {
                    ...updatedArray[index],
                    [name]:
                        type === "checkbox"
                            ? (e.target as HTMLInputElement).checked
                            : value,
                };
            }

            setFormData((prev) => ({ ...prev, [section]: updatedArray }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [name]:
                        type === "checkbox"
                            ? (e.target as HTMLInputElement).checked
                            : value,
                },
            }));
        }
    };

    const addArrayField = (section: keyof FormData) => {
        const newEntry = {
            educationalBackground: {
                qualification: "",
                institution: "",
                yearPassing: "",
                percentage: "",
            },
            workExperience: {
                organization: "",
                jobTitle: "",
                duration: { from: "", to: "" },
                responsibilities: [""],
                reasonLeaving: "",
            },
            skills: "",
            references: { name: "", contact: "", relation: "" },
        }[section];

        setFormData((prev) => ({
            ...prev,
            [section]: [...(prev[section] as any[]), newEntry],
        }));
    };

    const removeArrayField = (section: keyof FormData, index: number) => {
        setFormData((prev) => ({
            ...prev,
            [section]: (prev[section] as any[]).filter((_, i) => i !== index),
        }));
    };

    const validateSection = (section: keyof FormData): boolean => {
        const errors: { [key: string]: string } = {};

        switch (section) {
            case "personalInfo":
                if (!formData.personalInfo.fullName.trim())
                    errors.fullName = "Full Name is required";
                if (!formData.personalInfo.dob)
                    errors.dob = "Date of Birth is required";
                if (!/^\S+@\S+\.\S+$/.test(formData.personalInfo.email))
                    errors.email = "Valid email is required";
                if (!/^\d{10}$/.test(formData.personalInfo.phone))
                    errors.phone = "Valid phone number is required";
                if (!formData.personalInfo.currentAddress.trim())
                    errors.currentAddress = "Current Address is required";
                if (!formData.personalInfo.permanentAddress.trim())
                    errors.permanentAddress = "Permanent Address is required";
                break;

            case "positionDetails":
                if (!formData.positionDetails.positionApplied)
                    errors.positionApplied = "Position Applied is required";
                if (!formData.positionDetails.expectedSalary.trim())
                    errors.expectedSalary = "Expected Salary is required";
                if (isNaN(Number(formData.positionDetails.expectedSalary)))
                    errors.expectedSalary = "Must be a number";
                if (!formData.positionDetails.availableJoiningDate)
                    errors.availableJoiningDate = "Joining Date is required";
                if (
                    new Date(formData.positionDetails.availableJoiningDate) <
                    new Date()
                )
                    errors.availableJoiningDate = "Must be in the future";
                if (!formData.positionDetails.preferredLocation.trim())
                    errors.preferredLocation = "Preferred Location is required";
                break;

            case "educationalBackground":
                formData.educationalBackground.forEach((edu, index) => {
                    if (!edu.qualification.trim())
                        errors[`edu-qualification-${index}`] =
                            "Qualification required";
                    if (!edu.institution.trim())
                        errors[`edu-institution-${index}`] =
                            "Institution required";
                    if (!/^\d{4}$/.test(edu.yearPassing))
                        errors[`edu-year-${index}`] = "Valid year (YYYY)";
                    if (!/^\d{1,3}(\.\d{1,2})?$/.test(edu.percentage))
                        errors[`edu-percent-${index}`] = "Invalid percentage";
                    if (parseFloat(edu.percentage) > 100)
                        errors[`edu-percent-${index}`] = "Cannot exceed 100%";
                });
                break;

            case "workExperience":
                formData.workExperience.forEach((exp, index) => {
                    if (!exp.organization.trim())
                        errors[`exp-org-${index}`] = "Organization required";
                    if (!exp.jobTitle.trim())
                        errors[`exp-title-${index}`] = "Job title required";
                    if (!exp.duration.from)
                        errors[`exp-from-${index}`] = "Start date required";
                    if (!exp.duration.to)
                        errors[`exp-to-${index}`] = "End date required";
                    if (new Date(exp.duration.from) > new Date(exp.duration.to))
                        errors[`exp-dates-${index}`] =
                            "End date must be after start";
                    if (exp.responsibilities.some((r) => !r.trim()))
                        errors[`exp-resp-${index}`] =
                            "Responsibilities required";
                    if (!exp.reasonLeaving.trim())
                        errors[`exp-reason-${index}`] = "Reason required";
                });
                break;

            case "skills":
                if (formData.skills.length === 0)
                    errors.skills = "At least one skill required";
                formData.skills.forEach((skill, index) => {
                    if (!skill.trim())
                        errors[`skill-${index}`] = "Skill cannot be empty";
                });
                break;

            case "resume":
                if (!formData.resume) errors.resume = "Resume required";
                else {
                    if (formData.resume.size > 10 * 1024 * 1024)
                        errors.resume = "File too large (max 10MB)";
                    if (
                        ![
                            "application/pdf",
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ].includes(formData.resume.type)
                    )
                        errors.resume = "Invalid file type (PDF/DOC/DOCX only)";
                }
                break;
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent form submission
        const currentSection = steps[currentStep];
        const isValid = validateSection(currentSection);
        if (!isValid) return;
        setError(null);
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const allSectionsValid = steps.every((step) => validateSection(step));
        if (!allSectionsValid) {
            setError("Please complete all required fields");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const formPayload = new FormData();
            if (formData.resume) {
                // Append the resume file with its original name
                formPayload.append("resume", formData.resume, formData.resume.name);
            } else {
                setError("Resume is required");
                setLoading(false);
                return;
            }

            // Create a copy of form data without the resume file
            const dataToSend = { ...formData };
            delete dataToSend.resume; // Remove the resume file from JSON data
            
            // Append the rest of the form data as a JSON string
            formPayload.append("data", JSON.stringify(dataToSend));

            const response = await axios.post(
                `${apiUrl}/api/application`,
                formPayload,
                {
                    headers: { 
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            if (response.status === 201) {
                setSuccess("Application submitted successfully!");
                setFormData(initialFormData);
                router.push("/");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            const errorMessage = err.response?.data?.message || err.response?.data?.error || "Submission failed. Please try again.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const formatLabel = (key: string): string => {
        const formatted = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());
        const requiredFields = [
            "fullName",
            "dob",
            "email",
            "phone",
            "positionApplied",
            "expectedSalary",
            "availableJoiningDate",
        ];
        return requiredFields.includes(key) ? `${formatted} *` : formatted;
    };

    const renderSection = () => {
        const section = steps[currentStep];

        switch (section) {
            case "personalInfo":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        <div className="input-grid">
                            {Object.entries(formData.personalInfo).map(
                                ([key, value]) => (
                                    <div className="form-group" key={key}>
                                        <label htmlFor={`personal-${key}`}>
                                            {formatLabel(key)}
                                        </label>
                                        <input
                                            id={`personal-${key}`}
                                            type={
                                                key === "dob" ? "date" : "text"
                                            }
                                            name={key}
                                            value={value}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "personalInfo"
                                                )
                                            }
                                            required
                                            max={
                                                key === "dob"
                                                    ? new Date()
                                                          .toISOString()
                                                          .split("T")[0]
                                                    : undefined
                                            }
                                        />
                                        {fieldErrors[key] && (
                                            <div className="field-error">
                                                {fieldErrors[key]}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                );

            case "positionDetails":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        <div className="input-grid">
                            {Object.entries(formData.positionDetails).map(
                                ([key, value]) => {
                                    if (typeof value === "boolean") {
                                        return (
                                            <div
                                                className="form-group"
                                                key={key}
                                            >
                                                <div className="checkbox-group">
                                                    <input
                                                        id={`position-${key}`}
                                                        type="checkbox"
                                                        name={key}
                                                        checked={value}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                e,
                                                                "positionDetails"
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`position-${key}`}
                                                    >
                                                        {formatLabel(key)}
                                                    </label>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div className="form-group" key={key}>
                                            <label htmlFor={`position-${key}`}>
                                                {formatLabel(key)}
                                            </label>
                                            <input
                                                id={`position-${key}`}
                                                type={
                                                    key ===
                                                    "availableJoiningDate"
                                                        ? "date"
                                                        : "text"
                                                }
                                                name={key}
                                                value={value}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        "positionDetails"
                                                    )
                                                }
                                                required
                                                readOnly={key === "positionApplied"}
                                                disabled={key === "positionApplied"}
                                                style={key === "positionApplied" ? {
                                                    backgroundColor: "#f5f5f5",
                                                    cursor: "not-allowed"
                                                } : undefined}
                                                min={
                                                    key ===
                                                    "availableJoiningDate"
                                                        ? new Date()
                                                              .toISOString()
                                                              .split("T")[0]
                                                        : undefined
                                                }
                                            />
                                            {fieldErrors[key] && (
                                                <div className="field-error">
                                                    {fieldErrors[key]}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                );

            case "educationalBackground":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        {formData.educationalBackground.map((edu, index) => (
                            <div key={index} className="array-item">
                                <div className="array-item-header">
                                    <h4>Education #{index + 1}</h4>
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="remove-btn"
                                            onClick={() =>
                                                removeArrayField(
                                                    "educationalBackground",
                                                    index
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="input-grid">
                                    {Object.entries(edu).map(([key, value]) => (
                                        <div className="form-group" key={key}>
                                            <label
                                                htmlFor={`edu-${key}-${index}`}
                                            >
                                                {formatLabel(key)}
                                            </label>
                                            <input
                                                id={`edu-${key}-${index}`}
                                                type={
                                                    key === "yearPassing"
                                                        ? "number"
                                                        : "text"
                                                }
                                                name={key}
                                                value={value}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        "educationalBackground",
                                                        index
                                                    )
                                                }
                                                min={
                                                    key === "yearPassing"
                                                        ? 1900
                                                        : undefined
                                                }
                                                max={
                                                    key === "yearPassing"
                                                        ? new Date().getFullYear()
                                                        : undefined
                                                }
                                                step={
                                                    key === "percentage"
                                                        ? "0.01"
                                                        : undefined
                                                }
                                            />
                                            {fieldErrors[
                                                `edu-${key}-${index}`
                                            ] && (
                                                <div className="field-error">
                                                    {
                                                        fieldErrors[
                                                            `edu-${key}-${index}`
                                                        ]
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="add-btn"
                            onClick={() =>
                                addArrayField("educationalBackground")
                            }
                        >
                            Add Education
                        </button>
                    </div>
                );

            case "workExperience":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        {formData.workExperience.map((exp, index) => (
                            <div key={index} className="array-item">
                                <div className="array-item-header">
                                    <h4>Experience #{index + 1}</h4>
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="remove-btn"
                                            onClick={() =>
                                                removeArrayField(
                                                    "workExperience",
                                                    index
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="input-grid">
                                    <div className="form-group">
                                        <label>Organization</label>
                                        <input
                                            value={exp.organization}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "workExperience",
                                                    index,
                                                    "organization"
                                                )
                                            }
                                        />
                                        {fieldErrors[`exp-org-${index}`] && (
                                            <div className="field-error">
                                                {
                                                    fieldErrors[
                                                        `exp-org-${index}`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input
                                            value={exp.jobTitle}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "workExperience",
                                                    index,
                                                    "jobTitle"
                                                )
                                            }
                                        />
                                        {fieldErrors[`exp-title-${index}`] && (
                                            <div className="field-error">
                                                {
                                                    fieldErrors[
                                                        `exp-title-${index}`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>From Date</label>
                                        <input
                                            type="date"
                                            value={exp.duration.from}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "workExperience",
                                                    index,
                                                    "duration.from"
                                                )
                                            }
                                            max={
                                                exp.duration.to ||
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                        />
                                        {fieldErrors[`exp-from-${index}`] && (
                                            <div className="field-error">
                                                {
                                                    fieldErrors[
                                                        `exp-from-${index}`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>To Date</label>
                                        <input
                                            type="date"
                                            value={exp.duration.to}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "workExperience",
                                                    index,
                                                    "duration.to"
                                                )
                                            }
                                            min={exp.duration.from || ""}
                                            max={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                        />
                                        {fieldErrors[`exp-to-${index}`] && (
                                            <div className="field-error">
                                                {fieldErrors[`exp-to-${index}`]}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Responsibilities</label>
                                        <textarea
                                            value={exp.responsibilities.join(
                                                "\n"
                                            )}
                                            onChange={(e) => {
                                                const updated = [
                                                    ...formData.workExperience,
                                                ];
                                                updated[
                                                    index
                                                ].responsibilities =
                                                    e.target.value.split("\n");
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    workExperience: updated,
                                                }));
                                            }}
                                            rows={3}
                                        />
                                        {fieldErrors[`exp-resp-${index}`] && (
                                            <div className="field-error">
                                                {
                                                    fieldErrors[
                                                        `exp-resp-${index}`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Reason for Leaving</label>
                                        <input
                                            value={exp.reasonLeaving}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    "workExperience",
                                                    index,
                                                    "reasonLeaving"
                                                )
                                            }
                                        />
                                        {fieldErrors[`exp-reason-${index}`] && (
                                            <div className="field-error">
                                                {
                                                    fieldErrors[
                                                        `exp-reason-${index}`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="add-btn"
                            onClick={() => addArrayField("workExperience")}
                        >
                            Add Experience
                        </button>
                    </div>
                );

            case "skills":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        <div className="skills-container">
                            {formData.skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={(e) => {
                                            const updated = [
                                                ...formData.skills,
                                            ];
                                            updated[index] = e.target.value;
                                            setFormData((prev) => ({
                                                ...prev,
                                                skills: updated,
                                            }));
                                        }}
                                        placeholder="Enter skill"
                                    />
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="remove-skill-btn"
                                            onClick={() =>
                                                removeArrayField(
                                                    "skills",
                                                    index
                                                )
                                            }
                                        >
                                            ✕
                                        </button>
                                    )}
                                    {fieldErrors[`skill-${index}`] && (
                                        <div className="field-error">
                                            {fieldErrors[`skill-${index}`]}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {fieldErrors.skills && (
                            <div className="field-error">
                                {fieldErrors.skills}
                            </div>
                        )}
                        <button
                            type="button"
                            className="add-btn"
                            onClick={() => addArrayField("skills")}
                        >
                            Add Skill
                        </button>
                    </div>
                );

            case "resume":
                return (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>{stepTitles[section]}</h3>
                        </div>
                        <div className="file-upload-container">
                            <input
                                type="file"
                                id="resume-upload"
                                onChange={(e) => handleInputChange(e, "resume")}
                                accept=".pdf,.doc,.docx"
                            />
                            <label
                                htmlFor="resume-upload"
                                className="file-upload-label"
                            >
                                {formData.resume
                                    ? formData.resume.name
                                    : "Choose Resume File"}
                            </label>
                            {fieldErrors.resume && (
                                <div className="field-error">
                                    {fieldErrors.resume}
                                </div>
                            )}
                            {formData.resume && (
                                <div className="file-details">
                                    Selected: {formData.resume.name} -
                                    {(formData.resume.size / 1024).toFixed(1)}{" "}
                                    KB
                                </div>
                            )}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <div className="form-header">
                    <h2>Job Application Form for {defaultPosition}</h2>
                    <div className="step-indicator">
                        Step {currentStep + 1} of {steps.length}:{" "}
                        {stepTitles[steps[currentStep]]}
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${
                                    ((currentStep + 1) / steps.length) * 100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={handleSubmit} noValidate>
                    {renderSection()}

                    <div className="form-navigation">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="nav-btn prev-btn"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="nav-btn next-btn"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={loading}
                                className="nav-btn submit-btn"
                            >
                                {loading ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationForm;