import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface MenuItemData {
    title: string;
    subtitle: string;
    date: string;
    image: string;
}

interface FlowingMenuProps {
    items?: MenuItemData[];
    speed?: number;
    marqueeBgColor?: string;
    marqueeTextColor?: string;
}

interface MenuItemProps extends MenuItemData {
    speed: number;
    marqueeBgColor: string;
    marqueeTextColor: string;
    isFirst: boolean;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
    items = [],
    speed = 15,
    marqueeBgColor = '#ffffff', // Warna background saat di-hover
    marqueeTextColor = '#000000', // Warna teks saat di-hover
}) => {
    return (
        <div className="w-full flex flex-col">
            {items.map((item, idx) => (
                <MenuItem
                    key={idx}
                    {...item}
                    speed={speed}
                    marqueeBgColor={marqueeBgColor}
                    marqueeTextColor={marqueeTextColor}
                    isFirst={idx === 0}
                />
            ))}
        </div>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({
    title,
    subtitle,
    date,
    image,
    speed,
    marqueeBgColor,
    marqueeTextColor,
}) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeInnerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);
    const [repetitions, setRepetitions] = useState(4);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
        const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
        const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    useEffect(() => {
        const calculateRepetitions = () => {
            if (!marqueeInnerRef.current) return;
            const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part') as HTMLElement;
            if (!marqueeContent) return;
            const contentWidth = marqueeContent.offsetWidth;
            const viewportWidth = window.innerWidth;
            const needed = Math.ceil(viewportWidth / contentWidth) + 2;
            setRepetitions(Math.max(4, needed));
        };

        calculateRepetitions();
        window.addEventListener('resize', calculateRepetitions);
        return () => window.removeEventListener('resize', calculateRepetitions);
    }, [title, image]);

    useEffect(() => {
        const setupMarquee = () => {
            if (!marqueeInnerRef.current) return;
            const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part') as HTMLElement;
            if (!marqueeContent) return;
            const contentWidth = marqueeContent.offsetWidth;
            if (contentWidth === 0) return;

            if (animationRef.current) {
                animationRef.current.kill();
            }

            animationRef.current = gsap.to(marqueeInnerRef.current, {
                x: -contentWidth,
                duration: speed,
                ease: 'none',
                repeat: -1
            });
        };

        const timer = setTimeout(setupMarquee, 50);
        return () => {
            clearTimeout(timer);
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [title, image, repetitions, speed]);

    const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    return (
        // Bagian wrapper kita jadikan relative dengan overflow-hidden agar marquee tidak keluar batas
        <div className="relative overflow-hidden rounded-xl border-b border-neutral-800" ref={itemRef}>

            {/* DESAIN ASLI MILIKMU (Base Layer) */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 hover:bg-white/[0.02] transition-colors duration-300 px-4 relative z-10 w-full"
            >
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <span className="text-neutral-400 text-sm mt-1">{subtitle}</span>
                </div>
                <span className="text-neutral-500 text-sm mt-2 sm:mt-0 whitespace-nowrap">
                    {date}
                </span>
            </div>

            {/* ANIMASI REACT BITS (Overlay Marquee saat Hover) */}
            <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-20 flex items-center"
                ref={marqueeRef}
                style={{ backgroundColor: marqueeBgColor }}
            >
                <div className="h-full w-fit flex items-center" ref={marqueeInnerRef}>
                    {[...Array(repetitions)].map((_, idx) => (
                        <div className="marquee-part flex items-center flex-shrink-0" key={idx}>
                            <span
                                className="whitespace-nowrap uppercase font-bold text-xl px-4"
                                style={{ color: marqueeTextColor }}
                            >
                                {title}
                            </span>
                            <div
                                className="w-[120px] h-[40px] my-2 mx-2 rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlowingMenu;