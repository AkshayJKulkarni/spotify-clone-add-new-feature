
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, topic: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support request submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: ''
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-black via-[#121212] to-black">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Support</h1>
        <p className="text-xl text-[#1ED760] mb-12">How can we help you?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help Topics */}
          <div className="md:col-span-1">
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg border border-[#282828]">
              <h2 className="text-2xl font-bold text-white mb-4">Help Topics</h2>
              <ScrollArea className="h-72">
                <ul className="space-y-3 text-white pr-4">
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    Account Help
                  </li>
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    Subscription Options
                  </li>
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    Payment Issues
                  </li>
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    App Troubleshooting
                  </li>
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    Device Compatibility
                  </li>
                  <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] hover:border-l-4 hover:border-[#1ED760] transition-all cursor-pointer">
                    Playlist Recovery
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-[#121212] p-8 rounded-lg shadow-lg border border-[#282828]">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white font-medium">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#282828] text-white border-none focus:ring-[#1ED760] focus:border-[#1ED760]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white font-medium">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="bg-[#282828] text-white border-none focus:ring-[#1ED760] focus:border-[#1ED760]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-white font-medium">Topic</label>
                  <Select onValueChange={handleSelectChange} value={formData.topic}>
                    <SelectTrigger className="bg-[#282828] text-white border-none focus:ring-[#1ED760] focus:border-[#1ED760]">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#181818] text-white border-[#282828]">
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="subscription">Subscription Problems</SelectItem>
                      <SelectItem value="payment">Payment Questions</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-[#282828] text-white h-32 border-none focus:ring-[#1ED760] focus:border-[#1ED760]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-[#1ED760] hover:bg-[#1DB954] text-black font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 bg-[#121212] p-8 rounded-lg shadow-lg border border-[#282828]">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <div className="border-b border-[#282828] pb-4">
              <h3 className="text-xl text-white font-semibold mb-2">How do I cancel my subscription?</h3>
              <p className="text-[#A7A7A7]">You can cancel your subscription at any time through your Account page. Navigate to your account, click on Subscription, and select Cancel Subscription.</p>
            </div>
            <div className="border-b border-[#282828] pb-4">
              <h3 className="text-xl text-white font-semibold mb-2">Can I download music for offline listening?</h3>
              <p className="text-[#A7A7A7]">Yes! Premium subscribers can download music, podcasts, and playlists for offline listening on mobile devices.</p>
            </div>
            <div className="border-b border-[#282828] pb-4">
              <h3 className="text-xl text-white font-semibold mb-2">How do I recover my password?</h3>
              <p className="text-[#A7A7A7]">Go to the login page and click on "Forgot your password?" to receive a password reset link via email.</p>
            </div>
            <div className="pb-4">
              <h3 className="text-xl text-white font-semibold mb-2">Can I upgrade from Free to Premium?</h3>
              <p className="text-[#A7A7A7]">Absolutely! You can upgrade to Premium at any time. Visit our Premium page to view plans and make the switch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
