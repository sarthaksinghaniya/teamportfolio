'use client';

import { motion } from 'framer-motion';
import { Users, Share2, Rocket, ArrowRight, Plus, X, Trophy, Mail, CheckCircle, AlertCircle, Loader2, Copy } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { openTeamForm, FORM_CONFIG, TEAM_FORMS } from '@/config/teamForms';

const ViralLoop = () => {
  const [teamSize, setTeamSize] = useState(1);
  const [emails, setEmails] = useState(['']);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [inviteLink, setInviteLink] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

  // Professional sender name with fallback safety
  const getSenderName = () => {
    const primarySender = "Sarthak (TechNeekX Founder)";
    const fallbackSender = "TechNeekX Team";
    return primarySender || fallbackSender;
  };

  // Initialize EmailJS
  if (typeof window !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const addEmail = () => {
    if (emails.length < 5) {
      setEmails([...emails, '']);
    }
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  // Email validation
  const validateEmail = (email: string) => {
    if (!email || email.trim() === '') {
      return false;
    }
    
    // More strict email regex for better validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  // Check for duplicate emails
  const hasDuplicates = () => {
    const filteredEmails = emails.filter(email => email.trim() !== '');
    const uniqueEmails = new Set(filteredEmails);
    return filteredEmails.length !== uniqueEmails.size;
  };

  // Get specific validation error message
  const getValidationErrorMessage = () => {
    const filteredEmails = emails.filter(email => email.trim() !== '');
    
    if (filteredEmails.length === 0) {
      return 'Please enter at least one email address';
    }
    
    const invalidEmails = filteredEmails.filter(email => !validateEmail(email));
    if (invalidEmails.length > 0) {
      return `Invalid email format: ${invalidEmails.join(', ')}`;
    }
    
    if (hasDuplicates()) {
      return 'Please remove duplicate email addresses';
    }
    
    return 'Please enter valid email addresses';
  };

  // Validate all emails
  const validateEmails = () => {
    const filteredEmails = emails.filter(email => email.trim() !== '');
    
    if (filteredEmails.length === 0) {
      return false;
    }

    // Check if all emails are valid
    const allValid = filteredEmails.every(email => validateEmail(email));
    
    // Check for duplicates
    const noDuplicates = !hasDuplicates();
    
    return allValid && noDuplicates;
  };

  // Send individual invite
  const sendInvite = async (email: string) => {
    // Validate email before sending
    if (!validateEmail(email)) {
      console.error('Invalid email address:', email);
      return false;
    }

    const templateParams = {
      to_email: email.trim(),
      from_name: getSenderName(),
      to_name: email.split('@')[0], // Extract name from email
      invite_link: TEAM_FORMS.member, // Send member form link
      message: `You've been invited to join TechNeekX as a team member! Apply now to become part of our innovative builder ecosystem.`
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      // Check if EmailJS response indicates success
      if (response.status === 200) {
        console.log('Email sent successfully to:', email);
        return true;
      } else {
        console.error('EmailJS error response:', response);
        return false;
      }
    } catch (error) {
      console.error('Failed to send email to', email, ':', error);
      return false;
    }
  };

  // Handle team invitation
  const handleInviteTeam = async () => {
    if (!validateEmails()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSending(true);
    setShowError(false);
    setShowSuccess(false);

    const filteredEmails = emails.filter(email => email.trim() !== '');

    try {
      // Send all invites concurrently
      const results = await Promise.all(
        filteredEmails.map(email => sendInvite(email))
      );

      const successCount = results.filter(Boolean).length;
      const failureCount = filteredEmails.length - successCount;

      if (successCount === filteredEmails.length) {
        setShowSuccess(true);
        // Clear emails after successful send
        setEmails(['']);
        setTeamSize(1);
      } else if (successCount > 0) {
        // Partial success - show error with details
        setShowError(true);
        console.log(`Sent ${successCount} emails, ${failureCount} failed`);
      } else {
        // All failed
        setShowError(true);
      }
    } catch (error) {
      console.error('Error sending invites:', error);
      setShowError(true);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 5000);
    }
  };

  // Generate invite link
  const generateInviteLink = () => {
    const link = TEAM_FORMS.member; // Use member form link
    setInviteLink(link);
  };

  // Copy invite link
  const copyInviteLink = async () => {
    const memberFormLink = TEAM_FORMS.member;
    
    try {
      await navigator.clipboard.writeText(memberFormLink);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="gradient-blob w-96 h-96 bg-gradient-to-r from-green-500/15 to-blue-500/15 top-10 right-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="gradient-blob w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 bottom-10 left-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Share Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 mb-8 glow"
          >
            <Share2 className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 heading-premium"
          >
            Build With Your
            <br />
            <span className="text-gradient"> Network</span>
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed subheading-premium mb-12"
          >
            Invite your friends and teammates. Build together, win together.
          </motion.p>

          {/* Team Builder */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Form Your Team</h3>
            
            {/* Team Size Selector */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-6 h-6 text-white/60" />
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTeamSize(size)}
                    className={`w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                      teamSize === size
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                        : 'glass text-white/60 hover:text-white'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Email Inputs */}
            <div className="space-y-3">
              {emails.slice(0, teamSize).map((email, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      placeholder={`Team member ${index + 1} email`}
                      value={email}
                      onChange={(e) => updateEmail(index, e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 glass rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        validateEmail(email) && email.trim() !== ''
                          ? 'focus:ring-green-500 border-green-500/30'
                          : 'focus:ring-blue-500 border-blue-500/30'
                      } border border-white/10`}
                    />
                    {email.trim() !== '' && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {validateEmail(email) ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    )}
                  </div>
                  {emails.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeEmail(index)}
                      className="p-2 glass rounded-lg text-white/60 hover:text-red-400 transition-colors"
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Add Team Member Button */}
            {emails.length < 5 && (
              <motion.div className="flex justify-center mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addEmail}
                  className="w-full py-3 glass rounded-xl text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-white/20"
                >
                  <Plus size={16} />
                  Add Team Member
                </motion.button>
              </motion.div>
            )}

            {/* Error/Success Messages */}
            {showError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 glass rounded-xl border border-red-500/30 text-red-400"
              >
                <AlertCircle size={16} />
                <span className="text-sm">
                  {getValidationErrorMessage()}
                </span>
              </motion.div>
            )}

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 glass rounded-xl border border-green-500/30 text-green-400"
              >
                <CheckCircle size={16} />
                <span className="text-sm">Invites sent successfully 🚀</span>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Rocket className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Build Together</h4>
              <p className="text-white/60 text-sm">Collaborate on projects as a team</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Win Together</h4>
              <p className="text-white/60 text-sm">Compete as a team in hackathons</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="card-hover rounded-2xl p-6 text-center glass"
            >
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Grow Together</h4>
              <p className="text-white/60 text-sm">Build your network and skills</p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleInviteTeam}
              disabled={isSending}
              className={`btn-primary flex items-center gap-2 ${
                isSending ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Rocket className="w-5 h-5" />
              )}
              {isSending ? 'Sending Invites...' : 'Invite Your Team'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openTeamForm('member')}
              className="btn-secondary flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Join as Member
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyInviteLink}
              className="btn-secondary flex items-center gap-2"
            >
              <Copy className="w-5 h-5" />
              {showCopySuccess ? 'Member Form Link Copied!' : 'Copy Member Form Link'}
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-6"
          >
            <p className="text-white/60 text-sm">
              {FORM_CONFIG.member.trustIndicator}
            </p>
            <p className="text-white/40 text-xs mt-1">
              {FORM_CONFIG.member.timeEstimate}
            </p>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm mt-8"
          >
            Teams get priority access to exclusive opportunities and resources
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ViralLoop;
