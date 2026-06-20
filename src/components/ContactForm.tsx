"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectTypes, budgetRanges } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  details?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Please describe your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-[#c9844c]/10 border border-[#c9844c]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-[#c9844c]" />
        </div>
        <h3 className="font-heading text-2xl mb-3">Thank You!</h3>
        <p className="text-[#a8a29e] max-w-md mx-auto">
          Your consultation request has been submitted. Our team will contact you
          within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-[#d6d3d1]">
            Full Name *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
            className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] h-12"
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-[#d6d3d1]"
          >
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="john@example.com"
            className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] h-12"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-[#d6d3d1]"
          >
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="(02) 5555 6789"
            className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] h-12"
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-[#d6d3d1]">
            Project Type *
          </Label>
          <Select
            value={formData.projectType}
            onValueChange={(value) =>
              setFormData({ ...formData, projectType: value ?? "" })
            }
          >
            <SelectTrigger className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] h-12">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-[#292524] border-[#3d3633]">
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="text-xs text-red-400">{errors.projectType}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-[#d6d3d1]">
            Budget Range *
          </Label>
          <Select
            value={formData.budget}
            onValueChange={(value) =>
              setFormData({ ...formData, budget: value ?? "" })
            }
          >
            <SelectTrigger className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] h-12">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent className="bg-[#292524] border-[#3d3633]">
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-xs text-red-400">{errors.budget}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="details"
          className="text-sm font-medium text-[#d6d3d1]"
        >
          Project Details *
        </Label>
        <Textarea
          id="details"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          rows={4}
          className="bg-[#292524] border-[#3d3633] focus:border-[#c9844c] resize-none"
        />
        {errors.details && (
          <p className="text-xs text-red-400">{errors.details}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#c9844c] text-[#131110] hover:bg-[#d4a574] font-semibold h-14 text-base"
      >
        Request Consultation
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
