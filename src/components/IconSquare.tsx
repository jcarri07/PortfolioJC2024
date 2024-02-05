import { IconPhone, IconMail, IconMapPin, IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandBehance } from '@tabler/icons-react';


interface IconTypes {
    type: "phone" | "email" | "location" | "facebook" | "instagram" | "linkedlin" | "behance";
}

export default function IconSquare({type}: IconTypes) {
  return (
    
    <div className="flex justify-center items-center bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary w-12 h-12 rounded-lg shadow-lg shadow-cyan-500/50">
       {
        type === "phone" ? 
        <IconPhone size={20} color="#ffff" />: type === "email" ? 
        <IconMail size={20} color="#ffff" /> : type === "location" ? 
        <IconMapPin size={20} color="#ffff" /> : type === "facebook" ?
        <IconBrandFacebook size={20} color="#ffff" /> : type === "linkedlin" ? 
        <IconBrandLinkedin size={20} color="#ffff" /> : type === "instagram" ? 
        <IconBrandInstagram size={20} color="#ffff" /> : type === "behance" &&
        <IconBrandBehance size={20} color="#ffff" /> }
    </div>
  )
}
