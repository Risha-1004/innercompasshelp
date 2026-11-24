import { c as createLucideIcon, u as useAppStore, a8 as useProfile, a as useAuth, ap as useUpdatePreferences, aq as useCompleteOnboarding, j as jsxRuntimeExports, C as Card, e as CardContent, ar as Switch, n as Button, as as LogOut, q as ue, W as Wind, M as Moon } from "./index-DFvfOFum.js";
import { S as Separator } from "./separator-hWxau96G.js";
import { C as Check } from "./check-cnWiErfm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
];
const Sunset = createLucideIcon("sunset", __iconNode);
const THEMES = [
  {
    id: "cloud",
    name: "Cloud",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { size: 14 }),
    gradient: "linear-gradient(135deg, oklch(0.90 0.04 240), oklch(0.97 0.01 220))",
    accentClass: "bg-[oklch(0.65_0.11_270)]"
  },
  {
    id: "ocean",
    name: "Ocean",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 14 }),
    gradient: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.03 250))",
    accentClass: "bg-[oklch(0.72_0.18_190)]"
  },
  {
    id: "sunset",
    name: "Sunset",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunset, { size: 14 }),
    gradient: "linear-gradient(135deg, oklch(0.92 0.05 45), oklch(0.82 0.10 30))",
    accentClass: "bg-[oklch(0.75_0.18_25)]"
  },
  {
    id: "night",
    name: "Night",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 14 }),
    gradient: "linear-gradient(135deg, oklch(0.16 0.01 260), oklch(0.22 0.02 270))",
    accentClass: "bg-[oklch(0.68_0.14_270)]"
  }
];
const FONT_SIZES = [
  { id: "sm", label: "A−", display: "Small" },
  { id: "base", label: "A", display: "Default" },
  { id: "lg", label: "A+", display: "Large" }
];
function SettingsSection({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-foreground text-sm uppercase tracking-wider", children: title }),
    children
  ] });
}
function SettingsPage() {
  var _a, _b;
  const {
    theme,
    fontSize,
    highContrast,
    setTheme,
    setFontSize,
    setHighContrast
  } = useAppStore();
  const { data: profile } = useProfile();
  const { logout } = useAuth();
  const updatePrefs = useUpdatePreferences();
  const completeOnboarding = useCompleteOnboarding();
  const hasPeriods = ((_a = profile == null ? void 0 : profile.onboarding) == null ? void 0 : _a.hasPeriods) ?? false;
  const currentGender = ((_b = profile == null ? void 0 : profile.onboarding) == null ? void 0 : _b.gender) ?? null;
  async function savePrefs(overrides) {
    try {
      await updatePrefs.mutateAsync({
        theme: overrides.theme ?? theme,
        fontSize: overrides.fontSize ?? fontSize,
        highContrast: overrides.highContrast ?? highContrast
      });
    } catch {
      ue.error("Could not save preference — please try again.");
    }
  }
  function handleTheme(t) {
    setTheme(t);
    savePrefs({ theme: t });
  }
  function handleFontSize(s) {
    setFontSize(s);
    savePrefs({ fontSize: s });
  }
  function handleHighContrast(val) {
    setHighContrast(val);
    savePrefs({ highContrast: val });
  }
  async function handlePeriodToggle(val) {
    try {
      await completeOnboarding.mutateAsync({
        hasPeriods: val,
        gender: currentGender
      });
      ue.success(
        val ? "Period tracking enabled." : "Period tracking disabled."
      );
    } catch {
      ue.error("Could not update — please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Personalise your experience. Changes apply immediately." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsSection, { title: "Visual Theme", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
        "data-ocid": "theme-selector",
        children: THEMES.map((t) => {
          const active = theme === t.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleTheme(t.id),
              className: `relative rounded-xl overflow-hidden border-2 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active ? "border-primary shadow-elevated" : "border-border hover:border-primary/40"}`,
              "aria-label": `${t.name} theme${active ? " (selected)" : ""}`,
              "aria-pressed": active,
              "data-ocid": `theme-btn-${t.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-14 w-full",
                    style: { background: t.gradient }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 w-full ${t.accentClass}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1.5 bg-card", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: t.name }),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Check,
                    {
                      size: 12,
                      className: "text-primary",
                      "aria-hidden": "true"
                    }
                  )
                ] })
              ]
            },
            t.id
          );
        })
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsSection, { title: "Font Size", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-2",
          "data-ocid": "font-size-selector",
          children: FONT_SIZES.map((s) => {
            const active = fontSize === s.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleFontSize(s.id),
                "aria-label": `${s.display} font size`,
                "aria-pressed": active,
                "data-ocid": `font-size-btn-${s.id}`,
                className: `flex-1 rounded-lg border-2 py-2 font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-muted text-muted-foreground hover:border-primary/40"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: s.id === "sm" ? "preview-size-sm" : s.id === "lg" ? "preview-size-lg" : "preview-size-base",
                    children: s.label
                  }
                )
              },
              s.id
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-muted px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `text-foreground leading-relaxed ${fontSize === "sm" ? "preview-live-sm" : fontSize === "lg" ? "preview-live-lg" : "preview-live-base"}`,
          children: 'Preview: "You are resilient and worthy of care."'
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsSection, { title: "Accessibility", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: "High contrast mode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "Increases colour contrast for improved readability." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: highContrast,
          onCheckedChange: handleHighContrast,
          "aria-label": "Toggle high contrast mode",
          "data-ocid": "high-contrast-toggle"
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsSection, { title: "Period Tracking", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: "Do you track your period?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "Enables the cycle tracker in your sidebar. You can change this at any time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: hasPeriods,
          onCheckedChange: handlePeriodToggle,
          disabled: completeOnboarding.isPending,
          "aria-label": "Toggle period tracking",
          "data-ocid": "period-tracking-toggle"
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "logout-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "destructive",
          className: "w-full sm:w-auto",
          onClick: logout,
          "data-ocid": "logout-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 15, className: "mr-2" }),
            "Sign out"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-2", children: "You will be returned to the home screen." })
    ] })
  ] });
}
export {
  SettingsPage as default
};
