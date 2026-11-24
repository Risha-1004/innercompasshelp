import ProfileTypes "types/profile";
import Map "mo:core/Map";
import List "mo:core/List";
import MoodTypes "types/mood";
import HabitTypes "types/habit";
import CycleTypes "types/cycle";
import JournalTypes "types/journal";
import GoalTypes "types/goal";
import SleepTypes "types/sleep";
import WaterTypes "types/water";
import QuizTypes "types/quiz";
import SafetyTypes "types/safety";

module {
  // ── Old types (inlined from previous version) ──────────────────────────────
  type OldOnboardingData = {
    completed : Bool;
    hasPeriods : ?Bool;
  };

  type OldUserProfile = {
    userId : Principal;
    onboarding : OldOnboardingData;
    preferences : ProfileTypes.UserPreferences;
    createdAt : Int;
  };

  // ── Actor state shapes ──────────────────────────────────────────────────────
  type OldActor = {
    profiles : Map.Map<Principal, OldUserProfile>;
    moodLogs : Map.Map<Principal, List.List<MoodTypes.MoodEntry>>;
    habits : Map.Map<Principal, List.List<HabitTypes.Habit>>;
    habitCompletions : Map.Map<Principal, List.List<HabitTypes.HabitCompletion>>;
    cycleLogs : Map.Map<Principal, List.List<CycleTypes.CycleLog>>;
    symptomsLogs : Map.Map<Principal, List.List<CycleTypes.SymptomsLog>>;
    journals : Map.Map<Principal, List.List<JournalTypes.JournalEntry>>;
    goals : Map.Map<Principal, List.List<GoalTypes.Goal>>;
    sleepLogs : Map.Map<Principal, List.List<SleepTypes.SleepLog>>;
    waterLogs : Map.Map<Principal, List.List<WaterTypes.WaterIntakeEntry>>;
    waterGoals : Map.Map<Principal, Nat>;
    quizResults : Map.Map<Principal, List.List<QuizTypes.QuizResult>>;
    safetyPlans : Map.Map<Principal, SafetyTypes.SafetyPlan>;
  };

  type NewActor = {
    profiles : Map.Map<Principal, ProfileTypes.UserProfile>;
    moodLogs : Map.Map<Principal, List.List<MoodTypes.MoodEntry>>;
    habits : Map.Map<Principal, List.List<HabitTypes.Habit>>;
    habitCompletions : Map.Map<Principal, List.List<HabitTypes.HabitCompletion>>;
    cycleLogs : Map.Map<Principal, List.List<CycleTypes.CycleLog>>;
    symptomsLogs : Map.Map<Principal, List.List<CycleTypes.SymptomsLog>>;
    journals : Map.Map<Principal, List.List<JournalTypes.JournalEntry>>;
    goals : Map.Map<Principal, List.List<GoalTypes.Goal>>;
    sleepLogs : Map.Map<Principal, List.List<SleepTypes.SleepLog>>;
    waterLogs : Map.Map<Principal, List.List<WaterTypes.WaterIntakeEntry>>;
    waterGoals : Map.Map<Principal, Nat>;
    quizResults : Map.Map<Principal, List.List<QuizTypes.QuizResult>>;
    safetyPlans : Map.Map<Principal, SafetyTypes.SafetyPlan>;
  };

  public func run(old : OldActor) : NewActor {
    let profiles = old.profiles.map<Principal, OldUserProfile, ProfileTypes.UserProfile>(
      func(_id, p) {
        {
          p with
          onboarding = { p.onboarding with gender = null : ?ProfileTypes.Gender };
        };
      }
    );
    {
      profiles;
      moodLogs = old.moodLogs;
      habits = old.habits;
      habitCompletions = old.habitCompletions;
      cycleLogs = old.cycleLogs;
      symptomsLogs = old.symptomsLogs;
      journals = old.journals;
      goals = old.goals;
      sleepLogs = old.sleepLogs;
      waterLogs = old.waterLogs;
      waterGoals = old.waterGoals;
      quizResults = old.quizResults;
      safetyPlans = old.safetyPlans;
    };
  };
};
