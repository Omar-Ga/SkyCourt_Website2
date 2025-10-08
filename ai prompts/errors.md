[{
	"resource": "/C:/Users/Pc/Downloads/project/src/components/FeatureItem.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type '{ hidden: { opacity: number; y: number; }; visible: { opacity: number; y: number; transition: { duration: number; ease: string; }; }; }' is not assignable to type 'Variants'.\n  Property 'visible' is incompatible with index signature.\n    Type '{ opacity: number; y: number; transition: { duration: number; ease: string; }; }' is not assignable to type 'Variant'.\n      Type '{ opacity: number; y: number; transition: { duration: number; ease: string; }; }' is not assignable to type 'TargetAndTransition'.\n        Type '{ opacity: number; y: number; transition: { duration: number; ease: string; }; }' is not assignable to type '{ transition?: Transition<any> | undefined; transitionEnd?: ResolvedValues | undefined; }'.\n          Types of property 'transition' are incompatible.\n            Type '{ duration: number; ease: string; }' is not assignable to type 'Transition<any> | undefined'.\n              Type '{ duration: number; ease: string; }' is not assignable to type 'TransitionWithValueOverrides<any>'.\n                Type '{ duration: number; ease: string; }' is not assignable to type 'ValueAnimationTransition<any>'.\n                  Types of property 'ease' are incompatible.\n                    Type 'string' is not assignable to type 'Easing | Easing[] | undefined'.",
	"source": "ts",
	"startLineNumber": 22,
	"startColumn": 17,
	"endLineNumber": 22,
	"endColumn": 25,
	"relatedInformation": [
		{
			"startLineNumber": 1800,
			"startColumn": 5,
			"endLineNumber": 1800,
			"endColumn": 13,
			"message": "The expected type comes from property 'variants' which is declared here on type 'IntrinsicAttributes & Omit<HTMLMotionProps<\"div\">, \"ref\"> & RefAttributes<HTMLDivElement>'",
			"resource": "/c:/Users/Pc/Downloads/project/node_modules/motion-dom/dist/index.d.ts"
		}
	]
}]