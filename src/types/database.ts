// Database types for the portfolio

export interface Profile {
  id: string;
  email: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  phone: string | null;
  location: string | null;
  social_links: SocialLinks;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  website: string;
}

export interface Experience {
  id: string;
  role: string;
  company_name: string;
  company_logo_url: string | null;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  location: string | null;
  employment_type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
  description: string | null;
  tech_stack: string[];
  certificate_url: string | null;
  gallery_urls: string[];
  video_urls: string[];
  display_order: number;
  is_published: boolean;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  institution_name: string;
  university_board: string | null;
  institution_logo_url: string | null;
  degree: string;
  major: string;
  start_year: number;
  end_year: number | null;
  is_current: boolean;
  grade: string | null;
  location: string | null;
  description: string | null;
  key_courses: string[];
  certificate_url: string | null;
  gallery_urls: string[];
  video_urls: string[];
  display_order: number;
  is_published: boolean;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
  display_order: number;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category_id: string | null;
  category?: ProjectCategory;
  hero_image_url: string | null;
  short_description: string | null;
  full_description: string | null;
  is_featured: boolean;
  tech_stack: string[];
  github_url: string | null;
  demo_url: string | null;
  documentation_url: string | null;
  action_buttons: ActionButton[];
  gallery_urls: string[];
  video_urls: string[];
  contributors: Contributor[];
  enable_comments: boolean;
  enable_likes: boolean;
  likes_count: number;
  views_count: number;
  display_order: number;
  status: "draft" | "published" | "archived";
  development_date: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[];
  created_at: string;
  updated_at: string;
}

export interface ActionButton {
  label: string;
  url: string;
  icon?: string;
}

export interface Contributor {
  name: string;
  role: string;
  photo?: string;
  profile_url?: string;
}

export interface ProjectComment {
  id: string;
  project_id: string;
  parent_id: string | null;
  author_name: string;
  author_email: string;
  content: string;
  status: "pending" | "approved" | "spam" | "deleted";
  is_admin_reply: boolean;
  created_at: string;
  updated_at: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  display_order: number;
  created_at: string;
}

export interface Skill {
  id: string;
  category_id: string;
  category?: SkillCategory;
  name: string;
  icon_url: string | null;
  proficiency: number;
  years_experience: number | null;
  display_order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuer_logo_url: string | null;
  issue_date: string;
  expiry_date: string | null;
  no_expiry: boolean;
  credential_id: string | null;
  credential_url: string | null;
  certificate_file_url: string | null;
  description: string | null;
  related_skills: string[];
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  title: string;
  date_achieved: string;
  issuer: string | null;
  hero_image_url: string | null;
  certificate_url: string | null;
  description: string | null;
  category: "award" | "recognition" | "competition" | "leadership" | "milestone" | "other";
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal_name: string;
  publisher: string | null;
  publication_date: string;
  doi: string | null;
  url: string | null;
  pdf_url: string | null;
  abstract: string | null;
  keywords: string[];
  citations_count: number;
  impact_factor: number | null;
  publication_type: "journal" | "conference" | "book_chapter" | "thesis" | "preprint" | "other";
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  sender_name: string;
  sender_email: string;
  sender_phone: string | null;
  project_type: string | null;
  subject: string | null;
  message: string;
  is_read: boolean;
  is_starred: boolean;
  replied_at: string | null;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  unsubscribed_at: string | null;
}

export interface Resume {
  id: string;
  version: string;
  file_url: string;
  is_active: boolean;
  download_count: number;
  uploaded_at: string;
}

export interface SiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  owner_name: string;
  owner_title: string;
  owner_bio: string;
  owner_photo: string | null;
  contact_email: string;
  contact_phone: string | null;
  address: string | null;
  social_links: SocialLinks;
  meta_image: string | null;
  google_analytics_id: string | null;
  updated_at: string;
}
